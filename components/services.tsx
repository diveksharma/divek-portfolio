"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: "✦",
    title: "UI/UX Design",
    description:
      "End-to-end product design — user flows, wireframes, high-fidelity prototypes in Figma. Design systems that scale.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    color: "from-purple-500/10 to-transparent",
    border: "hover:border-purple-500/40",
  },
  {
    icon: "⬡",
    title: "Frontend Development",
    description:
      "Pixel-perfect, performant UIs in React, Next.js, and Vue. Your Figma designs, brought to life in code.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "from-blue-500/10 to-transparent",
    border: "hover:border-blue-500/40",
  },
  {
    icon: "◈",
    title: "Full-Stack Products",
    description:
      "From database schema to deployed SaaS. Auth, APIs, real-time data, third-party integrations — the full stack.",
    tags: ["Supabase", "Node.js", "PostgreSQL", "Vercel"],
    color: "from-cyan-500/10 to-transparent",
    border: "hover:border-cyan-500/40",
  },
  {
    icon: "⚡",
    title: "AI Integration",
    description:
      "Ship products with real AI features. Claude API integrations, AI-assisted workflows, prompt engineering.",
    tags: ["Claude API", "Claude Code", "AI Workflows"],
    color: "from-violet-500/10 to-transparent",
    border: "hover:border-violet-500/40",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-mono text-purple-400/70 uppercase tracking-widest">What I do</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-black text-white">
            Services
          </h2>
          <p className="mt-3 text-white/40 max-w-lg">
            I sit at the intersection of design and engineering — rare enough that clients notice.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`card-glow group relative overflow-hidden rounded-2xl bg-[#111111] p-6 cursor-default ${service.border}`}
            >
              {/* Gradient bg glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <span className="text-2xl text-white/30 group-hover:text-white/60 transition-colors duration-300">
                  {service.icon}
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/8 bg-white/[0.03] px-2.5 py-1 text-xs text-white/40 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
