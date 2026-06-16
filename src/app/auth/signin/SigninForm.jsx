"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { AtSign, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { toast } from "react-toastify";
import { useSearchParams, useRouter } from "next/navigation";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  
  const router = useRouter();

  const searchParams = useSearchParams();
  const redirectTo= searchParams.get("redirect") || "/" ;

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  
 

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSignin(e) {
    e.preventDefault();

    if (!form.email.trim()) return toast.error("Email is required.");
    if (!form.password) return toast.error("Password is required.");

    setLoading(true);

    try {
      const res = await authClient.signIn.email({
        email: form.email,
        password: form.password,
      });

      if (res?.error) {
        toast.error(res.error.message || "Sign in failed. Please try again.");
      } else {
        toast.success("Signed in successfully!");
        setTimeout(() => {
          router.push(redirectTo);
          router.refresh();
        }, 50);
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleSignIn() {
    setGoogleLoading(true);

    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard",
      });
    } catch {
      toast.error("Google sign in failed. Please try again.");
      setGoogleLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6 py-16">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 w-full max-w-sm">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-center px-8 py-6"
          style={{
            border: "1.5px dashed rgba(6,182,212,0.5)",
            borderRadius: "4px",
          }}
        >
          <div className="mb-3 flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
            <span className="h-1.5 w-1.5 bg-cyan-500" />
            Welcome Back
            <span className="h-1.5 w-1.5 bg-cyan-500" />
          </div>

          <h1 className="text-3xl font-semibold leading-tight text-white">
            Sign in to your
            <br />
            account
          </h1>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="p-6 flex flex-col gap-5"
          style={{
            border: "1.5px dashed rgba(6,182,212,0.4)",
            borderRadius: "4px",
          }}
        >

          <form onSubmit={handleSignin} className="flex flex-col gap-4">

            {/* Email */}
            <div>
              <label className="text-xs uppercase tracking-widest text-zinc-400">
                Email
              </label>
              <div className="flex items-center gap-2 px-3 py-2.5 border border-dashed border-cyan-500/25 rounded bg-white/5">
                <AtSign className="h-4 w-4 text-zinc-500" />
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="john@example.com"
                  className="w-full bg-transparent text-sm text-white outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs uppercase tracking-widest text-zinc-400">
                  Password
                </label>
                <Link href="/auth/forgot-password" className="text-xs text-cyan-400 hover:text-cyan-300">
                  Forgot password?
                </Link>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 border border-dashed border-cyan-500/25 rounded bg-white/5">
                <Lock className="h-4 w-4 text-zinc-500" />
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Your password"
                  className="w-full bg-transparent text-sm text-white outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="text-zinc-500 hover:text-cyan-400"
                >
                  {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || googleLoading}
              className="flex items-center justify-center gap-2 bg-cyan-500 text-black font-semibold py-2.5 rounded hover:bg-cyan-400 transition"
            >
              {loading ? "Loading..." : (
                <>
                  <LogIn className="h-4 w-4" />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-cyan-500/20" />
            <span className="text-xs text-zinc-600 uppercase">or</span>
            <div className="h-px flex-1 bg-cyan-500/20" />
          </div>

          {/* Google */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading || googleLoading}
            className="flex items-center justify-center gap-3 border border-dashed border-cyan-500/25 py-2.5 rounded bg-white/5 text-zinc-300 hover:text-white"
          >
            {googleLoading ? "Redirecting..." : "Continue with Google"}
          </button>


          {/* Navigation option  */}
          {/* Link */}
          <p className="text-center text-xs text-zinc-600">
           New to Hireloop ? {" "}
            <Link href={`/auth/signup?redirect=${redirectTo}`} className="text-cyan-400 hover:text-cyan-300">
              Create an account
            </Link>
          </p>

        </motion.div>
      </div>
    </div>
  );
}