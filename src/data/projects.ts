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
      "Co-built EasySpecs.ai end-to-end across three surfaces: a Vue 3/TypeScript web app with project/change-request workspaces, streaming SRS chat, bidirectional Jira, org sharing, EN/ES/CA i18n, and SEO marketing; a headless Node.js CLI that scans git repos into grounded application context using up to 64 concurrent AI workstations; and a VS Code/Cursor/Windsurf extension for in-editor browse, sign-in, and cloud sync.",
    problem:
      "Writing software requirements is tedious and often skipped. Documentation lives separately from code and becomes outdated.",
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
    title: "Dukka",
    category: "Commerce",
    blurb:
      "Cross-country ecommerce for African markets — market-specific catalogs, local-currency pricing, Paystack checkout, and fulfillment.",
    description:
      "Cross-country ecommerce platform for product discovery, purchasing, and fulfillment across African markets. NestJS API (market-scoped catalogs, fixed local-currency pricing, promotions, Paystack payments, warehouses/shipments, dual customer/staff JWT + RBAC, BullMQ workers) plus a Next.js storefront with IP market detection, guest+auth carts, orders, profile, and reviews.",
    problem:
      "Selling across African markets needs market-specific catalogs, local pricing, and reliable checkout/fulfillment — not a generic single-market store bolted onto a shared backend.",
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
      { label: "Live", href: "https://www.dukka.store" },
      { label: "Backend", href: "https://github.com/Chima-Peter/Dukka" },
      {
        label: "Storefront",
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
      "FastAPI study companion: ingest into hybrid search, tutor via grounded RAG chat, and auto-generate chapter study cards with MCQ quizzes — JWT + Redis auth, signed Supabase uploads, async parse→chunk→embed→index pipeline, and LangGraph agents over WebSocket.",
    problem:
      "Students juggle separate tools for notes, tutoring, and quizzes—with no grounding in their own course materials.",
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
    blurb:
      "Multi-tenant camping PMS with guest booking, Stripe, and WordPress embed.",
    description:
      "Full-stack multi-tenant camping property management and booking: reservations, seasonal availability, check-in/out, billing, maps, Spanish tourism compliance, Stripe, Twilio, Gemini OCR, Vertex AI RAG, and a WordPress booking plugin.",
    problem:
      "Campground operators managed bookings manually across multiple properties—double bookings, missed payments, and communication gaps.",
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
    links: [{ label: "Live", href: "https://adicamping.com" }],
    featured: true,
  },
  {
    title: "System Manager API",
    category: "Enterprise SaaS",
    blurb:
      "Shared backend for GlueCharm and EasySpecs — orgs, workspaces, specs, and AI orchestration.",
    description:
      "Core backend powering GlueCharm and EasySpecs.ai. Manages organizations, workspaces, projects, and specification artifacts with role-based access. Includes a dedicated AI microservice for multi-provider orchestration.",
    problem:
      "Needed a shared backend for software specification projects with isolated workspaces, RBAC, Jira, and AI capabilities.",
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
    title: "ManomPay",
    category: "Fintech",
    blurb:
      "Invoicing, payments, expenses, and cash-flow reporting in one dashboard.",
    description:
      "All-in-one fintech platform consolidating invoicing, payment processing, expense tracking, and financial reporting. Businesses create invoices, accept payments via multiple channels, and get real-time cash flow visibility.",
    problem:
      "SMEs and freelancers struggled with fragmented financial tools across invoices, payments, and expenses.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Paystack",
    ],
    image: "/projects/manom.webp",
    links: [{ label: "Live", href: "https://manomsolutions.com" }],
    featured: true,
  },
  {
    title: "Tales of Logistics",
    category: "Content",
    blurb:
      "Podcast and learning brand site with moderated Postgres content.",
    description:
      "Public marketing/content site for a logistics podcast and learning brand. Next.js serves episodes, interviews, customs cuts, and blog nuggets from a moderated Postgres store, with Nodemailer for contact and partner forms.",
    problem:
      "Needed a public site for podcasts, videos, and blog content with moderated visibility — without a separate ops backend.",
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
    links: [{ label: "Live", href: "https://talesoflogistics.com" }],
    featured: true,
  },
  {
    title: "Funding vs OI Divergence Screener",
    category: "Financial Systems",
    blurb:
      "MCP server ranking funding-rate and open-interest signals across Binance, Bybit, and OKX.",
    description:
      "MCP server that collects trading data from Binance, Bybit, and OKX, analyzing funding rates and open interest for trading signals. Available on Context Protocol.",
    problem:
      "Traders needed to spot opportunities across exchanges without manually checking each one.",
    tech: ["TypeScript", "Node.js", "Redis", "MCP Protocol"],
    links: [{ label: "Public API", href: "https://ctxprotocol.com" }],
    featured: false,
  },
];

export function projectLinks(project: Project): ProjectLink[] {
  return project.links ?? [];
}
