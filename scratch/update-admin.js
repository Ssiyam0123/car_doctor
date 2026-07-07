const { MongoClient } = require('mongodb');
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const MONGODB_URI = "mongodb://yt:MNuNg1eKCoTi9cau@cluster0-shard-00-00.kgw4w.mongodb.net:27017,cluster0-shard-00-01.kgw4w.mongodb.net:27017,cluster0-shard-00-02.kgw4w.mongodb.net:27017/car-doctor?ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

async function run() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const db = client.db("car-doctor");
    const usersCollection = db.collection("users");

    console.log("Looking up user ssiyam563@gmail.com...");
    const user = await usersCollection.findOne({ email: "ssiyam563@gmail.com" });

    if (user) {
      const result = await usersCollection.updateOne(
        { _id: user._id },
        { $set: { role: "admin" } }
      );
      console.log(`User role updated to admin. Modified count: ${result.modifiedCount}`);
    } else {
      // Create user if not exists
      const result = await usersCollection.insertOne({
        name: "ssiyam563",
        email: "ssiyam563@gmail.com",
        role: "admin",
        createdAt: new Date()
      });
      console.log(`User ssiyam563@gmail.com not found, so created as Admin with ID: ${result.insertedId}`);
    }
  } catch (error) {
    console.error("Error updating user:", error);
  } finally {
    await client.close();
    process.exit(0);
  }
}

run();
