"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { RESUME_HREF } from "@/components/layout/nav-links";

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
    company: "Freelance",
    title: "Freelancer",
    period: "Aug 2022 — Present",
    highlights: [
      "Designed and developed responsive, production-ready web applications for clients across education, media, logistics, real estate, and fintech, translating business requirements into functional user experiences.",
      "Built an AI-powered study platform featuring interactive learning workflows and AI-assisted study experiences, alongside a podcast platform with content discovery and media consumption interfaces.",
      "Developed frontend experiences for a logistics management platform and a US-based real estate agency, implementing intuitive dashboards, data-driven interfaces, and streamlined business workflows.",
      "Built and marketed a real-time funding divergence screener for ContextProtocol, developing interfaces for monitoring and analyzing funding-rate discrepancies across cryptocurrency markets.",
      "Integrated REST APIs and third-party services into frontend applications, implementing authentication flows, asynchronous data handling, error management, and reusable API integration patterns.",
      "Established reusable UI components and responsive design patterns across projects, leveraging modern frontend tooling to improve maintainability, development efficiency, and cross-device consistency.",
    ],
    tech: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "Axios",
      "React Hook Form",
      "Zod",
      "WebSockets",
      "Git",
      "GitHub",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 pb-20 lg:scroll-mt-28 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="section-label">Experience</p>
        <h2 className="section-heading">Where I&apos;ve worked</h2>
        <p className="prose-body mb-4 max-w-prose">
          Building production systems across fintech, enterprise SaaS, and
          developer tooling — from early-stage startups to client engagements.
        </p>
        <Link
          href={RESUME_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-10 inline-flex items-center gap-2 text-base font-medium text-accent hover:text-accent-hover"
        >
          Download resume
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14M4 14v6h6" />
          </svg>
        </Link>
      </motion.div>

      <ol className="space-y-2">
        {roles.map((role, index) => (
          <motion.li
            key={`${role.company}-${role.title}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="list-row group"
          >
            <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent sm:text-xl">
                  {role.title}
                  <span className="font-normal text-ink-soft"> · {role.company}</span>
                </h3>
                {role.location ? (
                  <p className="text-base text-muted">{role.location}</p>
                ) : null}
              </div>
              <span className="shrink-0 font-mono text-sm text-muted">
                {role.period}
              </span>
            </div>

            <ul className="mb-4 space-y-2">
              {role.highlights.map((highlight) => (
                <li
                  key={highlight.slice(0, 48)}
                  className="relative pl-4 text-base leading-relaxed text-ink-soft before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-border"
                >
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {role.tech.map((t) => (
                <span key={t} className="tech-chip">
                  {t}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
