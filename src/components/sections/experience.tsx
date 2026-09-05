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
      "Co-designed the architecture of three integrated product surfaces sharing a unified project cloud: the Trust Engineering web hub, the EasySpecs CLI factory, and the VS Code/Cursor/Windsurf extension.",
      "Designed an adaptive concurrency pool with duration-based pressure control, dynamically throttling parallel AI workstation execution across up to 64 concurrent agents.",
      "Implemented a pluggable agent harness supporting OpenCode, Claude Code, Gemini CLI, Cursor CLI, and Codex through unified spawn adapters.",
      "Co-architected the context drift pipeline with bidirectional sync via the EasySpecs REST API, plus incremental update-from-churn, Graphify knowledge-graph hooks, and an ACE self-improvement loop.",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Commander.js",
      "esbuild",
      "AJV",
      "jsonrepair",
      "Git Worktrees",
      "VS Code Extension API",
      "REST APIs",
      "AWS S3/CloudFront",
      "Pulumi",
      "GitLab CI/CD",
    ],
  },
  {
    company: "Gluecharm",
    title: "Fullstack Developer",
    period: "Oct 2025 — Mar 2026",
    location: "Spain",
    highlights: [
      "Co-architected a primary/fallback LLM routing system with TTL-based health tracking and automatic failover across 7 providers.",
      "Co-built the EasySpecs VS Code/Cursor extension and headless CLI, orchestrating 40+ specialized AI agent prompts across multi-phase workflows.",
      "Designed a background task processing layer using Celery and Redis/Valkey for content generation, SRS pipelines, and AI usage persistence.",
      "Co-built a centralized dependency-injection architecture with 100+ registered providers across sync and async workflows.",
      "Shipped ADI Camping: multi-tenant reservations on 37 Supabase Edge Functions, Stripe multi-location payments, dynamic pricing, and a WordPress booking embed.",
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
    ],
  },
  {
    company: "Manom",
    title: "Backend & DevOps Engineer",
    period: "Apr 2024 — Sep 2025",
    location: "Africa",
    highlights: [
      "Built the backend for a multi-tenant fintech SaaS for African SMBs — invoicing, fiat/crypto payments, payroll, accounting, KYC, analytics, and RBAC.",
      "Engineered a full subscription lifecycle with trials, proration, grace periods, Redis idempotency locks, and auto-downgrade on payment failure.",
      "Created a real-time notification system using SSE with Redis Pub/Sub for cross-instance delivery.",
      "Implemented async background jobs with Bull queues, rate limiting, and automatic cleanup.",
      "Built Manom AI (FastAPI + LangGraph + Gemini) for agentic invoice/onboarding workflows with MongoDB-backed chat memory.",
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
    ],
  },
  {
    company: "Architechture",
    title: "Full Stack Developer",
    period: "Jun 2023 — Mar 2024",
    location: "Nigeria",
    highlights: [
      "Built Tales of Logistics, a podcast and media platform with React/Next.js interfaces and content publishing workflows.",
      "Developed Melch, a full-stack e-commerce platform with product discovery, cart/checkout, and payment API integrations.",
      "Built StarExpress logistics management with delivery requests, tracking, and customer data APIs.",
      "Contributed to NestJS backend services with PostgreSQL, Prisma, Redis, auth, and third-party integrations.",
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Paystack",
      "Docker",
      "GitHub Actions",
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
            href="https://drive.google.com/file/d/1RYIfMTz2oAgwl72lBbnZ4gd3wtytKiBt/view?usp=sharing"
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
