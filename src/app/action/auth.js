"use server";

import { Timestamp } from "mongodb";

const { connectDb, collectionName } = require("@/lib/mongodb");

export const registerUser = async (userInfo) => {
  console.log({ userInfo });
  const userCollection = await connectDb(collectionName.userCollection);
  const user = await userCollection.findOne({ email: userInfo?.email });
  //   console.log(user);

  if (user) {
    return { success: null };
  } else {
    const result = await userCollection.insertOne({
      ...userInfo,
      createdAt: new Date(),
    });
    console.log(result);
    const { acknowledge, insertedId } = result;
    return { acknowledge, insertedId };
  }

  return { success: flase };
};
