import { connectDb, collectionName } from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const usersCollection = await connectDb(collectionName.userCollection);
    const users = await usersCollection.find({}, { projection: { password: 0 } }).toArray();

    // Map _id to string for safety
    const safeUsers = users.map(user => ({
      ...user,
      _id: user._id.toString()
    }));

    return NextResponse.json(safeUsers, { status: 200 });
  } catch (error) {
    console.error("Fetch users error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    const { id, role } = body;

    if (!id || !role) {
      return NextResponse.json({ error: "User ID and Role are required" }, { status: 400 });
    }

    const usersCollection = await connectDb(collectionName.userCollection);
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { role } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: `User role updated to ${role} successfully` }, { status: 200 });
  } catch (error) {
    console.error("Update user role error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
