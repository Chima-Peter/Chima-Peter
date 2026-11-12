"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.08 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-20 sm:justify-center sm:pb-16 sm:pt-24 lg:pb-20">
      <motion.div
        initial={{ opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden sm:w-[55%]">
          <motion.div
            className="absolute inset-[-6%]"
            initial={{ scale: 1.12, y: 18 }}
            animate={{
              scale: [1.08, 1.14, 1.08],
              y: [0, -16, 0],
              x: [0, 10, 0],
            }}
            transition={{
              opacity: { duration: 1.15, ease: [0.22, 1, 0.36, 1] },
              scale: {
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              },
              y: {
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              },
              x: {
                duration: 26,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              },
            }}
          >
            <Image
              src="/chima_ojimma.jpeg"
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 100vw, 55vw"
              className="object-cover object-top opacity-[0.18] grayscale sm:opacity-30 dark:opacity-[0.22] dark:sm:opacity-25"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20 sm:bg-gradient-to-l sm:from-transparent sm:via-background/40 sm:to-background" />
        </div>
      </motion.div>

      <div className="site-shell relative w-full">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-accent sm:mb-6"
        >
          Available for work · Remote
        </motion.p>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="max-w-[10ch] font-display text-[clamp(2.75rem,12vw,7.5rem)] font-bold leading-[0.92] tracking-tight text-ink"
        >
          Chima Ojimma
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-md text-base leading-relaxed text-muted sm:mt-6 sm:text-lg"
        >
          Backend engineer building distributed systems and AI infrastructure
          across fintech, SaaS, and developer tooling.
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center"
        >
          <Link href="#projects" className="btn-primary w-full sm:w-auto">
            Selected work
          </Link>
          <Link href="#contact" className="btn-secondary w-full sm:w-auto">
            Contact
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
