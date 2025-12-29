"use client";

import { AuthContext } from "@/contexts/AuthContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  const navLinks = [
      { name: 'Home', path: '/' },
      { name: 'All Books', path: '/allBooks' },
      { name: 'About', path: '/about' },
      { name: 'Add Book', path: '/addBook' },
      { name: 'Manage Books', path: '/manageBooks' },
  ];

  return (
    <div className="w-full shadow-sm sticky top-0 z-50 bg-[#6e473b] text-white">
      <div className="navbar container mx-auto px-6">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#e1d4c2] text-[#291C0E] rounded-box w-52"
          >
            {navLinks.map((link) => (
               <li key={link.path}>
                 <Link 
                   href={link.path} 
                   className={`transition-colors duration-300 rounded-md ${pathname === link.path ? "bg-[#291C0E] text-white" : "hover:bg-[#6e473b]/20"}`}
                 >
                   {link.name}
                 </Link>
               </li>
            ))}

            {/* Mobile user dropdown */}
            {user && (
              <li>
                <details>
                  <summary>{user?.email}</summary>
                  <ul className="p-2">
                    <li>
                      <Link 
                        href="/addBook"
                        className={pathname === '/addBook' ? "bg-[#291C0E] text-white" : ""}
                      >
                        Add Book
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/manageBooks"
                        className={pathname === '/manageBooks' ? "bg-[#291C0E] text-white" : ""}
                      >
                        Manage Books
                      </Link>
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
          <Image src="/logo_final.png" alt="logo" width={100} height={60} className="h-14 w-auto object-contain brightness-0 invert" />
          {/* <h1 className="text-xl font-bold text-white">Learning Books</h1> */}
        </Link>
      </div>

      {/* CENTER - routes */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
             <li key={link.path}>
               <Link 
                 href={link.path}
                 className={`transition-colors duration-300 rounded-md px-4 py-2 ${pathname === link.path ? "bg-[#291C0E] text-white" : "hover:bg-white/20"}`}
               >
                 {link.name}
               </Link>
             </li>
          ))}
        </ul>
      </div>

{/*  */}
      {/* RIGHT - Login/Register OR User Dropdown */}
      <div className="navbar-end gap-3">
        {!user && (
          <>
            <Link href="/login" className="btn bg-[#291C0E] text-white border-none hover:bg-[#1a1109]">
              Login
            </Link>
            <Link href="/register" className="btn bg-[#291C0E] text-white border-none hover:bg-[#1a1109]">
              Register
            </Link>
          </>
        )}

        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-white/50">
                <img 
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                  alt="User Avatar"
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu mt-3 p-2 shadow bg-[#e1d4c2] text-[#291C0E] rounded-box w-52"
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
    </div>
  );
};

export default Navbar;
