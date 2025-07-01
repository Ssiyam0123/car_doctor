import { error, success } from "@/lib/apiResponse";
import bcrypt from "bcryptjs";
import { collectionName, connectDb } from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = request.json();
    const { email, password } = body;
    const userDb = connectDb(collectionName.userCollection);
    const isExisted = await userDb.findOne({ email });

    if (isExisted) {
      const compare = bcrypt.compare(password, isExisted.password);
      if (compare) {
        return success({
          message: "Login succesdsfull",
          user: {
            id: isExisted._id,
            name: isExisted.name,
            email: isExisted.email,
            createdAt: isExisted.createdAt,
          },
        });
      } else {
        return error("invalid credintials", 401);
      }
    }

    return error("user doesnt exist");
  } catch (err) {
    return error("login falied");
  }
}
