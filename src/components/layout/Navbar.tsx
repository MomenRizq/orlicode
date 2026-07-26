"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

export default function Navbar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 200);
    setScrolled(latest > 32);
  });

  const links = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#portfolio", label: dict.nav.work },
    { href: "#process", label: dict.nav.process },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <motion.header
      animate={{ y: hidden ? "-110%" : "0%" }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-bg/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <Container className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="group flex items-center gap-2.5">
            <img 
              src="/logo.png" 
              alt="OrliCode Logo" 
              className="h-9 w-9 rounded-xl object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-jakarta text-lg font-bold tracking-tight text-ink">
              Orli<span className="text-brand-violet">Code</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand-violet after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher locale={locale} />
            <AnimatedButton href="#contact" className="!px-6 !py-2.5 !text-[13px]">
              {dict.nav.cta} <FiArrowUpRight size={14} />
            </AnimatedButton>
          </div>

          {/* Mobile burger */}
          <div className="flex items-center gap-3 lg:hidden">
            <LanguageSwitcher locale={locale} />
            <button
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-ink transition-colors hover:bg-white/5"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <HiOutlineX size={18} /> : <HiOutlineMenuAlt3 size={18} />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -16, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-white/[0.06] bg-bg/95 backdrop-blur-2xl lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-6">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={false}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : -12 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-ink-muted transition-colors hover:bg-white/5 hover:text-ink"
            >
              {l.label}
            </motion.a>
          ))}
          <div className="mt-4 px-4">
            <AnimatedButton href="#contact" className="w-full justify-center">
              {dict.nav.cta}
            </AnimatedButton>
          </div>
        </Container>
      </motion.div>
    </motion.header>
  );
}
