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

### System Manager API — [GlueCharm](https://gluecharm.com/) · [EasySpecs.ai](https://staging.easyspecs.ai/)

**Problem:** GlueCharm and EasySpecs.ai (web app + VS Code extension) needed a shared backend to manage software specification projects. Teams define features, use cases, user stories, and system diagrams—and need isolated workspaces, role-based access, and integration with tools like Jira.

**Solution:** Built the core backend powering GlueCharm, the EasySpecs.ai web application, and the EasySpecs.ai VS Code extension. It manages organizations, workspaces, projects, and specification artifacts. Team members are invited with specific roles (owner, admin, member). The system syncs with Jira so user stories push directly to sprint boards, links to Git repositories for code context, and background workers handle invitations, exports, and AI-powered content generation. Includes a dedicated **AI microservice** that orchestrates multiple providers (OpenAI, Gemini, Groq, Mistral) with intelligent routing.

`FastAPI` `PostgreSQL` `Neo4j` `Redis` `Celery` `Supabase` `Sentry` `Pulumi` `AWS` `LangChain`

---


### [Camping Reservations Manager](https://webstaging.adicamping.com/en)

**Problem:** Campground operators in Spain were managing bookings manually across multiple properties—leading to double bookings, missed payments, and communication gaps with guests.

**Solution:** Built a booking platform where operators manage availability calendars, accept reservations, and process payments through Stripe. The system sends automatic confirmation emails and SMS reminders via Twilio. Real-time sync ensures two people can't book the same spot. Supports multiple languages for international guests and generates PDF invoices.

`Vue 3` `TypeScript` `Supabase` `Stripe` `Twilio` `Playwright` `i18n`

---

### [Tales of Logistics](https://talesoflogistics.com/)

**Problem:** A media production company needed a way for their team to upload, review, and publish videos, podcasts, and articles—with proper approval workflows so nothing goes live without review.

**Solution:** Created an admin dashboard using Next.js 15 and React 19 where editors upload content to Cloudinary, write articles with a rich text editor, and submit for approval. Admins review and approve content in batches. The system tracks episode numbers, generates URLs automatically, and uses role-based access so only authorized users can publish.

`Next.js 15` `React 19` `TypeScript` `Prisma` `PostgreSQL` `Cloudinary` `JWT`

---

### Edumag API

**Problem:** Secondary schools needed a full school management system to manage staff accounts, track qualifications, and handle administrative data—with different access levels for admins and regular staff.

**Solution:** Built a NestJS API with three permission levels (Super Admin, Admin, Staff). Each role has specific access to manage users, view records, or update institutional data. The API includes rate limiting to prevent abuse, security headers for protection, and full test coverage to ensure reliability.

`NestJS` `TypeScript` `Prisma` `PostgreSQL` `Jest` `Helmet`

</details>

<details>
<summary><b>AI & Intelligent Systems</b></summary>

<br>

### [EasySpecs.ai Extension](https://www.npmjs.com/package/@gluecharm-lab/easyspecs-cli) — [Web App](https://staging.easyspecs.ai/)

**Problem:** Writing software requirements documents is tedious and often skipped. Teams end up without clear specs, and when documentation does exist, it quickly becomes outdated because it lives separately from the code.

**Solution:** Built a VS Code extension that brings EasySpecs.ai directly into the developer's editor. It analyzes codebases using AI agents to generate structured documentation—features, use cases, data models—and keeps everything in sync with the EasySpecs.ai web platform. The extension runs analysis pipelines with configurable concurrency, validates outputs against schemas, and provides an in-editor panel for browsing specifications without leaving VS Code.

`TypeScript` `VS Code API` `esbuild` `JSON Schema`

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
