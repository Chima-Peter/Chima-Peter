"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pb-20 lg:scroll-mt-28 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="section-label">About</p>
        <h2 className="section-heading">I build systems that solve real problems</h2>

        <div className="space-y-4 prose-body">
          <p>
            Backend engineer with 4+ years architecting production-grade backend
            systems, distributed services, and AI-powered applications across
            fintech, SaaS, and developer tooling.
          </p>
          <p>
            Strong with Python, TypeScript, Node.js, PostgreSQL, Redis, AWS, and
            asynchronous processing. I&apos;ve built multi-tenant platforms,
            payment systems, real-time services, and AI workflows involving 6+
            tools and up to 64 concurrent agents—owning systems end-to-end from
            architecture through production operations.
          </p>
          <p>
            I work most at the intersection of reliability and product impact:
            clear APIs, durable pipelines, and infrastructure you can operate
            without guesswork.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
