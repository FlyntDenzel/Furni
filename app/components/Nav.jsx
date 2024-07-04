// "use client"

import Link from "next/link";
import React from "react";
import { getServerSession } from "next-auth";
import { FaUser } from "react-icons/fa6";
import Login from "./Login";

const Nav = () => {
  return (
    <nav className="flex justify-between items-center text-white">
      <Link href={`/`} className="font-bold text-3xl">
        Furni.
      </Link>

      {/* Desktop Navigation */}
      <div className="max-sm:hidden flex justify-between gap-5 font-bold">
        <Link href={`Home`}>Home</Link>
        <Link href={`Shop`}>Shop</Link>
        <Link href={`contact`}>Contact Us</Link>
        <Login />
        <Link href={`contact`}>
          <FaUser />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
