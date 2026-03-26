"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "10+", label: "Companies worked with" },
  { value: "4", label: "Platforms integrated" },
  { value: "1", label: "Full SaaS shipped solo" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-32 px-6" ref={ref}>
      {/* Section label — centered */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-14 text-center"
      >
        <span className="text-xs font-mono text-blue-400/70 uppercase tracking-widest">About</span>
        <h2 className="mt-3 text-3xl md:text-4xl font-black text-white leading-tight">
          Designer who codes.<br />
          <span className="gradient-text">Developer who designs.</span>
        </h2>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="space-y-4 text-white/50 leading-relaxed text-sm">
            <p>
              Most designers hand off Figma files and call it done. Most developers don&apos;t touch design tools.
              I do both — which means I can take a product from idea to live URL without a handoff gap.
            </p>
            <p>
              I&apos;ve worked across UX, frontend, and full-stack at agencies, startups, and on my own products.
              My latest build, Social-One, is a multi-platform analytics SaaS with AI insights — built entirely
              solo using <span className="text-blue-400">Claude Code</span> for AI-assisted development.
            </p>
            <p>Currently available for freelance projects — product design, frontend builds, or both.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/divek-sharma-0203i5/"
              target="_blank" rel="noopener noreferrer"
              className="neon-button inline-flex items-center gap-2 rounded-xl bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white transition-all"
            >
              LinkedIn <span className="text-blue-400">↗</span>
            </a>
            <a
              href="mailto:diveksharm@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-white/50 hover:text-white/80 hover:border-white/15 transition-all"
            >
              diveksharm@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="card-glow rounded-2xl bg-[#111111] p-5"
              >
                <p className="text-3xl font-black gradient-text">{stat.value}</p>
                <p className="mt-1 text-xs text-white/40 font-mono">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="card-glow rounded-2xl bg-[#111111] p-5">
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sm">
                ⚡
              </div>
              <div>
                <p className="text-sm font-bold text-white">AI-augmented workflow</p>
                <p className="mt-1 text-xs text-white/40 leading-relaxed">
                  I use Claude Code daily for architecture, implementation, and debugging.
                  Built an AI content profiling system using the Anthropic API —
                  prompt engineering, structured outputs, and real AI integration.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
