"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Snackbar from "@/components/ui/snackbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [snackbar, setSnackbar] = useState({ isOpen: false, message: "", type: "success" as "success" | "error" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setSnackbar({ isOpen: true, message: "Message sent! I'll get back to you soon.", type: "success" });
    } catch (error) {
      setStatus("error");
      setSnackbar({ 
        isOpen: true, 
        message: error instanceof Error ? error.message : "Failed to send message", 
        type: "error" 
      });
    }
  };

  const closeSnackbar = () => setSnackbar({ ...snackbar, isOpen: false });

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <p className="section-title text-center">Get in Touch</p>
          <h2 className="section-heading text-center">Let&apos;s build something together</h2>
          <p className="text-zinc-400 leading-relaxed mb-8 text-center">
            I&apos;m currently open to new opportunities—whether it&apos;s a full-time
            role, contract work, or an interesting collaboration. If you have a
            project that needs solid engineering, I&apos;d love to hear about it.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="mailto:chimaojimma@gmail.com"
              className="btn-secondary"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              chimaojimma@gmail.com
            </Link>
            <Link
              href="https://linkedin.com/in/chimaojimma"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Location",
                value: "Remote Worldwide",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Availability",
                value: "Flexible Hours",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                label: "Response",
                value: "Within 24 hours",
              },
            ].map((item) => (
              <div key={item.label} className="card p-5 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-zinc-800 text-accent mb-3">
                  {item.icon}
                </div>
                <p className="text-sm text-muted mb-1">{item.label}</p>
                <p className="text-white font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        isOpen={snackbar.isOpen}
        onClose={closeSnackbar}
      />
    </section>
  );
}
