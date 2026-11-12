"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  isPrimaryProjectLink,
  projectLinks,
  projects,
  type Project,
} from "@/data/projects";

function ProjectMedia({ project }: { project: Project }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!project.image) return;
    let cancelled = false;
    const probe = new window.Image();
    probe.onload = () => {
      if (!cancelled) setReady(true);
    };
    probe.src = project.image;
    return () => {
      cancelled = true;
    };
  }, [project.image]);

  if (!project.image) {
    return (
      <div className="flex h-full min-h-[12rem] items-end border border-border bg-ink/[0.03] p-5 dark:bg-ink/[0.06] sm:min-h-0">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          API
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden border border-border bg-ink/[0.03] sm:aspect-auto sm:h-full sm:min-h-[16rem]">
      {ready ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 42vw"
          className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex items-end p-5">
          <span className="font-display text-2xl font-semibold text-ink/25">
            {project.title}
          </span>
        </div>
      )}
    </div>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-20 pb-16 sm:scroll-mt-24 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="mb-10 max-w-2xl sm:mb-14"
      >
        <p className="section-label">Index 01</p>
        <h2 className="section-heading">Selected work</h2>
        <p className="prose-body">
          Production systems across AI tooling, commerce, and SaaS - each with
          the problem it solved and where you can open it.
        </p>
      </motion.div>

      <ol className="space-y-0 border-t border-border">
        {featuredProjects.map((project, index) => {
          const links = projectLinks(project);
          const n = String(index + 1).padStart(2, "0");

          return (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
              className="group border-b border-border py-8 sm:py-10"
            >
              <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:gap-10 lg:gap-14">
                <div className="order-1 md:order-2">
                  <ProjectMedia project={project} />
                </div>

                <div className="order-2 min-w-0 md:order-1">
                  <div className="mb-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="font-mono text-xs text-muted">{n}</span>
                    <span className="tag">{project.category}</span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink transition-colors motion-safe:group-hover:text-accent sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>

                  <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-relaxed sm:text-base">
                    <p className="text-ink-soft">
                      <span className="font-semibold text-ink">Problem. </span>
                      {project.problem}
                    </p>
                    <p className="text-muted">
                      <span className="font-semibold text-ink">Solution. </span>
                      {project.description}
                    </p>
                  </div>

                  {links.length > 0 ? (
                    <div className="mt-6 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap">
                      {links.map((item) => {
                        const primary = isPrimaryProjectLink(item);
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                              primary
                                ? "btn-primary w-full sm:w-auto"
                                : "btn-secondary w-full sm:w-auto"
                            }
                          >
                            {item.label}
                            <ExternalIcon />
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                      Internal API - no public website or repo
                    </p>
                  )}

                  <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ol>

      {otherProjects.length > 0 ? (
        <div className="mt-12 sm:mt-16">
          <h3 className="mb-4 font-display text-xl font-semibold text-ink sm:text-2xl">
            Also shipping
          </h3>
          <ul className="border-t border-border">
            {otherProjects.map((project) => {
              const links = projectLinks(project);
              return (
                <li key={project.title} className="border-b border-border py-6 sm:py-7">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                    <div className="min-w-0 max-w-3xl">
                      <p className="font-display text-lg font-semibold text-ink sm:text-xl">
                        {project.title}
                      </p>
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft sm:text-base">
                        <span className="font-semibold text-ink">Problem. </span>
                        {project.problem}
                      </p>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted sm:text-base">
                        <span className="font-semibold text-ink">Solution. </span>
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tech-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {links.length > 0 ? (
                      <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:flex-col">
                        {links.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary w-full sm:w-auto"
                          >
                            {item.label}
                            <ExternalIcon />
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <div className="mt-10">
        <Link
          href="https://github.com/chima-peter"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View all on GitHub
          <ExternalIcon />
        </Link>
      </div>
    </section>
  );
}
