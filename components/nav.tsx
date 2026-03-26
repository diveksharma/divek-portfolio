"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5" />

      <Link href="/" className="relative flex items-center gap-2">
        <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-xs font-black text-white">
          D
        </div>
        <span className="text-sm font-semibold text-white/80">Divek Sharma</span>
      </Link>

      <div className="relative hidden md:flex items-center gap-8">
        {links.map((link) => {
          const isActive = link.href === "/projects" && pathname === "/projects";
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                isActive ? "text-white" : "text-white/50 hover:text-white/90"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="relative">
        <a
          href="mailto:diveksharm@gmail.com"
          className="neon-button inline-flex items-center gap-2 rounded-xl bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all duration-200"
        >
          Get in touch
          <span className="text-blue-400">→</span>
        </a>
      </div>
    </motion.nav>
  );
}
