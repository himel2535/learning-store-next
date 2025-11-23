"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center gap-5 py-5">
      <Link href="/">Home</Link>
      <Link href="/allBooks">All Books</Link>
      <Link href="/about">About</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/dashboard">dashboard</Link>
    </div>
  );
};

export default Navbar;
