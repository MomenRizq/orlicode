"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Statistic from "@/components/ui/Statistic";
import { stats } from "@/data/stats";
import type { Dictionary } from "@/i18n/getDictionary";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute end-0 top-0 h-[500px] w-[500px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #7C5CFC, transparent 70%)" }} />

      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 text-sm font-medium text-brand-glow"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-violet shadow-glow-sm" />
              {dict.about.eyebrow}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-jakarta text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl"
            >
              {dict.about.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg leading-relaxed text-ink-muted"
            >
              {dict.about.body}
            </motion.p>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="flex flex-wrap gap-3 mt-2"
            >
              {["ISO 27001 Aligned", "NDA on Day One", "Full IP Transfer", "Agile Delivery"].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-ink-muted">
                  <span className="h-1 w-1 rounded-full bg-brand-violet/60" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: stats grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/[0.07]"
          >
            {stats.map((s, i) => (
              <div
                key={s.key}
                className="flex flex-col items-center justify-center gap-2 bg-white/[0.025] p-8 text-center"
              >
                <Statistic
                  value={s.value}
                  suffix={s.suffix}
                  label={dict.about[s.key as keyof typeof dict.about] as string}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
