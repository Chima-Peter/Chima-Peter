# Chima Peter Ojimma

**Software Engineer** — Building production systems with real-time data pipelines, AI orchestration, and enterprise SaaS.

[Portfolio](https://chima-peter.vercel.app/) · [LinkedIn](https://linkedin.com/in/chimaojimma) · [chimaojimma@gmail.com](mailto:chimaojimma@gmail.com)

---

## Tech Stack

**Languages:** TypeScript, Python, JavaScript  
**Frontend:** React, Next.js, Vue 3, Tailwind CSS  
**Backend:** FastAPI, NestJS, Node.js, Django, Express  
**AI/ML:** LangChain, LangGraph, OpenAI, Gemini, Groq, Mistral  
**Data:** PostgreSQL, Redis, Supabase, Neo4j, Prisma  
**Infrastructure:** Docker, AWS, Celery, Pulumi

---

## Featured Projects

<details open>
<summary><b>Enterprise SaaS & Backend</b></summary>

<br>

| Project | Description | Stack |
|---------|-------------|-------|
| **System Manager API** | Core backend for a multi-tenant enterprise platform handling organization management, user authentication, and cross-service coordination. Built on FastAPI with async PostgreSQL (asyncpg + SQLAlchemy 2.0) for high-throughput queries, Neo4j for relationship-heavy data like permission hierarchies, and Permify for fine-grained RBAC. Integrates with Jira for ticket sync, Supabase for auth delegation, and exposes OpenRouter for LLM routing. Background jobs run on Celery with Redis broker, monitored via Sentry. Database versioning through Alembic; infrastructure provisioned with Pulumi on AWS. | `FastAPI` `Neo4j` `Celery` `Supabase` `AWS` |
| **Camping Reservations Manager** | Production SaaS application (v1.441.0) powering campground booking operations across multiple properties. Handles the full reservation lifecycle: availability calendars, guest check-in/check-out, payment processing via Stripe, and automated confirmation emails. Real-time updates through Supabase subscriptions keep availability synced across concurrent users. Supports multi-language interfaces (i18n) for international guests, SMS notifications via Twilio for booking reminders, and PDF invoice generation. Comprehensive Playwright E2E test suite with semantic-release for automated versioning and deployment. | `Vue 3` `Supabase` `Stripe` `Playwright` `Twilio` |
| **Tales of Logistics** | Media publishing platform for a content production company. The Next.js 15 admin dashboard (React 19) enables editors to upload videos, podcasts, and written content through a Cloudinary-backed media pipeline. Implements a multi-stage approval workflow where content moves through draft → review → publish states with role-based permissions. Features a custom rich text editor, JWT-based authentication, and Prisma ORM connecting to PostgreSQL. The dashboard tracks episode numbers, generates unique slugs, and supports batch operations for bulk content approval. | `Next.js 15` `React 19` `Prisma` `PostgreSQL` `Cloudinary` |
| **Edumag API** | Backend for a school management system handling administrative operations across educational institutions. Supports a role-based hierarchy (Super Admin, Admin, Staff) with distinct permission levels for managing users, qualifications, and institutional data. Built on NestJS 11 with Prisma 7 ORM for type-safe PostgreSQL access. Implements request throttling to prevent abuse, Helmet middleware for security headers (CSP, HSTS), and a modular architecture separating controllers, services, DTOs, and entities. Full test coverage with Jest for unit and integration testing. | `NestJS` `Prisma` `PostgreSQL` `Jest` |

</details>

<details>
<summary><b>AI & Intelligent Systems</b></summary>

<br>

| Project | Description | Stack |
|---------|-------------|-------|
| **AI Manager API** | Intelligent orchestration layer for AI-powered features across the platform. Routes requests to optimal LLM providers (OpenAI, Google Gemini, Groq, Mistral) based on task complexity, cost, and latency requirements. Built on LangChain and LangGraph for stateful multi-step agent workflows. Includes DSPy modules for prompt optimization, GPT-Researcher for automated web research tasks, and MCP protocol adapters for tool integration. Celery workers handle long-running inference jobs with Redis as message broker. Full observability through OpenInference tracing exported to Arize Phoenix for debugging agent behavior and monitoring token usage. | `FastAPI` `LangGraph` `Celery` `Redis` `AWS` |
| **Funding vs OI Divergence Screener** | Decision engine exposed as an MCP server for AI trading agents. Continuously polls perpetual futures data from Binance, Bybit, and OKX, computing volume-weighted funding rates and open interest changes. Classifies market conditions into actionable signals (bullish, bearish, overextended, neutral) using a deterministic scoring algorithm. Returns ranked opportunities with confidence scores, cross-exchange consistency metrics, and structured interpretation explaining cause, mechanism, and trade implication. Redis caching with TTL ensures fresh data while protecting against exchange rate limits. | `TypeScript` `MCP` `Redis` `Node.js` |
| **EasySpecs.ai Extension** | Published VS Code extension that automates software requirements documentation. Analyzes codebases to generate structured SRS artifacts (features, use cases, data models) through coordinated AI agent pipelines. Configurable concurrency limits control parallel agent execution. Validates generated context against JSON Schemas, auto-repairs malformed outputs, and syncs documentation to the EasySpecs.ai platform. Integrates with OpenCode CLI for local agent runs and includes a webview panel for navigating generated specifications within the IDE. | `TypeScript` `VS Code API` `esbuild` |

</details>

<details>
<summary><b>Financial & Trading Systems</b></summary>

<br>

| Project | Description | Stack |
|---------|-------------|-------|
| **Solana Insider Tracker** | Early-warning system for detecting coordinated accumulation in newly launched Solana tokens. Subscribes to real-time WebSocket logs from Raydium, Orca, and Meteora DEXs, parsing swap events without requiring full transaction fetches. Classifies wallets as "fresh" (<72h old) or "stealth" (funded from CEX hot wallets and swapping within minutes). Detects wallet clusters—3+ related wallets buying the same token in tight time windows with similar position sizes. Computes a composite confidence score (0-100) weighing wallet age, funding patterns, cluster strength, and liquidity safety (mint/freeze authority status). Alerts above threshold are pushed to Telegram with severity-based notification priority. All state lives in-memory with automatic eviction of stale tokens (>6h) and old wallet profiles (>72h). | `Python` `WebSocket` `Solana` `asyncio` |
| **FX Sentiment Dashboard** | Full-stack platform aggregating retail forex positioning data. Backend scrapes sentiment metrics from Myfxbook using Puppeteer, normalizes the data, and stores time-series snapshots in PostgreSQL. Scheduled cron jobs refresh data every 60 seconds during market hours. The Express API exposes endpoints for current sentiment by pair, historical shifts (hourly/daily/weekly), and computed currency strength scores that aggregate positioning across all pairs containing each major (EUR, USD, GBP, JPY, AUD, NZD, CAD, CHF). Frontend displays sentiment ratios with visual indicators for extreme readings (>75% long or <25% short). | `Express` `PostgreSQL` `Puppeteer` `node-cron` |

</details>

---

[GitHub](https://github.com/chima-peter) · [Portfolio](https://chima-peter.vercel.app/) · [LinkedIn](https://linkedin.com/in/chimaojimma)
