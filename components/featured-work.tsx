"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const highlights = [
  "Multi-platform OAuth (YouTube, TikTok, Instagram, Facebook) with encrypted token storage",
  "AI content profiling system using Anthropic Claude API — generates performance summaries and audience insights",
  "Built entirely using Claude Code (AI-agent assisted development) — architecture, implementation, and debugging",
  "React Query HydrationBoundary for server-side prefetching — zero loading flash on page load",
  "GDPR-compliant: right-to-erasure cascade deletion, encrypted tokens, data export pipeline",
  "90-day live demo with realistic seed data across all 4 platforms",
];

const stack = [
  "Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4",
  "Supabase", "PostgreSQL", "React Query", "Anthropic API",
  "Claude Code", "Vercel", "Recharts", "Framer Motion",
];

export default function FeaturedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="relative py-32 px-6 dot-grid" ref={ref}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[800px] rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-blue-400/70 uppercase tracking-widest">Featured project</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">
            Social-One
          </h2>
          <p className="mt-3 text-white/40 max-w-lg">
            A full-stack social media analytics platform. Built solo, from database schema to deployed product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 card-glow rounded-2xl overflow-hidden bg-[#111111] aspect-video"
          >
            <div className="relative h-full w-full bg-gradient-to-br from-blue-900/20 via-[#111] to-blue-900/10 flex items-center justify-center">
              {/* Mock browser chrome */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-[#0d0d0d] border-b border-white/5 flex items-center gap-2 px-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 mx-4 h-4 rounded bg-white/5 text-[10px] text-white/20 flex items-center px-2 font-mono">
                  social-one-demo.vercel.app/dashboard
                </div>
              </div>
              <div className="pt-8 h-full w-full">
                {/* Dashboard preview grid */}
                <div className="p-4 grid grid-cols-3 gap-2 h-full">
                  {[
                    { label: "Total Followers", val: "248K", up: "+12.4%" },
                    { label: "Avg. Engagement", val: "4.8%", up: "+0.6%" },
                    { label: "Posts (30d)", val: "142", up: "+18" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
                      <p className="text-[10px] text-white/30 font-mono">{stat.label}</p>
                      <p className="mt-1 text-lg font-black text-white">{stat.val}</p>
                      <p className="text-[10px] text-green-400 font-mono">{stat.up}</p>
                    </div>
                  ))}
                  <div className="col-span-3 rounded-xl bg-white/[0.03] border border-white/5 p-3 flex items-center gap-2">
                    <div className="flex-1 h-12 bg-gradient-to-r from-blue-500/10 via-blue-500/20 to-blue-500/10 rounded-lg" />
                    <span className="text-[10px] text-white/20 font-mono">90-day growth chart</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Highlights */}
            <div className="card-glow rounded-2xl bg-[#111111] p-5 flex-1">
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">Highlights</p>
              <ul className="space-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-xs text-white/50 leading-relaxed">
                    <span className="mt-0.5 text-blue-400 shrink-0">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack */}
            <div className="card-glow rounded-2xl bg-[#111111] p-5">
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-3">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/8 bg-white/[0.03] px-2 py-0.5 text-[11px] text-white/40 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://social-one-demo-at6ue0wxl-diveksharmas-projects.vercel.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button rounded-2xl bg-white/[0.02] p-4 flex items-center justify-between group"
            >
              <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                View live demo
              </span>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
