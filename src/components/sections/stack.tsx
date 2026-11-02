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
    <section id="stack" className="scroll-mt-24 pb-20 lg:scroll-mt-28 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="section-label">Tech Stack</p>
        <h2 className="section-heading">Technologies I work with</h2>
        <p className="prose-body mb-10 max-w-prose">
          Modern tooling chosen for the job—languages, frameworks, data stores,
          and infrastructure used to ship production systems.
        </p>
      </motion.div>

      <dl className="space-y-6">
        {stack.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.03 }}
            className="grid gap-2 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
          >
            <dt className="pt-1 font-mono text-sm uppercase tracking-[0.14em] text-accent">
              {category.name}
            </dt>
            <dd className="flex flex-wrap gap-2">
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
