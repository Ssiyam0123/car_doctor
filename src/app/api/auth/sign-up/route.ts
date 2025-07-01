import { collectionName, connectDb } from "../../../../lib/mongodb.js";
import { success, error } from "../../../../lib/apiResponse.js";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return error("All fields are required", 400);
    }

    const userDb = await connectDb(collectionName.userCollection);
    const existingUser = await userDb.findOne({ email });

    if (existingUser) {
      return error("Email already registered", 409);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    const result = await userDb.insertOne(userData);

    if (!result.insertedId) {
      return error("Failed to register user", 500);
    }

    return success({
      message: "User registered successfully",
      user: {
        id: result.insertedId,
        name,
        email,
        createdAt: userData.createdAt,
      },
    }, 201);
  } catch (err) {
    console.error(err);
    return error("Something went wrong", 500);
  }
}
