"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[40vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 text-center dot-grid overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <div className="h-[400px] w-[700px] rounded-full bg-blue-600/6 blur-[120px] mt-10" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors font-mono mb-8"
          >
            ← Back to home
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <span className="text-xs font-mono text-blue-400/70 uppercase tracking-widest">My work</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.05] max-w-2xl mx-auto">
            Products I&apos;ve built
          </h1>
          <p className="mt-5 text-white/40 text-lg max-w-lg mx-auto leading-relaxed">
            From solo-built SaaS to client projects — design and engineering, end to end.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
