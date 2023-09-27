"use client";

import { signIn, signOut } from "next-auth/react";

export const Login = () => {
  return (
    <button className="p-2 border" onClick={() => signIn()}>
      Sign In
    </button>
  );
};

export const Logout = () => {
  return (
    <button className="p-2 border" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};
