"use client";

import { AuthContext } from "@/contexts/AuthContext";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";


const Register = () => {
  const router = useRouter();
  const { createUser,  signInWithGoogle } = React.useContext(AuthContext);




  // ---- Email Register ----
  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target.displayName.value;
    const photoURL = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then(() => {
        // updateUserProfile({ displayName, photoURL });
        toast.success("Registered successfully!");
        router.push("/login");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Registration failed!");
      });
  };

  // ---- Google Register ----
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Logged in with Google!");
        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong!");
      });
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center mx-4 min-h-screen mb-10">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center mt-14">
        Register
      </h1>

      <div className="card w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="displayName"
                className="input rounded-lg bg-white text-black focus:outline-gray-200 w-full"
                placeholder="Name"
                required
              />

              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                className="input rounded-lg bg-white text-black focus:outline-gray-200 w-full"
                placeholder="Photo URL"
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-lg bg-white text-black focus:outline-gray-200 w-full"
                placeholder="Email"
                required
              />

              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="input rounded-lg bg-white text-black focus:outline-gray-200 w-full pr-10"
                  placeholder="Password"
                  required
                />
              
                  
                
              </div>

              <button type="submit" className="btn w-full mt-6 text-white">
                Register
              </button>
            </fieldset>
          </form>

          {/* Google */}
          <button onClick={handleGoogleSignIn} className="btn mt-4 w-full">
            Sign in with Google
          </button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link className="text-blue-500 hover:text-blue-800" href="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
