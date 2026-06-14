"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import {
  User,
  AtSign,
  Lock,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import {Description, Label, Radio, RadioGroup} from "@heroui/react";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);

  
  const router = useRouter();


  const [role,setRole] = useState("seeker");

  const searchParams =useSearchParams();
  const redirectTo= searchParams.get("redirect") || "/" ;

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const password = form.password;

    if (!name) return toast.error("Name is required.");
    if (!email) return toast.error("Email is required.");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("Invalid email format.");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters.");
    }

    if (!/(?=.*[A-Za-z])(?=.*\d)/.test(password)) {
      return toast.error("Password must contain letters and numbers.");
    }

    setLoading(true);


   const plan = role === 'seeker' ? 'seeker_free' : 'recruiter_free';


    try {
      const res = await authClient.signUp.email({
        name,
        email,
        password,
        role,
        plan
      });

      if (res?.error) {
        toast.error(res.error.message || "Sign up failed. Please try again.");
      } else {
        toast.success("Account created successfully!");

        setTimeout(() => {
          router.push(redirectTo);
          router.refresh();
        }, 50);

        setForm({
          name: "",
          email: "",
          password: "",
          role:""
        });
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

 async function handleGoogleSignUp() {
  setGoogleLoading(true);
  try {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: redirectTo,
    });
  } catch {
    toast.error("Google sign up failed. Please try again.");
  } finally {
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
            Get Started
            <span className="h-1.5 w-1.5 bg-cyan-500" />
          </div>

          <h1 className="text-3xl font-semibold leading-tight text-white">
            Create your
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* Name */}
            <div>
              <label className="text-xs uppercase tracking-widest text-zinc-400">
                Full Name
              </label>
              <div className="flex items-center gap-2 px-3 py-2.5 border border-dashed border-cyan-500/25 rounded bg-white/5">
                <User className="h-4 w-4 text-zinc-500" />
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="John Doe"
                  className="w-full bg-transparent text-sm text-white outline-none"
                />
              </div>
            </div>

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
              <label className="text-xs uppercase tracking-widest text-zinc-400">
                Password
              </label>
              <div className="flex items-center gap-2 px-3 py-2.5 border border-dashed border-cyan-500/25 rounded bg-white/5">
                <Lock className="h-4 w-4 text-zinc-500" />
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Min. 6 characters"
                  className="w-full bg-transparent text-sm text-white outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="text-zinc-500 hover:text-cyan-400"
                >
                  {showPass ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            {/* role Selection */}
         <div className="flex flex-col gap-4 text-zinc-300">
      <Label className=" text-zinc-500">Subscription plan</Label>
      <RadioGroup defaultValue="seeker" name="role" onChange={value=>setRole(value)} orientation="horizontal">
        <Radio selected value="seeker">
          <Radio.Control className="text-zinc-300">
            <Radio.Indicator  className=" text-zinc-100"/>
          </Radio.Control>
          <Radio.Content>
            <Label className=" text-zinc-500">Job Seeker</Label>
          </Radio.Content>
        </Radio>
        <Radio value="recruiter">
          <Radio.Control className=" text-zinc-300">
            <Radio.Indicator  className=" text-zinc-300"/>
          </Radio.Control>
          <Radio.Content>
            <Label className=" text-zinc-500">Recruiter</Label>
          </Radio.Content>
        </Radio>
       
      </RadioGroup>
    </div>

            {/* Submit */}
            <button
              disabled={loading || googleLoading}
              className="flex items-center justify-center gap-2 bg-cyan-500 text-black font-semibold py-2.5 rounded hover:bg-cyan-400 transition"
            >
              {loading ? "Loading..." : (
                <>
                  <LogIn className="h-4 w-4" />
                  Create Account
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
            onClick={handleGoogleSignUp}
            disabled={loading || googleLoading}
            className="flex items-center justify-center gap-3 border border-dashed border-cyan-500/25 py-2.5 rounded bg-white/5 text-zinc-300 hover:text-white"
          >
            {googleLoading ? "Redirecting..." : "Continue with Google"}
          </button>

          {/* Link */}
          <p className="text-center text-xs text-zinc-600">
            Already have an account?{" "}
            <Link href={`/auth/signin?redirect=${redirectTo}`} className="text-cyan-400 hover:text-cyan-300">
              Sign in
            </Link>
          </p>

        </motion.div>
      </div>
    </div>
  );
}