"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ProjectLink = {
  label: string;
  href: string;
};

type Project = {
  title: string;
  category: string;
  description: string;
  problem: string;
  tech: string[];
  link?: string;
  links?: ProjectLink[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "EasySpecs.ai",
    category: "Developer Tools",
    description:
      "Co-built EasySpecs.ai end-to-end across three surfaces: a Vue 3/TypeScript web app with project/change-request workspaces, streaming SRS chat, bidirectional Jira, org sharing, EN/ES/CA i18n, and SEO marketing; a headless Node.js CLI that scans git repos into grounded application context using up to 64 concurrent AI workstations, incremental update-from-churn, Graphify knowledge-graph hooks, and an ACE learning loop; and a VS Code/Cursor/Windsurf extension for in-editor browse, sign-in, and cloud sync. Deployed on AWS via Pulumi with GitLab CI/CD; backend powered by FastAPI, Neo4j, PostgreSQL, and Supabase Auth with Permify RBAC.",
    problem:
      "Writing software requirements is tedious and often skipped. Documentation lives separately from code and becomes outdated.",
    tech: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Pinia",
      "VS Code Extension API",
      "Node.js",
      "Commander.js",
      "esbuild",
      "ajv",
      "FastAPI",
      "Neo4j",
      "PostgreSQL",
      "Supabase Auth",
      "Permify",
      "Jira REST API",
      "Sentry",
      "AWS S3/CloudFront",
      "Pulumi",
      "GitLab CI/CD",
    ],
    link: "https://easyspecs.ai",
    links: [
      { label: "Web", href: "https://easyspecs.ai" },
      {
        label: "Extension",
        href: "https://open-vsx.org/extension/easyspecs/easyspecs-ai",
      },
      {
        label: "CLI",
        href: "https://www.npmjs.com/package/@gluecharm-lab/easyspecs-cli",
      },
    ],
    featured: true,
  },
  {
    title: "StudyBuddy",
    category: "EdTech",
    description:
      "Built a FastAPI-based study companion that lets students upload materials, ingest them into a hybrid search index, tutor via grounded RAG chat, and auto-generate chapter study cards with MCQ quizzes — covering JWT + Redis blacklist auth, signed Supabase uploads, an async parse→chunk→embed→index pipeline, and LangGraph agents over WebSocket. Implemented cursor-paginated conversations and live SSE notifications, plus resilient RabbitMQ workers with TTL retries and dead-letter queues.",
    problem:
      "Students juggle separate tools for notes, tutoring, and quizzes—with no grounding in their own course materials—so study time is fragmented and hard to scale.",
    tech: [
      "Python 3.14+",
      "FastAPI",
      "Supabase Postgres/Storage",
      "Redis",
      "RabbitMQ (aio-pika)",
      "Elasticsearch 8 (hybrid RRF / kNN / BM25)",
      "Sentence Transformers (all-MiniLM-L6-v2)",
      "LangGraph",
      "Google Gemini",
      "Unstructured",
      "Docker",
    ],
    links: [
      { label: "Backend", href: "https://github.com/Chima-Peter/study_buddy" },
      {
        label: "Frontend",
        href: "https://github.com/Chima-Peter/study_buddy_app",
      },
    ],
    featured: true,
  },
  {
    title: "ADI Camping",
    category: "Enterprise SaaS",
    description:
      "Built a full-stack multi-tenant camping property management and booking platform covering staff operations and public guest flows: reservations, seasonal availability, check-in/out, billing, rentals, shop, campsite maps, and Spanish tourism compliance (police reports, tourist tax). Integrated Stripe payments, Twilio messaging, AI guest-document OCR via Gemini, Vertex AI EU RAG for staff/guest chat, a WordPress Gutenberg/shortcode embed plugin, json-rules-engine for pricing/cancellation/rentals, and AWS S3 + CloudFront via Pulumi.",
    problem:
      "Campground operators managed bookings manually across multiple properties—leading to double bookings, missed payments, and communication gaps with guests.",
    tech: [
      "Vue 3",
      "Tailwind CSS",
      "Supabase (Postgres, Auth, RLS, Edge Functions / Deno)",
      "Stripe",
      "Twilio",
      "Google Gemini",
      "Vertex AI (EU RAG)",
      "Vapi",
      "Playwright",
      "Pulumi",
      "AWS S3/CloudFront",
      "WordPress (PHP Gutenberg block + shortcode)",
      "json-rules-engine",
    ],
    link: "https://webstaging.adicamping.com/en",
    featured: true,
  },
  {
    title: "System Manager API",
    category: "Enterprise SaaS",
    description:
      "Core backend powering GlueCharm and EasySpecs.ai (web app, CLI, and IDE extension). Manages organizations, workspaces, projects, and specification artifacts with role-based access. Includes a dedicated AI microservice for multi-provider orchestration.",
    problem:
      "Needed a shared backend for software specification projects with isolated workspaces, role-based access, Jira integration, and AI capabilities.",
    tech: ["FastAPI", "PostgreSQL", "Neo4j", "Redis", "Celery", "AWS", "LangChain"],
    featured: true,
  },
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
    title: "Tales of Logistics",
    category: "Content Management",
    description:
      "Public marketing/content site for a logistics podcast and learning brand. One Next.js app serves episodes, interviews, customs cuts, and blog nuggets from a Postgres content store—moderated via isApproved/isDeleted—with Nodemailer for contact, partner, and newsletter forms.",
    problem:
      "Needed a public site to publish podcasts, videos, customs clips, and blog content with moderated visibility and inbound contact/partner forms—without a separate ops backend.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "pg",
      "Nodemailer",
      "Cloudinary",
      "Tailwind CSS",
    ],
    link: "https://talesoflogistics.com",
    featured: true,
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

function projectLinks(project: Project): ProjectLink[] {
  if (project.links?.length) return project.links;
  if (project.link) return [{ label: "Visit", href: project.link }];
  return [];
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 pb-20 lg:scroll-mt-28 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="section-label">Featured Work</p>
        <h2 className="section-heading">Production systems I&apos;ve built</h2>
        <p className="prose-body mb-10 max-w-prose">
          From AI orchestration to multi-tenant SaaS. Each project solves a real
          business problem with scalable, production-ready code.
        </p>
      </motion.div>

      <ul className="space-y-2">
        {featuredProjects.map((project, index) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="list-row group"
          >
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="tag">{project.category}</span>
              {projectLinks(project).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover"
                >
                  {item.label}
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
              ))}
            </div>

            <h3 className="mb-2 text-xl font-semibold text-ink transition-colors group-hover:text-accent sm:text-2xl">
              {project.title}
            </h3>
            <p className="mb-3 text-base leading-relaxed text-ink-soft">
              <span className="font-medium text-ink">Problem: </span>
              {project.problem}
            </p>
            <p className="mb-4 text-base leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </motion.li>
        ))}
      </ul>

      <div className="mt-14">
        <h3 className="mb-4 font-display text-xl font-semibold text-ink sm:text-2xl">
          Other notable projects
        </h3>
        <ul className="divide-y divide-border border-y border-border">
          {otherProjects.map((project) => {
            const primary = projectLinks(project)[0];
            const rowClassName =
              "group flex flex-col gap-2 rounded-md px-2 py-4 -mx-2 transition-colors hover:bg-surface/70 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6";
            const content = (
              <>
                <div className="min-w-0">
                  <p className="font-medium text-ink transition-colors group-hover:text-accent">
                    {project.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-base text-muted">
                    {project.description}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="tech-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            );

            return (
              <li key={project.title}>
                {primary ? (
                  <Link
                    href={primary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={rowClassName}
                  >
                    {content}
                  </Link>
                ) : (
                  <div className={rowClassName}>{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10">
        <Link
          href="https://github.com/chima-peter"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View all on GitHub
        </Link>
      </div>
    </section>
  );
}
