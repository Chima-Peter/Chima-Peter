export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  blurb: string;
  problem: string;
  description: string;
  tech: string[];
  /** Product screenshot path under /public. Omit for API-only work. */
  image?: string;
  /** Masonry visual weight: taller pins stand out on the board */
  span?: "tall" | "wide" | "default";
  links?: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "EasySpecs.ai",
    category: "Developer Tools",
    blurb:
      "Web, CLI, and IDE extension that keep software requirements next to the code.",
    description:
      "Co-built EasySpecs.ai end-to-end across three surfaces that share one project cloud: the web app is the Trust Engineering hub for projects, change requests, streaming SRS chat, bidirectional Jira, org sharing, and i18n; the CLI is a headless factory that scans git repos into grounded application context with up to 64 concurrent AI workstations, incremental updates, and CI-friendly output; the IDE extension (VS Code / Cursor / Windsurf) handles in-editor browse, sign-in, and cloud sync while heavy work runs via the bundled CLI. Deployed on AWS via Pulumi with GitLab CI/CD; backend powered by FastAPI, Neo4j, PostgreSQL, and Supabase Auth.",
    problem:
      "Writing software requirements is tedious and often skipped. When documentation exists, it lives separately from the code and quickly becomes outdated.",
    tech: [
      "Vue 3",
      "TypeScript",
      "Vite",
      "Pinia",
      "VS Code Extension API",
      "Node.js",
      "FastAPI",
      "Neo4j",
      "PostgreSQL",
      "Supabase Auth",
      "Pulumi",
      "AWS",
    ],
    image: "/projects/easyspecs.webp",
    span: "tall",
    links: [
      { label: "Visit website", href: "https://easyspecs.ai" },
      {
        label: "View extension",
        href: "https://open-vsx.org/extension/easyspecs/easyspecs-ai",
      },
      {
        label: "View CLI package",
        href: "https://www.npmjs.com/package/@gluecharm-lab/easyspecs-cli",
      },
    ],
    featured: true,
  },
  {
    title: "ADI Camping",
    category: "Enterprise SaaS",
    blurb:
      "Multi-tenant camping PMS with guest booking, Stripe, and WordPress embed.",
    description:
      "Full-stack multi-tenant camping property management and booking platform covering staff operations and public guest flows: reservations, seasonal availability, check-in/out, billing, rentals, shop, campsite maps, and Spanish tourism compliance. Integrated Stripe payments, Twilio messaging, AI guest-document OCR via Gemini, Vertex AI RAG for staff/guest chat, a WordPress Gutenberg/shortcode embed plugin, and AWS via Pulumi.",
    problem:
      "Campground operators managed bookings manually across multiple properties — leading to double bookings, missed payments, and communication gaps with guests.",
    tech: [
      "Vue 3",
      "Tailwind CSS",
      "Supabase",
      "Stripe",
      "Twilio",
      "Gemini",
      "Vertex AI",
      "Pulumi",
      "WordPress",
    ],
    image: "/projects/adi-camping.webp",
    links: [{ label: "Visit website", href: "https://adicamping.com" }],
    featured: true,
  },
  {
    title: "ManomPay",
    category: "Fintech",
    blurb:
      "Invoicing, payments, expenses, and cash-flow reporting in one dashboard.",
    description:
      "All-in-one fintech platform consolidating invoicing, payment processing, expense tracking, and financial reporting. Businesses create and send invoices, accept payments via multiple channels (including Paystack), and get real-time cash-flow visibility with automated reminders and local payment integrations.",
    problem:
      "SMEs, freelancers, and entrepreneurs struggled with fragmented financial tools — invoices in one app, payments in another, expenses tracked manually — leading to cash-flow blind spots.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Paystack",
    ],
    image: "/projects/manom.webp",
    links: [{ label: "Visit website", href: "https://manomsolutions.com" }],
    featured: true,
  },
  {
    title: "Dukka",
    category: "Commerce",
    blurb:
      "Cross-country ecommerce for African markets — market-specific catalogs, local-currency pricing, Paystack checkout, and fulfillment.",
    description:
      "Cross-country ecommerce platform for product discovery, purchasing, and fulfillment across African markets. The NestJS API handles multi-market catalog, cart/checkout, orders, Paystack payments, warehouses/shipments, promotions/coupons, dual customer/staff JWT + RBAC, and BullMQ workers for mail and order lifecycle. The Next.js storefront adds IP market detection, guest + authenticated carts, search, checkout, orders, profile, and reviews.",
    problem:
      "Selling across African markets needs market-specific catalogs, fixed local-currency pricing, and reliable checkout/fulfillment — not a generic single-market store bolted onto a shared backend.",
    tech: [
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "BullMQ",
      "Redis",
      "Paystack",
      "Next.js",
      "React",
      "RTK Query",
      "Tailwind CSS",
      "Framer Motion",
    ],
    image: "/projects/dukka.webp",
    span: "wide",
    links: [
      { label: "View API repo", href: "https://github.com/Chima-Peter/Dukka" },
      {
        label: "View storefront repo",
        href: "https://github.com/Chima-Peter/dukka_store",
      },
    ],
    featured: true,
  },
  {
    title: "StudyBuddy",
    category: "EdTech",
    blurb:
      "Upload course materials, hybrid search, grounded RAG tutoring, and auto-generated study cards.",
    description:
      "FastAPI + Next.js study companion that lets students upload materials, ingest them into a hybrid search index, tutor via grounded RAG chat, and auto-generate chapter study cards with MCQ quizzes. Covers JWT + Redis auth, signed Supabase uploads, an async parse→chunk→embed→index pipeline, LangGraph agents over WebSocket, live SSE notifications, and RabbitMQ workers with retries and dead-letter queues.",
    problem:
      "Students juggle separate tools for notes, tutoring, and quizzes — with no grounding in their own course materials — so study time is fragmented and hard to scale.",
    tech: [
      "Python",
      "FastAPI",
      "Supabase",
      "Redis",
      "RabbitMQ",
      "Elasticsearch",
      "LangGraph",
      "Gemini",
      "Docker",
    ],
    image: "/projects/studybuddy.webp",
    span: "tall",
    links: [
      {
        label: "View API repo",
        href: "https://github.com/Chima-Peter/study_buddy",
      },
      {
        label: "View app repo",
        href: "https://github.com/Chima-Peter/study_buddy_app",
      },
    ],
    featured: true,
  },
  {
    title: "System Manager API",
    category: "Enterprise SaaS",
    blurb:
      "Shared backend for GlueCharm and EasySpecs — orgs, workspaces, specs, and AI orchestration.",
    description:
      "Core FastAPI backend powering GlueCharm and EasySpecs. Manages organizations, workspaces, projects, and specification artifacts with RBAC. Syncs with Jira, links git repositories for code context, and runs background workers for invitations, exports, and AI-powered content generation. Includes a dedicated AI microservice that orchestrates multiple providers (OpenAI, Gemini, Groq, Mistral) with intelligent routing.",
    problem:
      "GlueCharm and EasySpecs.ai needed a shared backend for software specification projects — with isolated workspaces, role-based access, Jira integration, and AI capabilities.",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "Neo4j",
      "Redis",
      "Celery",
      "AWS",
      "LangChain",
    ],
    featured: true,
  },
  {
    title: "Tales of Logistics",
    category: "Content",
    blurb:
      "Podcast and learning brand site with moderated Postgres content.",
    description:
      "Next.js marketing/content site for a logistics podcast and learning brand. Serves home, episode catalog, videos/interviews, customs cuts, logistics nuggets, partners, about, and contact. Content is moderated in Postgres (isApproved / isDeleted); pages call Route Handlers through a pg pool, with Nodemailer for mail and Cloudinary for images.",
    problem:
      "Needed a public site to publish podcasts, videos, customs clips, and blog content with moderated visibility and inbound contact/partner forms — without a separate ops backend.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Nodemailer",
      "Cloudinary",
      "Tailwind CSS",
    ],
    image: "/projects/tales-of-logistics.webp",
    links: [{ label: "Visit website", href: "https://talesoflogistics.com" }],
    featured: true,
  },
  {
    title: "Funding vs OI Divergence Screener",
    category: "Financial Systems",
    blurb:
      "MCP server ranking funding-rate and open-interest signals across Binance, Bybit, and OKX.",
    description:
      "MCP server that collects trading data from Binance, Bybit, and OKX, analyzes funding rates and open interest, ranks bullish/bearish signals by confidence, and explains why a signal is forming — so AI trading agents can query it directly. Available as a grant project on the Context Protocol marketplace.",
    problem:
      "Crypto traders needed to spot opportunities across exchanges, but manually checking Binance, Bybit, and OKX for funding rates and open interest was slow and error-prone.",
    tech: ["TypeScript", "Node.js", "Redis", "MCP Protocol"],
    links: [{ label: "Visit marketplace", href: "https://ctxprotocol.com" }],
    featured: false,
  },
];

export function projectLinks(project: Project): ProjectLink[] {
  return project.links ?? [];
}

export function isPrimaryProjectLink(link: ProjectLink): boolean {
  return /visit website|visit marketplace/i.test(link.label);
}
