"use client";

import { registerUser } from "@/app/action/auth";
import { Facebook, Linkedin, RectangleGoggles } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";

const FromSetup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
   
    await registerUser(data);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2"
      >
        <label htmlFor="" className="text-xl font-semibold">
          Name
        </label>
        <input
          required
          className="border-2 p-4 rounded-2xl text-xl"
          type="text"
          placeholder="Your name"
          {...register("name", require)}
        />
        <label htmlFor="" className="text-xl font-semibold">
          Email
        </label>
        <input
          required
          className="border-2 p-4 rounded-2xl text-xl"
          type="email"
          placeholder="Ente your email"
          {...register("email", require)}
        />
        <label htmlFor="" className="text-xl font-semibold">
          Password
        </label>
        <input
          required
          className="border-2 p-4 rounded-2xl text-xl"
          type="password"
          placeholder="your password"
          {...register("password", require)}
        />
        <input
          type="submit"
          className="btn rounded-2xl bg-orange-600 text-white mt-2"
        />
      </form>
      <div>
        <p className="font-bold text-center mt-5 mb-5">Or signUp with</p>
        <div className="flex gap-10 items-center justify-center">
          <Facebook size={40} className="bg-slate-300 p-2 rounded-full" />
          <Linkedin size={40} className="bg-slate-300 p-2 rounded-full" />
          <RectangleGoggles
            size={40}
            className="bg-slate-300 p-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default FromSetup;
