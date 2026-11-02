"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/theme/theme-toggle";
import { NAV_LINKS, SOCIAL_LINKS } from "./nav-links";
import { useScrollSpy } from "./use-scroll-spy";

const sectionIds = NAV_LINKS.map((link) => link.id);

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function StickyIntro() {
  const activeId = useScrollSpy(sectionIds);

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[min(40%,28rem)] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-6 flex items-center gap-4 lg:mb-8"
        >
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border lg:h-20 lg:w-20">
            <Image
              src="/chima_ojimma.jpeg"
              alt="Chima Peter Ojimma"
              fill
              sizes="80px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="flex items-center gap-2 text-base text-ink-soft">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            Available for work · Remote
          </div>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl"
        >
          Chima Peter
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-3 font-display text-2xl text-ink-soft sm:text-3xl"
        >
          Backend Engineer
        </motion.p>

        <motion.p
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-md text-lg leading-relaxed text-muted"
        >
          Building distributed systems and AI infrastructure across fintech,
          SaaS, and developer tooling.
        </motion.p>

        <motion.nav
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          aria-label="Primary"
          className="mt-10 hidden lg:block"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={`group flex items-center gap-3 py-2.5 text-base font-medium transition-colors ${
                      isActive ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-12 bg-accent"
                          : "w-6 bg-border group-hover:w-10 group-hover:bg-muted"
                      }`}
                      aria-hidden
                    />
                    <span className="font-mono text-sm uppercase tracking-[0.16em]">
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </div>

      <motion.div
        custom={5}
        variants={fade}
        initial="hidden"
        animate="show"
        className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 lg:mt-0"
      >
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto")
                ? undefined
                : "noopener noreferrer"
            }
            className="text-base font-medium text-muted transition-colors hover:text-accent"
          >
            {link.name}
          </Link>
        ))}
        <ThemeToggle className="hidden lg:inline-flex" />
      </motion.div>
    </aside>
  );
}
