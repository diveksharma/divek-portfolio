"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const screenshots = [
  {
    file: "/screenshots/social-one/01-dashboard-overview.png",
    label: "Overview",
    title: "Cross-Platform Dashboard",
    description:
      "A single view of 107.7K total followers, 403 posts, and 90-day growth across all 4 platforms. The AI Insights panel surfaces actionable findings on demand — no manual data-wrangling required.",
  },
  {
    file: "/screenshots/social-one/02-dashboard-youtube.png",
    label: "YouTube",
    title: "YouTube Analytics",
    description:
      "53.1K subscribers and 5.5M lifetime views broken down by video. Each bar represents an individual upload — instantly spot which content drove spikes and which underperformed.",
  },
  {
    file: "/screenshots/social-one/03-dashboard-tiktok.png",
    label: "TikTok",
    title: "TikTok Performance",
    description:
      "38.9K followers and 724K total likes charted over time in TikTok's brand turquoise. Video-level data reveals engagement velocity and the best time to post next.",
  },
  {
    file: "/screenshots/social-one/04-dashboard-instagram.png",
    label: "Instagram",
    title: "Instagram Engagement",
    description:
      "15.7K followers with a per-post like timeline that shows content cadence patterns at a glance. Saves, shares, and reach are captured alongside standard engagement counts.",
  },
  {
    file: "/screenshots/social-one/05-dashboard-facebook.png",
    label: "Facebook",
    title: "Facebook Page Insights",
    description:
      "35.8K page fans, 32K followers, and 19.1K impressions tracked daily. Boosted-post windows stand out as clear spikes — making ad ROI immediately visible.",
  },
  {
    file: "/screenshots/social-one/06-analytics.png",
    label: "Analytics",
    title: "Deep-Dive Analytics",
    description:
      "A dedicated analytics page with four charts: per-platform engagement rate, a composite Platform Health Score, a Content Velocity stacked bar, and a Total Reach donut. All four update in sync with the selected date range.",
  },
  {
    file: "/screenshots/social-one/07-analytics-growth.png",
    label: "Growth",
    title: "Growth Correlation",
    description:
      "All four platforms overlaid on a single chart to reveal cross-platform lift patterns — when a TikTok video goes viral, does YouTube grow too? This view answers that instantly.",
  },
];

const projects = [
  {
    slug: "social-one",
    tag: "SaaS · Full-Stack",
    status: "Live Demo",
    name: "Social-One",
    tagline: "Multi-platform social media analytics with AI insights",
    description:
      "A full-stack analytics dashboard that connects YouTube, TikTok, Instagram, and Facebook into a single view. Built solo — from database design to deployed product — with AI-powered content profiling using the Anthropic Claude API.",
    highlights: [
      "Multi-platform OAuth with encrypted token storage",
      "AI content profiling — Claude API generates audience insights",
      "GDPR-compliant: right-to-erasure, data export pipeline",
      "Server-side prefetching via React Query HydrationBoundary",
      "90-day seeded demo with realistic data across 4 platforms",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "Anthropic API", "Claude Code", "Vercel"],
    liveUrl: "https://social-one-demo.vercel.app",
    year: "2025–2026",
    role: "Design + Engineering",
  },
];

const comingSoon = [
  { name: "Client project", tag: "Web · Design", teaser: "Brand identity & Webflow build for a London startup." },
  { name: "Agency work", tag: "UI/UX · Frontend", teaser: "Product redesign — details coming soon." },
];

function ScreenshotShowcase() {
  const [active, setActive] = useState(0);
  const current = screenshots[active];

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden shadow-2xl shadow-black/60">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-[#0d0d0d]">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-3 w-3 rounded-full bg-white/10" />
          ))}
        </div>
        <div className="flex-1 h-6 rounded-md bg-white/5 flex items-center px-3">
          <span className="text-[11px] text-white/20 font-mono">social-one-demo.vercel.app/dashboard</span>
        </div>
      </div>

      {/* Tab strip */}
      <div className="flex gap-1 px-4 pt-3 pb-0 overflow-x-auto scrollbar-none">
        {screenshots.map((s, i) => (
          <button
            key={s.label}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-t-lg px-3.5 py-1.5 text-[11px] font-mono transition-all ${
              active === i
                ? "bg-white/8 text-white border border-white/10 border-b-[#111111]"
                : "text-white/30 hover:text-white/60"
            }`}
          >
            <span className="mr-1.5 opacity-50">{i + 1}.</span>
            {s.label}
          </button>
        ))}
      </div>

      {/* Screenshot */}
      <div className="relative w-full aspect-[16/10] bg-[#0a0a0a] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={current.file}
              alt={current.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority={active === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Caption */}
      <div className="px-5 py-4 border-t border-white/5 bg-[#0d0d0d]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-sm font-semibold text-white/80 mb-1">{current.title}</p>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-3xl">{current.description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function ProjectsList() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-16 px-6 pb-32" ref={ref}>
      <div className="max-w-6xl mx-auto space-y-32">

        {/* Social-One — featured project */}
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            {/* Project header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest">{project.tag}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 border border-green-500/20 px-2.5 py-0.5 text-[10px] font-mono text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                    {project.status}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white">{project.name}</h2>
                <p className="mt-2 text-white/50 max-w-xl">{project.tagline}</p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-button inline-flex items-center gap-2 rounded-xl bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-all whitespace-nowrap"
                >
                  View live demo <span className="text-blue-400">→</span>
                </a>
              </div>
            </div>

            {/* Screenshot showcase — full width */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mb-12"
            >
              <ScreenshotShowcase />
            </motion.div>

            {/* Meta row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: "Role", value: project.role },
                { label: "Year", value: project.year },
                { label: "Type", value: project.tag },
                { label: "Status", value: project.status },
              ].map((m) => (
                <div key={m.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-1">{m.label}</p>
                  <p className="text-sm font-semibold text-white/70">{m.value}</p>
                </div>
              ))}
            </div>

            {/* About + Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">About this project</p>
                <p className="text-white/50 leading-relaxed text-sm">{project.description}</p>
              </div>

              <div>
                <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Key highlights</p>
                <ul className="space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-white/50 leading-relaxed">
                      <span className="mt-0.5 text-blue-400 shrink-0 text-xs">✦</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech stack */}
            <div>
              <p className="text-xs font-mono text-white/30 uppercase tracking-widest mb-4">Tech stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="rounded-lg border border-white/8 bg-[#111111] px-3 py-1.5 text-xs text-white/50 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}

        {/* Divider */}
        <div className="border-t border-white/[0.05]" />

        {/* Coming soon cards */}
        <div>
          <p className="text-xs font-mono text-white/20 uppercase tracking-widest mb-8 text-center">More coming soon</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {comingSoon.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <span className="text-[10px] font-mono text-white/25 uppercase tracking-widest">{p.tag}</span>
                <h3 className="mt-2 text-lg font-bold text-white/40">{p.name}</h3>
                <p className="mt-2 text-sm text-white/25">{p.teaser}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
