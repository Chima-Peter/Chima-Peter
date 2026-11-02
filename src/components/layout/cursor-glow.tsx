"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mediaFine = window.matchMedia("(pointer: fine)");
    const mediaMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setEnabled(mediaFine.matches && !mediaMotion.matches);
    };

    sync();
    mediaFine.addEventListener("change", sync);
    mediaMotion.addEventListener("change", sync);

    return () => {
      mediaFine.removeEventListener("change", sync);
      mediaMotion.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-[background] duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgb(var(--accent) / 0.12), transparent 40%)`,
      }}
    />
  );
}
