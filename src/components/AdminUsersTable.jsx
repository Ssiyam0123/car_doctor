"use client";

import React, { useState } from "react";
import axios from "axios";
import { User, Mail, Shield, ShieldAlert, Calendar } from "lucide-react";

export default function AdminUsersTable({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers);

  const handleToggleRole = async (id, currentRole) => {
    const newRole = currentRole === "admin" ? "user" : "admin";
    if (!confirm(`Are you sure you want to change this user's role to ${newRole}?`)) return;

    try {
      const response = await axios.patch("/api/users", { id, role: newRole });
      if (response.status === 200) {
        setUsers((prev) =>
          prev.map((user) =>
            user._id === id ? { ...user, role: newRole } : user
          )
        );
      }
    } catch (err) {
      console.error("Error updating user role:", err);
      alert("Failed to update user role");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">Manage Users</h1>
          <p className="text-gray-500 mt-1">View all registered system accounts and manage their roles.</p>
        </div>
        <div className="bg-orange-50 text-orange-700 px-4 py-2 rounded-xl border border-orange-200 font-semibold text-sm">
          Total Users: {users.length}
        </div>
      </div>

      {users.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-200">
          <User className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-700">No Users Found</h3>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Join Date</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-50 transition-colors">
                    {/* User Info */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 text-gray-600 font-bold text-lg">
                          {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{user.name || "Unnamed User"}</div>
                        </div>
                      </div>
                    </td>

                    {/* Email */}
                    <td className="px-6 py-4">
                      <div className="text-gray-600 flex items-center gap-1.5">
                        <Mail className="h-4 w-4 text-gray-400" />
                        {user.email}
                      </div>
                    </td>

                    {/* Join Date */}
                    <td className="px-6 py-4">
                      <div className="text-gray-500 flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
                      </div>
                    </td>

                    {/* Role Badge */}
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
                          user.role === "admin"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {user.role === "admin" ? (
                          <>
                            <Shield className="h-3 w-3" />
                            Admin
                          </>
                        ) : (
                          "User"
                        )}
                      </span>
                    </td>

                    {/* Action Button */}
                    <td className="px-6 py-4 text-right">
                      {user.email.toLowerCase() === "ssiyam563@gmail.com" ? (
                        <span className="text-xs text-gray-400 italic">Primary Admin</span>
                      ) : (
                        <button
                          onClick={() => handleToggleRole(user._id, user.role)}
                          className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                            user.role === "admin"
                              ? "bg-red-50 text-red-600 hover:bg-red-100"
                              : "bg-orange-50 text-orange-600 hover:bg-orange-100"
                          }`}
                        >
                          {user.role === "admin" ? "Demote to User" : "Make Admin"}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
