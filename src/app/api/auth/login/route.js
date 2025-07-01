import { error, success } from "../../../../lib/apiResponse.js";
import bcrypt from "bcryptjs";
import { collectionName, connectDb } from "../../../../lib/mongodb.js";
import { NextResponse } from "next/server.js";

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email, password } = body;
    console.log(email,password)
    
    // Validate required fields
    if (!email || !password) {
      return error("Email and password are required", 400);
    }

    const userDb = await connectDb(collectionName.userCollection);
    const user = await userDb.findOne({ email });
console.log(user)
    if (!user) {
      return error("Invalid credentials", 401); // Don't reveal if user exists
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return error("Invalid credentials", 401);
    }

    return success({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    });

  } catch (err) {
    // console.error("Login error:", err);
    return error("An error occurred during login", 500);
  }
}