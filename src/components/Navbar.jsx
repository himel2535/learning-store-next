"use client";

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <div className="navbar bg-white text-black shadow-sm px-4">
      {/* Left side */}
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/allBooks">All Books</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        {/* Logo / brand */}
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          MyLibrary
        </Link>
      </div>

      {/* Center links for large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/allBooks">All Books</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>

      {/* Right side buttons */}
      <div className="navbar-end">
        {user ? (
          <button onClick={logout} className="btn bg-black text-white">
            Logout
          </button>
        ) : (
          <Link href="/login" className="btn  bg-black text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
