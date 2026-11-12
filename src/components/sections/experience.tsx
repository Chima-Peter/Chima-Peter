"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RESUME_DOWNLOAD_NAME, RESUME_HREF } from "@/components/layout/nav-links";

type Role = {
  company: string;
  title: string;
  period: string;
};

const roles: Role[] = [
  {
    company: "easyspecs.ai",
    title: "Backend Engineer",
    period: "Mar 2026 - Present",
  },
  {
    company: "Gluecharm",
    title: "Fullstack Developer",
    period: "Oct 2025 - Mar 2026",
  },
  {
    company: "Manom",
    title: "Backend & DevOps Engineer",
    period: "Apr 2023 - Sep 2025",
  },
  {
    company: "Freelance",
    title: "Freelancer",
    period: "Aug 2022 - Present",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 pb-16 sm:scroll-mt-24 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="max-w-2xl"
      >
        <p className="section-label">Index 02</p>
        <h2 className="section-heading">Experience</h2>
        <p className="prose-body mb-4">
          Building production systems across fintech, enterprise SaaS, and
          developer tooling - from early-stage startups to client engagements.
        </p>
        <Link
          href={RESUME_HREF}
          download={RESUME_DOWNLOAD_NAME}
          className="btn-secondary mb-10"
        >
          Download resume
        </Link>
      </motion.div>

      <ol className="relative ml-1 border-l border-border pl-8 sm:ml-2 sm:pl-10">
        {roles.map((role, index) => (
          <motion.li
            key={`${role.company}-${role.title}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
            className="relative pb-10 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute -left-[2.05rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-canvas sm:-left-[2.55rem]"
            />
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {role.period}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {role.company}
            </h3>
            <p className="mt-1 text-[15px] text-ink-soft sm:text-base">{role.title}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
