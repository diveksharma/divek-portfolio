"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

const stats = [
  { label: "Total Followers", val: "248K", change: "+12.4%" },
  { label: "Avg Engagement", val: "4.8%", change: "+0.6%" },
  { label: "Posts (30d)", val: "142", change: "+18" },
  { label: "Reach", val: "1.2M", change: "+22%" },
];

const platforms = ["YouTube", "TikTok", "Instagram", "Facebook"];

export default function Hero() {
  return (
    <section className="relative min-h-screen dot-grid overflow-hidden">
      {/* Blue radial glow */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <div className="h-[600px] w-[900px] rounded-full bg-blue-600/8 blur-[130px] mt-20" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-36 pb-24 px-6 text-center">
        {/* Available badge */}
        <motion.div
          custom={0} variants={fadeUp} initial="hidden" animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-white/60 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Available for freelance work
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1} variants={fadeUp} initial="hidden" animate="show"
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] max-w-4xl"
        >
          I design and build{" "}
          <span className="gradient-text">digital products</span>
        </motion.h1>

        <motion.p
          custom={2} variants={fadeUp} initial="hidden" animate="show"
          className="mt-4 text-lg md:text-xl font-medium text-white/40 tracking-wide"
        >
          from Figma to deployed code
        </motion.p>

        <motion.p
          custom={3} variants={fadeUp} initial="hidden" animate="show"
          className="mt-6 text-base md:text-lg text-white/50 max-w-xl leading-relaxed"
        >
          UI/UX designer who actually codes. I take ideas from wireframe to
          working product — solo or alongside your team.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4} variants={fadeUp} initial="hidden" animate="show"
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#work"
            className="neon-button inline-flex items-center gap-2 rounded-xl bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white hover:text-white transition-all"
          >
            View my work
          </a>
          <a
            href="mailto:diveksharm@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30"
          >
            Get in touch →
          </a>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          custom={5} variants={fadeUp} initial="hidden" animate="show"
          className="mt-20 w-full max-w-4xl"
        >
          {/* Browser chrome */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] overflow-hidden shadow-2xl shadow-black/60">
            {/* Title bar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/5 bg-[#0d0d0d]">
              <div className="flex gap-1.5">
                {[0, 1, 2].map(i => (
                  <div key={i} className="h-3 w-3 rounded-full bg-white/10" />
                ))}
              </div>
              <div className="flex-1 h-6 rounded-md bg-white/5 flex items-center px-3">
                <span className="text-[11px] text-white/20 font-mono">social-one-demo.vercel.app/dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Stat cards */}
              {stats.map(s => (
                <div key={s.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-3 flex flex-col gap-2">
                  <p className="text-[10px] text-white/30 font-mono">{s.label}</p>
                  <p className="text-xl font-black text-white">{s.val}</p>
                  <p className="text-[10px] text-green-400 font-mono">{s.change}</p>
                </div>
              ))}

              {/* Growth chart */}
              <div className="col-span-2 md:col-span-4 rounded-xl bg-white/[0.03] border border-white/5 p-4">
                <p className="text-[10px] text-white/30 font-mono mb-3">90-day follower growth</p>
                <div className="h-16 flex items-end gap-0.5">
                  {Array.from({ length: 42 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-blue-500/40"
                      style={{ height: `${25 + Math.sin(i * 0.35) * 18 + i * 1.2}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Platforms */}
              <div className="col-span-1 md:col-span-2 rounded-xl bg-white/[0.03] border border-white/5 p-3">
                <p className="text-[10px] text-white/30 font-mono mb-2">Platforms</p>
                {platforms.map((p, i) => (
                  <div key={p} className="flex items-center justify-between py-1">
                    <span className="text-[11px] text-white/40">{p}</span>
                    <div className="h-1.5 w-20 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-blue-500/50 rounded-full" style={{ width: `${[72, 58, 85, 44][i]}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* AI content profile */}
              <div className="col-span-1 md:col-span-2 rounded-xl bg-white/[0.03] border border-white/5 p-3">
                <p className="text-[10px] text-white/30 font-mono mb-2">AI Content Profile</p>
                <p className="text-xs text-white/50 leading-relaxed">
                  Creator · Lifestyle &amp; Tech · Growing audience aged 18–34 across 4 platforms.
                </p>
                <div className="mt-2 flex gap-1 flex-wrap">
                  {["Educational", "Behind-scenes", "Trending"].map(t => (
                    <span key={t} className="rounded border border-blue-500/20 bg-blue-500/5 px-1.5 py-0.5 text-[10px] text-blue-400/70 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Subtle label below mockup */}
          <p className="mt-4 text-xs text-white/20 font-mono text-center">
            Social-One — multi-platform analytics dashboard (live demo)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
