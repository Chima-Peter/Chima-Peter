"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  description: string;
  problem: string;
  tech: string[];
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "ManomPay",
    category: "Fintech",
    description:
      "All-in-one fintech platform consolidating invoicing, payment processing, expense tracking, and financial reporting. Businesses create invoices, accept payments via multiple channels, and get real-time cash flow visibility.",
    problem:
      "SMEs and freelancers struggled with fragmented financial tools—managing invoices, payments, and expenses across multiple apps led to cash flow blind spots.",
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Paystack"],
    link: "https://manomsolutions.com",
    featured: true,
  },
  {
    title: "System Manager API",
    category: "Enterprise SaaS",
    description:
      "Core backend powering GlueCharm and EasySpecs.ai (web app + VS Code extension). Manages organizations, workspaces, projects, and specification artifacts with role-based access. Includes a dedicated AI microservice for multi-provider orchestration.",
    problem:
      "Needed a shared backend for software specification projects with isolated workspaces, role-based access, Jira integration, and AI capabilities.",
    tech: ["FastAPI", "PostgreSQL", "Neo4j", "Redis", "Celery", "AWS", "LangChain"],
    link: "https://gluecharm.com",
    featured: true,
  },
  {
    title: "EasySpecs.ai Extension",
    category: "Developer Tools",
    description:
      "VS Code extension that analyzes codebases using AI agents to generate structured documentation—features, use cases, data models—synced with the EasySpecs.ai web platform.",
    problem:
      "Writing software requirements is tedious and often skipped. Documentation lives separately from code and becomes outdated.",
    tech: ["TypeScript", "VS Code API", "esbuild", "JSON Schema"],
    link: "https://staging.easyspecs.ai",
    featured: true,
  },
  {
    title: "Camping Reservations Manager",
    category: "Enterprise SaaS",
    description:
      "Multi-property booking platform for Spanish campground operators. Real-time availability sync prevents double bookings, Stripe handles payments, and Twilio automates guest communications. Supports i18n for international guests and generates PDF invoices.",
    problem:
      "Campground operators managed bookings manually across multiple properties—leading to double bookings, missed payments, and communication gaps with guests.",
    tech: ["Vue 3", "TypeScript", "Supabase", "Stripe", "Twilio", "Playwright"],
    link: "https://webstaging.adicamping.com/en",
    featured: true,
  },
  {
    title: "Tales of Logistics",
    category: "Content Management",
    description:
      "Admin dashboard for media production with content upload to Cloudinary, rich text editing, and batch approval workflows for videos, podcasts, and articles.",
    problem:
      "Media team needed proper approval workflows so nothing goes live without review.",
    tech: ["Next.js 15", "React 19", "Prisma", "PostgreSQL", "Cloudinary"],
    link: "https://talesoflogistics.com",
  },
  {
    title: "Funding vs OI Divergence Screener",
    category: "Financial Systems",
    description:
      "MCP server that collects trading data from Binance, Bybit, and OKX, analyzing funding rates and open interest for trading signals. Available on Context Protocol.",
    problem:
      "Traders needed to spot market opportunities across exchanges, but manual checking was time-consuming and error-prone.",
    tech: ["TypeScript", "Node.js", "Redis", "MCP Protocol"],
    link: "https://ctxprotocol.com",
  },
  {
    title: "Solana Insider Tracker",
    category: "Financial Systems",
    description:
      "Real-time monitoring tool watching Solana transactions for pump-and-dump schemes. Identifies suspicious patterns with confidence scoring.",
    problem:
      "New tokens launch constantly with insider schemes. Spotting patterns manually is impossible at blockchain speed.",
    tech: ["Python", "asyncio", "Solana RPC", "Telegram API"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Featured Work</p>
          <h2 className="section-heading">
            Production systems I&apos;ve built
          </h2>
          <p className="text-zinc-400 max-w-2xl mb-12">
            From AI orchestration to real-time financial systems. Each project
            solves a real business problem with scalable, production-ready code.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.article
              key={project.title}
              variants={item}
              className="card card-hover group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="tag">{project.category}</span>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
                      >
                        Visit
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    <span className="text-zinc-300 font-medium">Problem: </span>
                    {project.problem}
                  </p>
                  <p className="text-zinc-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-zinc-800/50 text-zinc-400 border border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-lg font-semibold text-white">
              Other Notable Projects
            </h3>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-surface border border-border rounded-xl p-6 h-full flex flex-col hover:border-zinc-600 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-zinc-800/80 text-accent">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-500 hover:text-accent hover:bg-zinc-800 rounded-lg transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    )}
                  </div>
                  <span className="text-xs text-accent font-medium mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-md bg-zinc-800/50 text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-2 py-1 text-zinc-500">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="https://github.com/chima-peter"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
            View all projects on GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
