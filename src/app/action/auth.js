"use server";

import bcrypt from "bcryptjs";

import { connectDb, collectionName } from "../../lib/mongodb"

export const registerUser = async (userInfo) => {
  const { name, email, password } = userInfo;
  // console.log(name, email, password);
  const userCollection = await connectDb(collectionName.userCollection);
  const user = await userCollection.findOne({ email: email });
  // console.log(user)
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userData = {
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  };

  if (user) {
    return {success: true, userData}
  } else {
    const result = await userCollection.insertOne(userData);
    console.log(result);
    const { acknowledge, insertedId } = result;
    return { acknowledge, insertedId };
  }

  return { success: flase };
};

export const loginUser = async (userInfo) => {
  const { email, password } = userInfo;
  console.log(email,password)
  const userCollection = await connectDb(collectionName.userCollection);
  const user = await userCollection.findOne({ email: email });
  console.log(user)
  console.log(user?.password)
  if (user) {
    const compare =await bcrypt.compare(password, user?.password);
   if (compare) return console.log({ success: true })
   else return console.log({ success: false })
  } else return console.log( { success: false });
};
