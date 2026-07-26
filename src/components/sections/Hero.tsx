"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Statistic from "@/components/ui/Statistic";
import type { Dictionary } from "@/i18n/getDictionary";
import { FiArrowRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const STAGGER = 0.12;

export default function Hero({ dict }: { dict: Dictionary }) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on the background orb
  useEffect(() => {
    if (!bgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 40,
        ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: true },
      });
    });
    return () => ctx.revert();
  }, []);

  const marqueeItems = [...dict.marquee.items, ...dict.marquee.items];

  const parseStat = (str: string) => {
    const num = parseInt(str, 10);
    const suffix = str.replace(/[0-9]/g, "");
    return { value: isNaN(num) ? 0 : num, suffix };
  };

  const s1 = parseStat(dict.hero.stat_1_value);
  const s2 = parseStat(dict.hero.stat_2_value);
  const s3 = parseStat(dict.hero.stat_3_value);

  const stats = [
    { value: s1.value, suffix: s1.suffix, label: dict.hero.stat_1_label },
    { value: s2.value, suffix: s2.suffix, label: dict.hero.stat_2_label },
    { value: s3.value, suffix: s3.suffix, label: dict.hero.stat_3_label },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Layered background */}
      <div ref={bgRef} className="pointer-events-none absolute inset-0">
        {/* Riyadh Skyline (KAFD) Background Image with luminosity blend */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.14] mix-blend-luminosity filter brightness-[0.6] contrast-[1.15]"
          style={{
            backgroundImage: "url('/images/img1.jpg')",
          }}
        />
        {/* Smooth gradient overlays to merge image with site background */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
        <div className="absolute inset-0 bg-radial-glow" />
        {/* Animated orbs */}
        <motion.div
          className="absolute -top-20 left-1/4 h-[600px] w-[600px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, #7C5CFC 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.38, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 top-40 h-[500px] w-[500px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.15, 0.28, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Main hero content */}
      <Container className="relative flex flex-1 flex-col items-center justify-center text-center pt-36 pb-16 md:pt-44">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-violet/30 bg-brand-violet/10 px-4 py-1.5 text-sm font-medium text-brand-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet shadow-glow-sm animate-pulse-glow" />
            {dict.hero.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 overflow-hidden">
          {[dict.hero.title_l1, dict.hero.title_l2, dict.hero.title_l3].map((line, i) => (
            <div key={i} className="overflow-hidden py-1 rtl:py-2">
              <motion.h1
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.15 + i * STAGGER, ease: [0.22, 1, 0.36, 1] }}
                className={`font-jakarta text-5xl font-extrabold leading-[1.15] rtl:leading-[1.3] tracking-tight sm:text-6xl md:text-7xl xl:text-[6rem] ${
                  i === 2 ? "text-gradient" : "text-ink"
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl"
        >
          {dict.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-wrap items-center justify-center gap-4"
        >
          <AnimatedButton href="#portfolio" className="!px-8 !py-4 !text-base">
            {dict.hero.cta_primary} <FiArrowRight size={16} />
          </AnimatedButton>
          <AnimatedButton href="#contact" variant="ghost" className="!px-8 !py-4 !text-base">
            {dict.hero.cta_secondary}
          </AnimatedButton>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.82, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-10 border-t border-white/[0.08] pt-10 w-full"
        >
          {stats.map((s) => (
            <Statistic key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </motion.div>
      </Container>

      {/* Marquee strip */}
      <div className="relative border-y border-white/[0.06] bg-white/[0.012] py-5">
        <div
          className="flex w-max gap-12 animate-marquee"
          style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
        >
          {marqueeItems.map((item, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap font-jakarta text-xl font-semibold uppercase tracking-widest text-ink-faint">
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-brand-violet/60 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
