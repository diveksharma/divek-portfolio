"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative py-32 px-6 dot-grid" ref={ref}>
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-purple-600/8 blur-[100px]" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-mono text-purple-400/70 uppercase tracking-widest">Let&apos;s work together</span>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white leading-tight">
            Have a project in mind?
          </h2>
          <p className="mt-5 text-white/40 text-lg leading-relaxed max-w-xl mx-auto">
            Whether it&apos;s a full product build, a UI redesign, or a quick frontend sprint —
            I&apos;m open to hearing about it.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:diveksharm@gmail.com"
              className="neon-button inline-flex items-center gap-3 rounded-2xl bg-white/[0.03] px-8 py-4 text-base font-semibold text-white hover:text-white transition-all group"
            >
              <span>diveksharm@gmail.com</span>
              <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/divek-sharma-0203i5/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/8 bg-white/[0.02] px-8 py-4 text-base font-semibold text-white/50 hover:text-white/80 hover:border-white/15 transition-all"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
