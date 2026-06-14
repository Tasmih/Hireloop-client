"use client";

import { motion } from "motion/react";
import ctaBg from "@/images/cta-bg.png";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black py-24 px-6" style={{ minHeight: "420px" }}>

      {/* Dome image — pinned to bottom center, half visible */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl pointer-events-none">
        <img
          src={ctaBg.src}
          alt=""
          className="w-full object-contain object-bottom"
          style={{ display: "block" }}
        />
      </div>

      {/* Purple inner glow on the dome */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "60%",
          height: "60%",
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(100,40,240,0.65) 0%, rgba(70,20,180,0.35) 40%, transparent 70%)",
        }}
      />

      {/* Fade left & right edges to black */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none" />

      {/* Fade top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-2xl text-center pt-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-white"
        >
          Your next role is
          <br />
          already looking for you
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 text-sm text-zinc-400"
        >
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3"
        >
          <button className="rounded-xl bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-zinc-100">
            Create a free account
          </button>
          <button className="rounded-xl border border-zinc-600 bg-black/40 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-zinc-400 hover:bg-zinc-900/60">
            View pricing
          </button>
        </motion.div>
      </div>

    </section>
  );
}