import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

const Login = async () => {
  const session = await getServerSession(options);

  return (
    <div>
      {session ? (
        <Link href="/api/auth/signout?callbackUrl=/">Log Out</Link>
      ) : (
        <Link href="/api/auth/signin?callbackUrl=/addProduct">Create Product</Link>
      )}
    </div>
  );
};

export default Login;
