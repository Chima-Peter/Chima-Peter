# Chima Ojimma

**Backend Engineer** — Building production systems with real-time data pipelines, AI orchestration, and enterprise SaaS.

[Portfolio](https://chima-peter.vercel.app/) · [LinkedIn](https://linkedin.com/in/chimaojimma) · [Email](mailto:chimaojimma@gmail.com) · [Resume](https://chima-peter.vercel.app/Chima_Ojimma_Resume.pdf)

---

## About

Backend engineer with 4+ years architecting production-grade systems, distributed services, and AI-powered applications across fintech, SaaS, and developer tooling.

I work most at the intersection of reliability and product impact: clear APIs, durable pipelines, and infrastructure you can operate without guesswork. Recent focus spans developer tooling (**EasySpecs**), camping SaaS (**ADI Camping**), fintech (**ManomPay**), and commerce (**Dukka**).

---

## Tech Stack

| | |
|---|---|
| **Languages** | TypeScript · Python · JavaScript |
| **Frontend** | React · Next.js · Vue 3 · Tailwind CSS · Framer Motion |
| **Backend** | FastAPI · NestJS · Node.js · Express · Django |
| **AI / ML** | LangChain · LangGraph · OpenAI · Gemini · Groq · Mistral |
| **Databases** | PostgreSQL · Redis · Neo4j · Prisma · Elasticsearch · Supabase |
| **Infrastructure** | Docker · AWS · Celery · BullMQ · Pulumi · Sentry · Vercel |
| **Testing** | Jest · Playwright · Vitest · Pytest |
| **Other** | Stripe · Paystack · Twilio · Cloudinary · Telegram API |

---

## Selected Work

### [EasySpecs.ai](https://easyspecs.ai) — [Extension](https://open-vsx.org/extension/easyspecs/easyspecs-ai) — [CLI](https://www.npmjs.com/package/@gluecharm-lab/easyspecs-cli)

![EasySpecs.ai](https://raw.githubusercontent.com/Chima-Peter/Chima-Peter/main/public/projects/easyspecs.webp)

**Problem:** Writing software requirements is tedious and often skipped. When documentation exists, it lives separately from the code and quickly becomes outdated.

**Solution:** Co-built EasySpecs.ai end-to-end across three surfaces that share one project cloud:
- **Web app** — Trust Engineering hub for projects, change requests, streaming SRS chat, bidirectional Jira, org sharing, and i18n
- **CLI** — headless factory that scans git repos into grounded application context with up to 64 concurrent AI workstations, incremental updates, and CI-friendly output
- **IDE extension** (VS Code / Cursor / Windsurf) — in-editor browse, sign-in, and cloud sync while heavy work runs via the bundled CLI

Deployed on AWS via Pulumi with GitLab CI/CD; backend powered by FastAPI, Neo4j, PostgreSQL, and Supabase Auth.

`Vue 3` `TypeScript` `Vite` `Pinia` `Node.js` `FastAPI` `Neo4j` `PostgreSQL` `Supabase` `Pulumi` `AWS`

---

### [ADI Camping](https://adicamping.com)

![ADI Camping](https://raw.githubusercontent.com/Chima-Peter/Chima-Peter/main/public/projects/adi-camping.webp)

**Problem:** Campground operators managed bookings manually across multiple properties — leading to double bookings, missed payments, and communication gaps with guests.

**Solution:** Full-stack multi-tenant camping property management and booking platform covering staff operations and public guest flows: reservations, seasonal availability, check-in/out, billing, rentals, shop, campsite maps, and Spanish tourism compliance. Integrated Stripe payments, Twilio messaging, AI guest-document OCR via Gemini, Vertex AI RAG for staff/guest chat, a WordPress Gutenberg/shortcode embed plugin, and AWS via Pulumi.

`Vue 3` `Tailwind` `Supabase` `Stripe` `Twilio` `Gemini` `Vertex AI` `Pulumi` `WordPress`

---

### [ManomPay](https://manomsolutions.com)

![ManomPay](https://raw.githubusercontent.com/Chima-Peter/Chima-Peter/main/public/projects/manom.webp)

**Problem:** SMEs, freelancers, and entrepreneurs struggled with fragmented financial tools — invoices in one app, payments in another, expenses tracked manually — leading to cash-flow blind spots.

**Solution:** All-in-one fintech platform consolidating invoicing, payment processing, expense tracking, and financial reporting. Businesses create and send invoices, accept payments via multiple channels (including Paystack), and get real-time cash-flow visibility with automated reminders and local payment integrations.

`Next.js` `TypeScript` `Node.js` `PostgreSQL` `Prisma` `Paystack` `Redis`

---

### Dukka — [Backend](https://github.com/Chima-Peter/Dukka) · [Storefront](https://github.com/Chima-Peter/dukka_store)

![Dukka](https://raw.githubusercontent.com/Chima-Peter/Chima-Peter/main/public/projects/dukka.webp)

**Problem:** Selling across African markets needs market-specific catalogs, fixed local-currency pricing, and reliable checkout/fulfillment — not a generic single-market store bolted onto a shared backend.

**Solution:** Cross-country ecommerce platform spanning:
- **NestJS API** — multi-market catalog, cart/checkout, orders, Paystack payments, warehouses/shipments, promotions/coupons, dual customer/staff JWT + RBAC, BullMQ workers for mail and order lifecycle
- **Next.js storefront** — IP market detection, guest + authenticated carts, search, checkout, orders, profile, and reviews

`NestJS` `Prisma` `PostgreSQL` `BullMQ` `Redis` `Paystack` `Next.js` `RTK Query` `Tailwind` `Framer Motion`

---

### StudyBuddy — [Backend](https://github.com/Chima-Peter/study_buddy) · [Frontend](https://github.com/Chima-Peter/study_buddy_app)

![StudyBuddy](https://raw.githubusercontent.com/Chima-Peter/Chima-Peter/main/public/projects/studybuddy.webp)

**Problem:** Students juggle separate tools for notes, tutoring, and quizzes — with no grounding in their own course materials — so study time is fragmented and hard to scale.

**Solution:** FastAPI + Next.js study companion that lets students upload materials, ingest them into a hybrid search index, tutor via grounded RAG chat, and auto-generate chapter study cards with MCQ quizzes. Covers JWT + Redis auth, signed Supabase uploads, an async parse→chunk→embed→index pipeline, LangGraph agents over WebSocket, live SSE notifications, and RabbitMQ workers with retries and dead-letter queues.

`Python` `FastAPI` `Supabase` `Redis` `RabbitMQ` `Elasticsearch` `LangGraph` `Gemini` `Docker`

---

### System Manager API

**Problem:** GlueCharm and EasySpecs.ai (web, CLI, and IDE extension) needed a shared backend for software specification projects — with isolated workspaces, role-based access, Jira integration, and AI capabilities.

**Solution:** Core FastAPI backend powering GlueCharm and EasySpecs. Manages organizations, workspaces, projects, and specification artifacts with RBAC. Syncs with Jira, links git repositories for code context, and runs background workers for invitations, exports, and AI-powered content generation. Includes a dedicated AI microservice that orchestrates multiple providers (OpenAI, Gemini, Groq, Mistral) with intelligent routing. API-only — no public UI.

`FastAPI` `PostgreSQL` `Neo4j` `Redis` `Celery` `Supabase` `LangChain` `AWS` `Pulumi`

---

### [Tales of Logistics](https://talesoflogistics.com)

![Tales of Logistics](https://raw.githubusercontent.com/Chima-Peter/Chima-Peter/main/public/projects/tales-of-logistics.webp)

**Problem:** Needed a public site to publish podcasts, videos, customs clips, and blog content with moderated visibility and inbound contact/partner forms — without a separate ops backend.

**Solution:** Next.js marketing/content site for a logistics podcast and learning brand. Serves home, episode catalog, videos/interviews, customs cuts, logistics nuggets, partners, about, and contact. Content is moderated in Postgres (`isApproved` / `isDeleted`); pages call Route Handlers through a `pg` pool, with Nodemailer for mail and Cloudinary for images.

`Next.js` `React` `TypeScript` `PostgreSQL` `Nodemailer` `Cloudinary` `Tailwind` `Framer Motion`

---

### Funding vs OI Divergence Screener — [Context Protocol](https://ctxprotocol.com)

**Problem:** Crypto traders needed to spot opportunities across exchanges, but manually checking Binance, Bybit, and OKX for funding rates and open interest was slow and error-prone.

**Solution:** MCP server that collects trading data from all three exchanges, analyzes funding rates and open interest, ranks bullish/bearish signals by confidence, and explains why a signal is forming — so AI trading agents can query it directly. Available as a grant project on the Context Protocol marketplace. API-only.

`TypeScript` `Node.js` `Redis` `MCP Protocol`

---

## Elsewhere

[Portfolio](https://chima-peter.vercel.app/) · [GitHub](https://github.com/chima-peter) · [LinkedIn](https://linkedin.com/in/chimaojimma) · [Resume](https://chima-peter.vercel.app/Chima_Ojimma_Resume.pdf) · [chimaojimma@gmail.com](mailto:chimaojimma@gmail.com)
