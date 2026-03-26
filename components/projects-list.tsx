"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    liveUrl: "https://social-one-demo-at6ue0wxl-diveksharmas-projects.vercel.app/dashboard",
    year: "2025–2026",
    role: "Design + Engineering",
    // Dashboard mockup data
    mockup: {
      stats: [
        { label: "Followers", val: "248K", delta: "+12.4%" },
        { label: "Engagement", val: "4.8%", delta: "+0.6%" },
        { label: "Posts (30d)", val: "142", delta: "+18" },
        { label: "Reach", val: "1.2M", delta: "+22%" },
      ],
      platforms: [
        { name: "YouTube", pct: 72 },
        { name: "TikTok", pct: 58 },
        { name: "Instagram", pct: 85 },
        { name: "Facebook", pct: 44 },
      ],
    },
  },
];

const comingSoon = [
  { name: "Client project", tag: "Web · Design", teaser: "Brand identity & Webflow build for a London startup." },
  { name: "Agency work", tag: "UI/UX · Frontend", teaser: "Product redesign — details coming soon." },
];

function DashboardMockup({ data }: { data: typeof projects[0]["mockup"] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden shadow-2xl shadow-black/60">
      {/* Browser bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-[#0d0d0d]">
        <div className="flex gap-1.5">
          {[0, 1, 2].map((i) => <div key={i} className="h-3 w-3 rounded-full bg-white/10" />)}
        </div>
        <div className="flex-1 h-6 rounded-md bg-white/5 flex items-center px-3">
          <span className="text-[11px] text-white/20 font-mono">social-one-demo.vercel.app/dashboard</span>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-4 space-y-3">
        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3">
          {data.stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
              <p className="text-[10px] text-white/30 font-mono">{s.label}</p>
              <p className="mt-1 text-lg font-black text-white">{s.val}</p>
              <p className="text-[10px] text-green-400 font-mono">{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Growth chart */}
        <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
          <p className="text-[10px] text-white/30 font-mono mb-3">90-day follower growth</p>
          <div className="h-20 flex items-end gap-0.5">
            {Array.from({ length: 42 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-blue-500/40"
                style={{ height: `${25 + Math.sin(i * 0.35) * 18 + i * 1.1}%` }}
              />
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-2 gap-3">
          {/* Platforms */}
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
            <p className="text-[10px] text-white/30 font-mono mb-2">Platforms</p>
            {data.platforms.map((p) => (
              <div key={p.name} className="flex items-center justify-between py-1">
                <span className="text-[11px] text-white/40">{p.name}</span>
                <div className="h-1.5 w-20 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-blue-500/50 rounded-full" style={{ width: `${p.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          {/* AI Profile */}
          <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
            <p className="text-[10px] text-white/30 font-mono mb-2">AI Content Profile</p>
            <p className="text-[11px] text-white/40 leading-relaxed">
              Creator · Lifestyle &amp; Tech · Growing audience aged 18–34 across 4 platforms.
            </p>
            <div className="mt-2 flex gap-1 flex-wrap">
              {["Educational", "Behind-scenes", "Trending"].map((t) => (
                <span key={t} className="rounded border border-blue-500/20 bg-blue-500/5 px-1.5 py-0.5 text-[10px] text-blue-400/70 font-mono">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
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

            {/* Dashboard mockup — full width */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mb-12"
            >
              <DashboardMockup data={project.mockup} />
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
