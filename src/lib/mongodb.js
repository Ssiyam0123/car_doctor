import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const options = {
  serverApi: {
    version: '1',
    strict: true,
    deprecationErrors: true,
  }
};

let client;
let clientPromise;

if (!process.env.MONGO_URI) {
  throw new Error('Please define MONGODB_URI');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export async function connectDb() {
  const client = await clientPromise;
  return client.db('car_doctor'); // Return the database instance
}