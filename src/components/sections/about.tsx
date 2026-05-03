"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
    title: "Backend & APIs",
    description: "FastAPI, NestJS, Node.js—building scalable services that handle real traffic",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "AI Integration",
    description: "LangChain, multi-provider orchestration, and intelligent automation",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Real-time Systems",
    description: "Event-driven architectures and live data pipelines",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                    <div className="relative h-full rounded-2xl overflow-hidden border border-border">
                      <Image
                        src="/chima_ojimma.jpeg"
                        alt="Chima Peter Ojimma"
                        fill
                        sizes="(max-width: 768px) 100vw, 384px"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-sm text-emerald-400 font-medium">Available for work</span>
                        </div>
                        <p className="text-zinc-400 text-sm">Remote Worldwide</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="section-title">About</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                I build systems that<br />
                solve real problems
              </h2>

              <div className="space-y-4 text-zinc-400 leading-relaxed mb-10">
                <p>
                  I&apos;m a software engineer who enjoys working on the hard parts—the
                  backend architecture, the data pipelines, the integrations that make
                  products actually work at scale.
                </p>
                <p>
                  Recently, I&apos;ve been focused on enterprise SaaS backends, AI
                  orchestration systems, and developer tools. I care about clean
                  abstractions and code that&apos;s easy to maintain.
                </p>
                <p className="text-zinc-300">
                  Currently expanding into <span className="text-accent font-medium">Go</span> for
                  high-performance services.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-surface border border-border hover:border-zinc-600 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-zinc-500 text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "20+", label: "Projects Shipped" },
                  { value: "15+", label: "Technologies" },
                  { value: "10+", label: "Happy Clients" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
