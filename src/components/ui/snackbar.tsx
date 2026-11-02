"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

type SnackbarProps = {
  message: string;
  type: "success" | "error";
  isOpen: boolean;
  onClose: () => void;
  duration?: number;
};

export default function Snackbar({
  message,
  type,
  isOpen,
  onClose,
  duration = 5000,
}: SnackbarProps) {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 40, x: "-50%" }}
          className="fixed bottom-6 left-1/2 z-50"
        >
          <div
            className={`flex items-center gap-3 rounded-md border px-4 py-3 shadow-md ${
              type === "success"
                ? "border-accent/30 bg-surface text-accent"
                : "border-red-400/40 bg-surface text-red-600 dark:text-red-400"
            }`}
          >
            <p className="text-sm font-medium">{message}</p>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 rounded p-1 text-muted hover:text-ink"
              aria-label="Dismiss"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
