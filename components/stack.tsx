"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  { label: "Design",        items: ["Figma", "Prototyping", "Wireframing", "Design Systems", "User Research"] },
  { label: "Frontend",      items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { label: "Backend",       items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "OAuth", "Vercel"] },
  { label: "AI & Tools",    items: ["Claude Code", "Anthropic API", "Prompt Engineering", "Git", "VS Code"] },
  { label: "No-code / CMS", items: ["Webflow", "WordPress", "Framer", "Shopify", "Squarespace"] },
];

export default function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-blue-400/70 uppercase tracking-widest">Tech</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">Stack & tools</h2>
        </motion.div>

        <div className="space-y-5">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-center gap-3"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-widest w-28 shrink-0 text-blue-400/80">
                {cat.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/8 bg-[#111111] px-3 py-1.5 text-xs text-white/50 font-mono hover:border-blue-500/30 hover:text-white/70 transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
