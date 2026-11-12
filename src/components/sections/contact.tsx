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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
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
        message:
          error instanceof Error ? error.message : "Failed to send message",
        type: "error",
      });
    }
  };

  const closeSnackbar = () => setSnackbar({ ...snackbar, isOpen: false });

  return (
    <section id="contact" className="scroll-mt-20 pb-8 sm:scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <p className="section-label">Index 04</p>
        <h2 className="section-heading">Contact</h2>
        <p className="prose-body mb-8 max-w-xl">
          Open to full-time roles, contract work, and collaborations. If you
          have a project that needs solid engineering, I&apos;d love to hear
          about it.
        </p>

        <form onSubmit={handleSubmit} className="mb-10 max-w-xl space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="form-input"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="form-input"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-muted"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="form-input resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </form>

        <div className="flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:gap-8">
          <Link
            href="mailto:chimaojimma@gmail.com"
            className="font-mono text-sm text-ink underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            chimaojimma@gmail.com
          </Link>
          <Link
            href="https://linkedin.com/in/chimaojimma"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-ink underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/chima-peter"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-ink underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
          >
            GitHub
          </Link>
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Location", value: "Remote Worldwide" },
            { label: "Availability", value: "Flexible hours" },
            { label: "Response", value: "Within 24 hours" },
          ].map((item) => (
            <div key={item.label}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {item.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-ink sm:text-base">
                {item.value}
              </dd>
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
