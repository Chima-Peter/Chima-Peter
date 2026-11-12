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
      "Built a web app, CLI, and IDE extension that keep specs beside the code - with AI help to draft and update them, Jira sync, and cloud sharing across the team.",
    problem:
      "Writing software requirements is tedious and often skipped, and docs that do exist drift away from the codebase.",
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
      "Built one platform for campground staff and guests: bookings, payments, messaging, maps, and compliance - plus a WordPress plugin so marketing sites can take reservations.",
    problem:
      "Campground operators juggled bookings by hand across properties, which led to double bookings, missed payments, and gaps with guests.",
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
      "NestJS fintech backend for invoicing, payments, expenses, and cash-flow.",
    description:
      "Built the NestJS backend for invoices, payments, expenses, and cash-flow - with Paystack and crypto checkout, background jobs, and automatic reminders.",
    problem:
      "SMEs and freelancers split invoices, payments, and expenses across tools, so cash flow was hard to see.",
    tech: [
      "NestJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Bull",
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
      "Cross-country ecommerce for African markets - market-specific catalogs, local-currency pricing, Paystack checkout, and fulfillment.",
    description:
      "Built an API and storefront for multi-market shopping: local catalogs and prices, cart and checkout, payments, and order fulfillment for customers and staff.",
    problem:
      "Selling across African markets needs local catalogs, currency pricing, and reliable checkout - not a one-size-fits-all store.",
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
      "Built a study app where students upload their notes, chat with a tutor grounded in those notes, and get study cards and practice quizzes generated for them.",
    problem:
      "Students bounce between notes, tutoring, and quizzes that aren’t tied to their own course materials.",
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
      "Shared backend for GlueCharm and EasySpecs - orgs, workspaces, specs, and AI orchestration.",
    description:
      "Built the shared backend for GlueCharm and EasySpecs: teams, workspaces, specs, Jira sync, and AI that routes across multiple providers. API-only - no public UI.",
    problem:
      "GlueCharm and EasySpecs needed one backend for teams, workspaces, specs, access control, and AI.",
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
      "Built the public site for the podcast and learning brand - episodes, videos, short reads, and contact forms - with moderated publishing and no separate admin backend.",
    problem:
      "Needed a public place to publish podcasts, videos, and articles with basic moderation and contact forms.",
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
      "Built a tool that watches funding and open interest across major exchanges, ranks opportunities, and explains the signal so traders or AI agents can use it. API-only.",
    problem:
      "Spotting funding and open-interest setups across exchanges by hand is slow and easy to miss.",
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
