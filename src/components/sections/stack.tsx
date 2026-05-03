"use client";

import { motion } from "framer-motion";

type StackCategory = {
  name: string;
  items: string[];
};

const stack: StackCategory[] = [
  {
    name: "Languages",
    items: ["TypeScript", "Python", "JavaScript"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Vue 3", "Tailwind CSS", "Framer Motion", "Radix UI"],
  },
  {
    name: "Backend",
    items: ["FastAPI", "NestJS", "Node.js", "Django", "Express"],
  },
  {
    name: "AI/ML",
    items: ["LangChain", "OpenAI", "Gemini", "Groq", "Mistral"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "Redis", "Supabase", "Neo4j", "Prisma"],
  },
  {
    name: "Infrastructure",
    items: ["Docker", "AWS", "Celery", "Pulumi", "Sentry", "Vercel"],
  },
  {
    name: "Testing",
    items: ["Jest", "Playwright", "Vitest"],
  },
  {
    name: "Other",
    items: ["Puppeteer", "Stripe", "Twilio", "Telegram API", "MCP Protocol"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Stack() {
  return (
    <section id="stack" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-title">Tech Stack</p>
          <h2 className="section-heading">Technologies I work with</h2>
          <p className="text-zinc-400 max-w-2xl mb-12">
            I stay current with modern tooling while choosing the right tool for
            each job. Here&apos;s what I use to build production systems.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stack.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              className="card p-5"
            >
              <h3 className="text-sm font-medium text-accent mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 hover:border-zinc-600 hover:text-white transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
