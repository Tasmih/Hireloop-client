"use client"

import { Link } from "@heroui/react";
import { Search, MapPin, BriefcaseBusiness } from "lucide-react";
import { motion } from "motion/react"

function HeroSection() {
  const trendingItems = [
    "Product Designer",
    "AI Engineering",
    "Dev-ops Engineer",
  ];

  return (
    <section className="relative overflow-hidden bg-black px-6 md:px-12 py-20">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.16),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Badge */}
        <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-800 bg-zinc-950/80 px-5 py-2 text-sm text-zinc-400 shadow-lg backdrop-blur-md">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
            <BriefcaseBusiness size={16} />
          </span>
          <span className="font-bold text-white">50,000+</span>
          <span className="uppercase tracking-widest">New Jobs This Month</span>
        </div>

        {/* Heading */}
        <motion.h1 
        whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  onHoverStart={() => console.log('hover started!')}
  
        className="mx-auto max-w-4xl text-4xl md:text-6xl font-bold leading-tight text-white">
          Find Your Dream Job Today
        </motion.h1>

        <p className="mx-auto mt-6 max-w-3xl text-base md:text-lg leading-8 text-zinc-400">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search Box */}
        <div className="mx-auto mt-12 flex max-w-5xl flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-black/80 p-2 shadow-2xl backdrop-blur-md md:flex-row">
          <div className="flex flex-1 items-center gap-3 px-4 py-4">
            <Search size={20} className="text-white" />
            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-400"
            />
          </div>

          <div className="hidden w-px bg-zinc-800 md:block"></div>

          <div className="flex flex-1 items-center gap-3 px-4 py-4">
            <MapPin size={20} className="text-white" />
            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-zinc-400"
            />
          </div>

          <button className="mt-2 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-400 md:mt-0">
            <Search size={22} />
          </button>
        </div>

        {/* Trending */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-400">
          <span>Trending Position</span>

          {trendingItems.map((item, index) => (
            <Link
              key={index}
              href="#"
              className="rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-xs text-white transition hover:border-cyan-500 hover:text-cyan-400"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;