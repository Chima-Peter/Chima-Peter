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
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: "",
    type: "success" as "success" | "error",
  });

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
      setSnackbar({
        isOpen: true,
        message: "Message sent! I'll get back to you soon.",
        type: "success",
      });
    } catch (error) {
      setStatus("error");
      setSnackbar({
        isOpen: true,
        message: error instanceof Error ? error.message : "Failed to send message",
        type: "error",
      });
    }
  };

  const closeSnackbar = () => setSnackbar({ ...snackbar, isOpen: false });

  return (
    <section id="contact" className="scroll-mt-24 pb-8 lg:scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="section-label">Get in Touch</p>
        <h2 className="section-heading">Let&apos;s build something together</h2>
        <p className="prose-body mb-8 max-w-prose">
          Open to full-time roles, contract work, and interesting collaborations.
          If you have a project that needs solid engineering, I&apos;d love to
          hear about it.
        </p>

        <form onSubmit={handleSubmit} className="mb-10 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-base font-medium text-ink">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="form-input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-base font-medium text-ink">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="form-input"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-base font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="form-input resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </form>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="mailto:chimaojimma@gmail.com" className="btn-secondary">
            chimaojimma@gmail.com
          </Link>
          <Link
            href="https://linkedin.com/in/chimaojimma"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </Link>
        </div>

        <dl className="mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-3">
          {[
            { label: "Location", value: "Remote Worldwide" },
            { label: "Availability", value: "Flexible hours" },
            { label: "Response", value: "Within 24 hours" },
          ].map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-sm uppercase tracking-[0.14em] text-muted">
                {item.label}
              </dt>
              <dd className="mt-1 text-base font-medium text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>

      <Snackbar
        message={snackbar.message}
        type={snackbar.type}
        isOpen={snackbar.isOpen}
        onClose={closeSnackbar}
      />
    </section>
  );
}
