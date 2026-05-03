"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm rounded-full border border-border bg-surface text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[2.4rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold text-white leading-tight mb-8"
          >
            Hi, I&apos;m{" "}
            <span className="accent-gradient">Chima Peter</span>
            <br />
            <span className="text-zinc-400">Software Engineer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            Building production systems with{" "}
            <span className="text-zinc-200">real-time data pipelines</span>,{" "}
            <span className="text-zinc-200">AI orchestration</span>, and{" "}
            <span className="text-zinc-200">enterprise SaaS</span>. I turn complex
            requirements into scalable, maintainable code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="#projects" className="btn-primary">
              View my work
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            <Link href="#contact" className="btn-secondary">
              Get in touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border"
          >
            <p className="text-sm text-muted mb-4">Currently working with</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["TypeScript", "Python", "FastAPI", "Next.js", "LangChain", "PostgreSQL", "Redis"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-zinc-800/50 text-zinc-300 border border-zinc-700/50"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <motion.svg
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </Link>
      </motion.div>
    </section>
  );
}
