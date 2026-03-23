"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease, delay: i * 0.1 },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen dot-grid overflow-hidden">
      {/* Radial glow behind content */}
      <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <div className="h-[600px] w-[900px] rounded-full bg-purple-600/10 blur-[120px] mt-20" />
      </div>

      <div className="relative z-10 pt-36 pb-0 px-6 text-center">
        {/* Available badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
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
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] max-w-4xl mx-auto"
        >
          I design and build{" "}
          <span className="gradient-text">digital products</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-4 text-lg md:text-xl font-medium text-white/40 tracking-wide"
        >
          from Figma to deployed code
        </motion.p>

        {/* Body */}
        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-6 text-base md:text-lg text-white/50 max-w-xl mx-auto leading-relaxed"
        >
          UI/UX designer who actually codes. I take ideas from wireframe to
          working product — solo or alongside your team.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
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
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-all shadow-lg shadow-purple-900/30"
          >
            Get in touch
            <span>→</span>
          </a>
        </motion.div>
      </div>

      {/* ContainerScroll with Social-One screenshot */}
      <ContainerScroll
        titleComponent={
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs font-mono text-purple-400/70 uppercase tracking-widest">Featured project</span>
            <span className="text-2xl md:text-3xl font-black text-white">Social-One Dashboard</span>
          </motion.div>
        }
      >
        <Image
          src="https://social-one-demo-at6ue0wxl-diveksharmas-projects.vercel.app/dashboard"
          alt="Social-One analytics dashboard"
          width={1400}
          height={800}
          className="w-full h-full object-cover object-top rounded-[16px]"
          unoptimized
        />
      </ContainerScroll>
    </section>
  );
}
