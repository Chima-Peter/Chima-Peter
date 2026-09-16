"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  highlights: string[];
  tech: string[];
};

const roles: Role[] = [
  {
    company: "easyspecs.ai",
    title: "Backend Engineer",
    period: "Mar 2026 — Present",
    location: "Spain",
    highlights: [
      "Co-built the EasySpecs headless CLI around a Factory → Pipeline → Workstation architecture with six pipelines for synthesis, coverage, remediation, link mapping, upload, and download.",
      "Designed an adaptive concurrency pool that uses duration-based pressure control to throttle parallel AI workstation execution.",
      "Implemented a pluggable agent harness for OpenCode, Claude Code, Gemini CLI, Cursor CLI, and Codex, with optional remote workers via REST API.",
      "Built isolated git worktrees and JSON snapshot persistence for resume-on-interrupt and automatic stale-worktree recovery.",
      "Co-architected context drift analysis and zero-reference remediation pools that document uncovered code paths.",
      "Added schema validation and malformed-output recovery, structured CI output, performance reports, and bidirectional EasySpecs cloud sync.",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Commander.js",
      "esbuild",
      "AJV",
      "jsonrepair",
      "Git Worktrees",
      "REST APIs",
      "Stripe",
    ],
  },
  {
    company: "Gluecharm",
    title: "Fullstack Developer",
    period: "Oct 2025 — Mar 2026",
    location: "Spain",
    highlights: [
      "Architected an event-driven, multi-tenant microservices platform for AI-powered content generation using Neo4j and PostgreSQL in a dual-persistence design.",
      "Designed vendor MIME-type API versioning for backward-compatible contract evolution without URL proliferation.",
      "Built a schema-driven artifact system where JSON schemas define content types, relationships, and AI-editable fields.",
      "Implemented RFC 6902 JSON Patch editing for minimal, schema-validated AI changes, reducing token usage by about 60% and protecting unchanged data.",
      "Provisioned AWS infrastructure with Pulumi and automated dev, staging, and production deployments through GitLab CI/CD.",
      "Integrated LangChain and LangGraph for multi-provider routing by complexity, rate limiting, and optional Arize Phoenix tracing.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Neo4j",
      "PostgreSQL",
      "Redis",
      "Celery",
      "LangChain",
      "LangGraph",
      "Vue 3",
      "TypeScript",
      "Supabase",
      "AWS",
      "Pulumi",
      "Docker",
      "GitLab CI/CD",
    ],
  },
  {
    company: "Manom",
    title: "Backend & DevOps Engineer",
    period: "Apr 2023 — Sep 2025",
    location: "Africa",
    highlights: [
      "Engineered a modular NestJS/TypeScript fintech backend with 246 API endpoints across 31 modules for invoicing, accounting, payroll, subscriptions, CRM, wallets, and analytics.",
      "Built Redis- and Bull-powered processing for invoice generation, payment provisioning, subscription charging, retries, reminders, and grace periods.",
      "Integrated Paystack, NOWPayments, and Finecore for fiat and crypto payments, virtual accounts, wallets, transfers, FX, and identity verification.",
      "Delivered invoice workflows with partial payments, fiat/crypto checkout, PDF generation, cloud storage, scheduled delivery, and overdue notifications.",
      "Built a Gemini-powered financial assistant using LangChain tool calling across six tools, backed by FastAPI and MongoDB chat history.",
      "Delivered production infrastructure with SSE notifications, structured logging, readiness checks, Docker Swarm, Nginx, automated TLS, rolling deployments, and rollback protection.",
    ],
    tech: [
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Bull",
      "Node.js",
      "Docker Swarm",
      "GitHub Actions",
      "FastAPI",
      "LangGraph",
      "Gemini",
      "MongoDB",
      "Paystack",
      "NOWPayments",
      "Finecore",
      "Nginx",
    ],
  },
  {
    company: "BuildWithSeamless",
    title: "Frontend Developer",
    period: "Aug 2022 — Mar 2023",
    location: "Nigeria",
    highlights: [
      "Built and maintained responsive React + TypeScript interfaces for a cloud-based HR and workforce management platform.",
      "Developed a shared component system with Storybook, standardizing 20+ reusable components across product surfaces.",
      "Integrated REST APIs with JWT auth, centralized error handling, and refresh-token retry logic.",
      "Built multi-step forms with React Hook Form and Zod; reduced initial JS payload by ~30% via Webpack optimization.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
      "Axios",
      "Storybook",
      "Webpack",
      "REST APIs",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Experience</p>
          <h2 className="section-heading">Where I&apos;ve worked</h2>
          <p className="text-zinc-400 max-w-2xl mb-6">
            Building production systems across fintech, enterprise SaaS, and
            developer tooling — from early-stage startups to client engagements.
          </p>
          <Link
            href="https://drive.google.com/file/d/1aqihYJLTIkguUiNOfhTBflgzY6HDMTIc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-white transition-colors mb-12"
          >
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
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download my resume
          </Link>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[11px]" />

          <div className="space-y-10">
            {roles.map((role, index) => (
              <motion.div
                key={`${role.company}-${role.title}`}
                variants={item}
                className="relative pl-8 md:pl-10"
              >
                <span
                  className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 md:left-[3px] ${
                    index === 0
                      ? "border-accent bg-accent/20"
                      : "border-zinc-600 bg-surface"
                  }`}
                />

                <div className="card card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {role.title}
                      </h3>
                      <p className="text-accent font-medium text-sm">
                        {role.company}
                        {role.location ? (
                          <span className="text-zinc-500 font-normal">
                            {" "}
                            · {role.location}
                          </span>
                        ) : null}
                      </p>
                    </div>
                    <span className="text-sm text-zinc-500 font-mono shrink-0">
                      {role.period}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-5">
                    {role.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="relative pl-5 text-zinc-400 text-sm leading-relaxed before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-700"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {role.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
