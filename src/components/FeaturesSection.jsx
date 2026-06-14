"use client";

import { motion } from "motion/react";
import {
  Search,
  TrendingUp,
  Building2,
  Bookmark,
  Zap,
  FileText,
  Target,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: TrendingUp,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    icon: Building2,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    icon: Bookmark,
    title: "Saved Jobs",
    description: "Manage apps & favorites on your dashboard.",
  },
  {
    icon: Zap,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process!",
  },
  {
    icon: FileText,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    icon: Target,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: Rocket,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 md:px-12 py-24">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading block with dashed border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-sm"
        >
          <div
            className="px-8 py-6 text-center"
            style={{
              border: "1.5px dashed rgba(6,182,212,0.5)",
              borderRadius: "4px",
            }}
          >
            <div className="mb-3 flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-zinc-400">
              <span className="h-1.5 w-1.5 bg-cyan-500" />
              Features Job
              <span className="h-1.5 w-1.5 bg-cyan-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white">
              Everything you need
              <br />
              to succeed
            </h2>
          </div>
        </motion.div>

        {/* Features grid with dashed outer border */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            border: "1.5px dashed rgba(6,182,212,0.4)",
            borderRadius: "4px",
          }}
          className="p-1"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isLastRow = index >= 4;
              const isRightEdge = (index + 1) % 4 === 0;
              const isLastInRow4 = index === 7;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  className={`group relative flex items-start gap-3 p-5 transition-all duration-200 hover:bg-zinc-900/60
                    ${!isLastRow ? "border-b border-dashed border-cyan-500/25" : ""}
                    ${!isRightEdge && !isLastInRow4 ? "border-r border-dashed border-cyan-500/25" : ""}
                  `}
                >
                  {/* Icon box */}
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-cyan-400 transition-all duration-200 group-hover:border-cyan-500/40 group-hover:bg-zinc-800">
                    <Icon size={16} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="mb-1 text-sm font-semibold text-white leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-zinc-500">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}