"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 pb-16 sm:scroll-mt-24 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="grid gap-8 border-t border-border pt-10 md:grid-cols-[8rem_1fr] md:gap-12 lg:grid-cols-[10rem_1fr]"
      >
        <p className="section-label md:pt-1">Index 00</p>
        <div className="max-w-2xl">
          <h2 className="section-heading">About</h2>
          <div className="space-y-4 prose-body">
            <p>
              Backend engineer with 4+ years architecting production-grade
              systems, distributed services, and AI-powered applications across
              fintech, SaaS, and developer tooling.
            </p>
            <p>
              Strong with Python, TypeScript, Node.js, PostgreSQL, Redis, AWS,
              and asynchronous processing. I&apos;ve shipped multi-tenant
              platforms, payment systems, real-time services, and AI workflows
              involving 6+ tools and up to 64 concurrent agents.
            </p>
            <p>
              I work at the intersection of reliability and product impact:
              clear APIs, durable pipelines, and infrastructure you can operate
              without guesswork.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
