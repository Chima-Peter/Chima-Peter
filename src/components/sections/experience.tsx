"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Role = {
  company: string;
  title: string;
  period: string;
  highlights: string[];
  tech: string[];
};

const roles: Role[] = [
  {
    company: "Gluecharm",
    title: "Backend Developer",
    period: "Oct 2025 — Present",
    highlights: [
      "Built a multi-provider LLM routing system with automatic failover across 7 providers.",
      "Co-built the EasySpecs VS Code/Cursor extension with 40+ AI agent prompts in a multi-phase pipeline.",
      "Designed async task processing with Celery/Redis for content generation and document pipelines.",
      "Built a dependency injection layer with 100+ registered providers via a centralized IoC container.",
    ],
    tech: ["Python", "FastAPI", "Neo4j", "PostgreSQL", "Redis", "Celery", "LangChain", "Pulumi", "Docker", "GitLab CI/CD"],
  },
  {
    company: "Camping Reservations Manager",
    title: "Full Stack Developer",
    period: "Oct 2025 — Present",
    highlights: [
      "Designed 37 Supabase Edge Functions as a serverless microservice layer with JWT auth.",
      "Built a dynamic pricing engine with json-rules-engine and Redis caching.",
      "Integrated Stripe payments with multi-location support, auto-pay, webhooks, and refund policies.",
      "Implemented Row-Level Security (RLS) with role-based access control via JWT claims.",
    ],
    tech: ["Vue 3", "TypeScript", "Supabase", "Deno", "Stripe", "Twilio", "Playwright", "Vitest", "Tailwind CSS", "Docker"],
  },
  {
    company: "Manom",
    title: "Backend & DevOps Engineer",
    period: "Feb 2025 — Oct 2025",
    highlights: [
      "Built a multi-tenant fintech SaaS backend for African SMBs — invoicing, payments, payroll, and analytics.",
      "Engineered a full subscription lifecycle system with trials, proration, grace periods, and auto-downgrade.",
      "Created a real-time notification system using SSE with Redis Pub/Sub for cross-instance delivery.",
      "Implemented async background jobs with Bull queues, rate limiting, and automatic cleanup.",
    ],
    tech: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "Redis", "Bull", "Node.js", "Docker Swarm", "GitHub Actions"],
  },
  {
    company: "Freelance",
    title: "Fullstack Developer",
    period: "2023 — Present",
    highlights: [
      "Delivered 10+ client projects across e-commerce, fintech, logistics, AI chatbots, and crypto wallets.",
    ],
    tech: ["Next.js", "NestJS", "FastAPI", "AWS", "Docker", "GitHub Actions"],
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
            href="https://drive.google.com/file/d/1DpTGbtE8ilCVJi2gfYVLstjY6qmVui-3/view?usp=drive_link"
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
