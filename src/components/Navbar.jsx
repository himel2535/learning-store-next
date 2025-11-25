"use client";

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="navbar bg-white text-black shadow-sm px-4 sticky top-0 z-50">
      {/* LEFT - Logo */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          {/* Mobile menu items */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link href="/" scroll={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/allBooks">All Books</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/addBook">Add Book</Link>
            </li>

            {/* Mobile user dropdown */}
            {user && (
              <li>
                <details>
                  <summary>{user?.email}</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/add-product">Add Product</Link>
                    </li>
                    <li>
                      <Link href="/manage-products">Manage Products</Link>
                    </li>
                    <li>
                      <button onClick={logout}>Logout</button>
                    </li>
                  </ul>
                </details>
              </li>
            )}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/learningBook.png" alt="logo" width={42} height={42} />
          <h1 className="text-xl font-bold">Learning Books</h1>
        </Link>
      </div>

      {/* CENTER - routes */}
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
            <Link href="/addBook">Add Book</Link>
          </li>
        </ul>
      </div>

      {/* RIGHT - Login/Register OR User Dropdown */}
      <div className="navbar-end gap-3">
        {!user && (
          <>
            <Link href="/login" className="btn bg-black text-white">
              Login
            </Link>
            <Link href="/register" className="btn bg-black text-white">
              Register
            </Link>
          </>
        )}

        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn bg-black text-white">
              {user.email}
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu mt-3 p-2 shadow bg-white rounded-box w-52"
            >
              <li className="px-4 py-2 text-sm">
                Signed in as <br />
                <span className="font-bold">{user.email}</span>
              </li>

              <li>
                <Link href="/addBook">Add Book</Link>
              </li>
              <li>
                <Link href="/manageBooks">Manage Books</Link>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
