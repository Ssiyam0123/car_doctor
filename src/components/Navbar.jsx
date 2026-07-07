"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.role === "admin";

  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/services"}>Services</Link>
        </li>
        {isAdmin && (
          <>
            <li>
              <Link href={"/admin/bookings"}>Admin Bookings</Link>
            </li>
            <li>
              <Link href={"/admin/users"}>Admin Users</Link>
            </li>
          </>
        )}
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </>
    );
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navMenu()}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          <Image
            src={"/assets/logo.svg"}
            height={50}
            width={60}
            alt="logo"
          ></Image>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
      </div>
      <div className="navbar-end gap-3">
        {status === "authenticated" ? (
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-700 hidden sm:inline-block">
              Hello, {session.user.name || "User"}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="btn btn-outline border-red-500 hover:bg-red-500 hover:text-white text-red-500"
            >
              Log Out
            </button>
          </div>
        ) : (
          <Link
            href={"/login"}
            className="btn btn-outline border-orange-400 text-orange-600"
          >
            Login / Appointment
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
