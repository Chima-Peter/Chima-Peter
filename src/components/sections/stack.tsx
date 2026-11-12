"use client";

import { motion } from "framer-motion";

type StackCategory = {
  name: string;
  items: string[];
};

const stack: StackCategory[] = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Golang"],
  },
  {
    name: "Backend",
    items: ["FastAPI", "NestJS", "Node.js", "Express.js", "Gin", "REST APIs"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Vue 3", "Tailwind CSS", "Pinia"],
  },
  {
    name: "AI / ML",
    items: ["LangChain", "LangGraph", "RAG", "LangSmith", "CrewAI"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Neo4j"],
  },
  {
    name: "Cloud & DevOps",
    items: ["AWS", "Docker", "Docker Swarm", "GitHub Actions", "GitLab CI/CD", "Pulumi"],
  },
  {
    name: "Testing & Quality",
    items: ["Pytest", "Jest", "Vitest", "Playwright", "OpenAPI/Swagger"],
  },
  {
    name: "Other",
    items: ["Celery", "Bull", "Stripe", "Supabase", "Prisma", "Sentry"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="scroll-mt-20 pb-16 sm:scroll-mt-24 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="max-w-2xl"
      >
        <p className="section-label">Index 03</p>
        <h2 className="section-heading">Stack</h2>
        <p className="prose-body mb-8 sm:mb-10">
          Tooling chosen for the job - languages, frameworks, data stores, and
          infrastructure used to ship production systems.
        </p>
      </motion.div>

      <dl className="border-t border-border">
        {stack.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.2) }}
            className="grid gap-3 border-b border-border py-5 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:py-6"
          >
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
              {category.name}
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {category.items.map((tech) => (
                <span key={tech} className="tech-chip">
                  {tech}
                </span>
              ))}
            </dd>
          </motion.div>
        ))}
      </dl>
    </section>
  );
}
