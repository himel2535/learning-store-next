"use client";

import { AuthContext } from "@/contexts/AuthContext";
import React, { use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const { signInWithGoogle, signInUser } = use(AuthContext);

  // ---- Email Sign In ----
  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid email or password");
      })
      .finally();
  };

  // --- Google Sign In ---
  const handleGoogleSignIn = () => {
  

    signInWithGoogle()
      .then(() => {
        toast.success("Logged in!");
        router.push("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Something went wrong!");
      })
      .finally();
  };

  return (
    <div className="flex flex-col gap-12 items-center justify-center mx-4 min-h-screen mb-10">
      <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center mt-14 ">
        Login for
      </h1>

      <div className="card w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input rounded-lg bg-white text-black focus:outline-gray-200 w-full"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  className="input rounded-lg  bg-white text-black not-only:focus:outline-gray-200 w-full pr-10"
                  placeholder="Password"
                  required
                />
              </div>

              <button type="submit" className="btn w-full mt-6 text-white">
                Login
              </button>
            </fieldset>
          </form>

          {/* Google Login */}
          <button onClick={handleGoogleSignIn} className="btn mt-4 w-full ">
            sign in with google
          </button>

          <p className="text-center mt-3">
            New to our website? Please{" "}
            <Link
              className="text-blue-500 hover:text-blue-800"
              href="/register"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
