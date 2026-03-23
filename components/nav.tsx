"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5" />

      <div className="relative flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xs font-black text-white">
          D
        </div>
        <span className="text-sm font-semibold text-white/80">Divek Sharma</span>
      </div>

      <div className="relative hidden md:flex items-center gap-8">
        {["Work", "Services", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-sm text-white/50 hover:text-white/90 transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="relative">
        <a
          href="mailto:diveksharm@gmail.com"
          className="neon-button inline-flex items-center gap-2 rounded-xl bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-200"
        >
          Get in touch
          <span className="text-purple-400">→</span>
        </a>
      </div>
    </motion.nav>
  );
}
