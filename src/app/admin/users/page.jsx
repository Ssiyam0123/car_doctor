import React from "react";
import AdminUsersTable from "../../../components/AdminUsersTable";
import { connectDb, collectionName } from "../../../lib/mongodb";

export default async function AdminUsersPage() {
  let users = [];

  try {
    const usersCollection = await connectDb(collectionName.userCollection);
    const usersData = await usersCollection
      .find({}, { projection: { password: 0 } })
      .sort({ createdAt: -1 })
      .toArray();

    users = usersData.map((user) => ({
      ...user,
      _id: user._id.toString(),
      createdAt: user.createdAt ? user.createdAt.toISOString() : null,
    }));
  } catch (error) {
    console.error("Error loading users for admin:", error);
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <AdminUsersTable initialUsers={users} />
    </div>
  );
}
