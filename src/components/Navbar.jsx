import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>Services</Link>
        </li>
        <li>
          <Link href={"/"}>Blog</Link>
        </li>
        <li>
          <Link href={"/"}>Contac</Link>
        </li>
      </>
    );
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
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
        <a className="btn btn-ghost text-xl">
          <Image
            src={"/assets/logo.svg"}
            height={50}
            width={60}
            alt="logo"
          ></Image>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
      </div>
      <div className="navbar-end">
        <Link
          href={"/sign-up"}
          className="btn btn-outline border-orange-400 text-orange-600"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
