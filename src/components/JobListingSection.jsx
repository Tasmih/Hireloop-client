"use client";

import { useState } from "react";
import { MapPin, Briefcase, DollarSign, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const jobListings = [
  {
    title: "Frontend Developer",
    company: "Stripe",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives that matter.",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
    tag: "Hot",
  },
  {
    title: "Backend Engineer",
    company: "Vercel",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives that matter.",
    location: "San Francisco, USA",
    type: "Remote",
    salary: "€30–€50/hour",
    tag: "New",
  },
  {
    title: "Product Designer",
    company: "Linear",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives that matter.",
    location: "Berlin, Germany",
    type: "Hybrid",
    salary: "€20–€35/hour",
    tag: null,
  },
  {
    title: "DevOps Engineer",
    company: "Cloudflare",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives that matter.",
    location: "Austin, USA",
    type: "On-site",
    salary: "€40–€60/hour",
    tag: "Hot",
  },
  {
    title: "Data Scientist",
    company: "Anthropic",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives that matter.",
    location: "London, UK",
    type: "Remote",
    salary: "€35–€55/hour",
    tag: "New",
  },
  {
    title: "Full Stack Developer",
    company: "Notion",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives that matter.",
    location: "Toronto, Canada",
    type: "Hybrid",
    salary: "€25–€45/hour",
    tag: null,
  },
];

const typeColors = {
  Hybrid: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  Remote: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "On-site": "text-violet-400 bg-violet-500/10 border-violet-500/20",
};

const tagColors = {
  Hot: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  New: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

function JobCard({ job, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl border border-zinc-800 bg-black/80 p-6 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/5 cursor-pointer"
    >
      {/* Top row */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-white leading-snug">
            {job.title}
          </h3>
          <p className="mt-0.5 text-sm text-zinc-500">{job.company}</p>
        </div>

        {job.tag && (
          <span
            className={`shrink-0 rounded-md border px-2 py-0.5 text-xs font-semibold ${tagColors[job.tag]}`}
          >
            {job.tag}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-zinc-400 line-clamp-2">
        {job.description}
      </p>

      {/* Meta chips */}
      <div className="mb-6 flex flex-wrap gap-2">
        <span className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400">
          <MapPin size={11} className="text-zinc-500" />
          {job.location}
        </span>

        <span
          className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs ${typeColors[job.type]}`}
        >
          <Briefcase size={11} />
          {job.type}
        </span>

        <span className="flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400">
          <DollarSign size={11} className="text-zinc-500" />
          {job.salary}
        </span>
      </div>

      {/* Apply button */}
      <button className="flex items-center gap-2 text-sm font-semibold text-white transition-all duration-200 group-hover:text-cyan-400">
        Apply Now
        <ArrowRight
          size={15}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </button>

      {/* Subtle left accent line on hover */}
      <motion.div
        className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-cyan-500"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: hovered ? 1 : 0, scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}

export default function JobListingsSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 md:px-12 py-24">
      {/* Background radial glow — matches pricing section */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.10),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3 text-sm uppercase tracking-widest text-zinc-400">
            <span className="h-1.5 w-1.5 bg-cyan-500" />
            Smart Job Discovery
            <span className="h-1.5 w-1.5 bg-cyan-500" />
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
            The roles you'd never
            <br />
            find by searching
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job, index) => (
            <JobCard key={index} job={job} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <button className="flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/80 px-7 py-3 text-sm font-medium text-zinc-300 backdrop-blur-md transition-all duration-200 hover:border-cyan-500/50 hover:text-white">
            <Sparkles size={14} className="text-cyan-400" />
            View all job openings
          </button>
        </motion.div>
      </div>
    </section>
  );
}