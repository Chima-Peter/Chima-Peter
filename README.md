# Chima Peter Ojimma

**Software Engineer** — Building production systems with real-time data pipelines, AI orchestration, and enterprise SaaS.

[Portfolio](https://chima-peter.vercel.app/) · [LinkedIn](https://linkedin.com/in/chimaojimma) · [chimaojimma@gmail.com](mailto:chimaojimma@gmail.com)

---

## Tech Stack

| | |
|---|---|
| **Languages** | TypeScript · Python · JavaScript |
| **Frontend** | React · Next.js · Vue 3 · Tailwind CSS · Framer Motion · Radix UI |
| **Backend** | FastAPI · NestJS · Node.js · Django · Express |
| **AI/ML** | LangChain · OpenAI · Gemini · Groq · Mistral |
| **Databases** | PostgreSQL · Redis · Supabase · Neo4j · Prisma |
| **Infrastructure** | Docker · AWS · Celery · Pulumi · Sentry · Vercel |
| **Testing** | Jest · Playwright · Vitest |
| **Other** | Puppeteer · Stripe · Twilio · Cloudinary · Telegram API |

---

## Featured Projects

<details open>
<summary><b>Enterprise SaaS & Backend</b></summary>

<br>

### [ManomPay](https://manomsolutions.com)

**Problem:** Small to medium-sized businesses, freelancers, and entrepreneurs struggled with fragmented financial tools—managing invoices in one app, payments in another, and tracking expenses manually. This led to cash flow blind spots and wasted time on administrative tasks.

**Solution:** Built an all-in-one fintech platform that consolidates invoicing, payment processing, expense tracking, and financial reporting into a single dashboard. Businesses create and send professional invoices, accept payments via multiple channels, and get real-time visibility into cash flow. The system generates financial reports, sends payment reminders automatically, and integrates with local payment providers.

`Next.js` `TypeScript` `Node.js` `PostgreSQL` `Prisma` `Paystack` `Redis`

---

### System Manager API — [GlueCharm](https://gluecharm.com/) · [EasySpecs.ai](https://easyspecs.ai/)

**Problem:** GlueCharm and EasySpecs.ai (web app, CLI, and IDE extension) needed a shared backend to manage software specification projects. Teams define features, use cases, user stories, and system diagrams—and need isolated workspaces, role-based access, and integration with tools like Jira.

**Solution:** Built the core backend powering GlueCharm, the EasySpecs.ai web application, CLI, and IDE extension. It manages organizations, workspaces, projects, and specification artifacts. Team members are invited with specific roles (owner, admin, member). The system syncs with Jira so user stories push directly to sprint boards, links to Git repositories for code context, and background workers handle invitations, exports, and AI-powered content generation. Includes a dedicated **AI microservice** that orchestrates multiple providers (OpenAI, Gemini, Groq, Mistral) with intelligent routing.

`FastAPI` `PostgreSQL` `Neo4j` `Redis` `Celery` `Supabase` `Sentry` `Pulumi` `AWS` `LangChain`

---


### [Camping Manager](https://webstaging.adicamping.com/en)

**Problem:** Campground operators managed bookings manually across multiple properties—leading to double bookings, missed payments, and communication gaps with guests.

**Solution:** Camping Manager keeps campsite operations and guest booking on one backend. Two surfaces share that system: the **Reservations Manager** is the central ops product for staff and guests—reservations, availability, pricing, check-in/out, billing, maps, compliance, and config, with public search/book/pay/pre-check-in flows and multi-tenant camping locations; the **WordPress plugin** bridges campground marketing sites so they can offer online booking without rebuilding the booking UI (shortcodes/blocks connecting to the manager’s public APIs). Staff configure inventory, seasons, pricing, and policies in the manager → public booking/payment APIs and Vue routes serve guests → the WP plugin embeds those guest flows on sites like ADI Camping.

`Vue 3` `Vite` `TypeScript` `Pinia` `Tailwind` `TipTap` `Stripe` `Supabase` `Vitest` `Playwright` `PHP` `WordPress`

---

### [Tales of Logistics](https://talesoflogistics.com/)

**Problem:** Needed a public site to publish podcasts, videos, customs clips, and blog content with moderated visibility and inbound contact/partner forms—without a separate ops backend.

**Solution:** Tales of Logistics is a public marketing/content site for a logistics podcast and learning brand. One Next.js 15 App Router app serves readers: home, episode catalog (`/podcasts`), videos/interviews (`/videos`), customs-focused cuts (`/customs-cut`), blog nuggets (`/logistics-nuggets`), partners, about, and contact. Content is moderated in Postgres via `isApproved` / `isDeleted`; the site only reads approved rows. Pages call Route Handlers under `/api/*` (podcasts, videos, customs-cut, posts, send-email) through a `pg` Pool, with Nodemailer for contact/partner/newsletter mail and Cloudinary for remote images.

`Next.js 15` `React 19` `TypeScript` `PostgreSQL` `pg` `Nodemailer` `Cloudinary` `Tailwind CSS` `Framer Motion` `Vercel Analytics`

---

### Edumag API

**Problem:** Secondary schools needed a full school management system to manage staff accounts, track qualifications, and handle administrative data—with different access levels for admins and regular staff.

**Solution:** Built a NestJS API with three permission levels (Super Admin, Admin, Staff). Each role has specific access to manage users, view records, or update institutional data. The API includes rate limiting to prevent abuse, security headers for protection, and full test coverage to ensure reliability.

`NestJS` `TypeScript` `Prisma` `PostgreSQL` `Jest` `Helmet`

</details>

<details>
<summary><b>AI & Intelligent Systems</b></summary>

<br>

### [EasySpecs.ai](https://easyspecs.ai/) — [Extension](https://open-vsx.org/extension/easyspecs/easyspecs-ai) — [CLI](https://www.npmjs.com/package/@gluecharm-lab/easyspecs-cli)

**Problem:** Writing software requirements documents is tedious and often skipped. Teams end up without clear specs, and when documentation does exist, it quickly becomes outdated because it lives separately from the code.

**Solution:** EasySpecs.ai keeps software requirements next to the code so docs don’t drift. Three surfaces share one project cloud: the **web app** is the hub for Trust Engineering—projects, change requests, and SRS docs (preview/edit, AI chat, auto-generate)—plus org settings, credits, Git, and Jira; the **CLI** (`easyspecs-cli`) is a headless factory that turns a repo into structured `.easyspecs/context` (`analysis`, `update context`, `context drift`) with CI-friendly `--json` / `--ci` and agent harnesses (OpenCode, Claude Code, Gemini CLI, Cursor CLI, Codex); the **extension** (VS Code / Cursor / Windsurf) browses change requests and docs in the sidebar, shows affected code, and push/pulls with the web project while heavy work runs via the bundled CLI.

`Vue 3` `TypeScript` `Vite` `Node.js` `VS Code API` `esbuild` `Ajv` `Tailwind CSS` `Pinia` `TipTap`

---

### Funding vs OI Divergence Screener — [Context Protocol](https://ctxprotocol.com)

**Problem:** Crypto traders needed a way to spot market opportunities across multiple exchanges, but manually checking Binance, Bybit, and OKX was time-consuming and error-prone.

**Solution:** Built a tool that automatically collects trading data from all three exchanges, analyzes funding rates and open interest, and identifies bullish or bearish signals. It ranks opportunities by confidence and explains in plain English why a signal is forming. Designed as an MCP server so AI trading agents can query it directly. Available as a grant project on the Context Protocol marketplace.

`TypeScript` `Node.js` `Redis` `MCP Protocol` `REST APIs`

---

</details>

<details>
<summary><b>Financial & Trading Systems</b></summary>

<br>

### Solana Insider Tracker

**Problem:** New tokens launch on Solana constantly, and some are pump-and-dump schemes where insiders buy early and sell to retail traders. Spotting these patterns manually is nearly impossible at blockchain speed.

**Solution:** Built a real-time monitoring tool that watches Solana transactions as they happen. It identifies suspicious patterns: brand new wallets, accounts funded from exchanges and trading within minutes, and groups of wallets buying the same token together. Each alert includes a confidence score, and high-priority alerts get sent to Telegram instantly.

`Python` `asyncio` `Solana RPC` `Telegram API`

---

### FX Sentiment Dashboard

**Problem:** Forex traders wanted to see how other retail traders were positioned (long vs short) across currency pairs, but this data was scattered and hard to track over time.

**Solution:** Built a dashboard that automatically collects sentiment data, stores historical snapshots, and shows how positioning has changed over time (hourly, daily, weekly). It calculates which currencies are strongest or weakest based on aggregate positioning and highlights extreme readings where most traders are on one side of a trade.

`Express` `Node.js` `PostgreSQL` `Puppeteer` `React` `node-cron`

</details>

---

[GitHub](https://github.com/chima-peter) · [Portfolio](https://chima-peter.vercel.app/) · [LinkedIn](https://linkedin.com/in/chimaojimma)
