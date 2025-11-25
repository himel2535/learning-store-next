"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { toast } from "react-hot-toast";
import Link from "next/link";

const Login = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";

  const { signInUser, signInWithGoogle } = useContext(AuthContext);

  // Email login
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signInUser(email, password);

      // Firebase UID কে cookie set
      document.cookie = `token=${result.user.uid}; path=/`;

      toast.success("Logged in successfully!");
      router.push(redirectPath); // redirect to original page
    } catch (err) {
      console.log(err.message);
      toast.error("Invalid email or password");
    }
  };

  // Google login
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();

      document.cookie = `token=${result.user.uid}; path=/`;

      toast.success("Logged in!");
      router.push(redirectPath);
    } catch (err) {
      console.log(err.message);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-4 gap-8">
      <h1 className="text-3xl font-bold">Login</h1>

      <div className="card w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignIn}>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" required className="input bg-white w-full mb-3" />
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" required className="input bg-white w-full mb-3" />

            <button type="submit" className="btn w-full mt-4">
              Login
            </button>
          </form>

          <button onClick={handleGoogleSignIn} className="btn w-full mt-4">
            Sign in with Google
          </button>

          <p className="mt-3 text-center">
            New user? <Link className="text-blue-500" href="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
