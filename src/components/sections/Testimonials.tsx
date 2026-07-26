"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Container from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";
import type { Dictionary } from "@/i18n/getDictionary";
import { cn } from "@/lib/utils";

const QUOTE_MARK = "\u201C";
const QUOTE_MARK_CLOSE = "\u201D";

export default function Testimonials({ dict }: { dict: Dictionary }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  }

  const current = testimonials[index];

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute start-0 top-1/2 -translate-y-1/2 h-[600px] w-[400px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #7C5CFC, transparent 70%)" }} />

      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-sm font-medium text-brand-glow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
              {dict.testimonials.eyebrow}
            </div>
            <h2 className="font-jakarta text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
              {dict.testimonials.title}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {[-1, 1].map((dir) => (
              <button
                key={dir}
                onClick={() => go(index + dir)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-all duration-200 hover:border-brand-violet/40 hover:text-ink hover:bg-white/5"
                aria-label={dir === -1 ? "Previous" : "Next"}
              >
                {dir === -1 ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-10 md:p-14 min-h-[300px]">
          {/* Large quote mark */}
          <span className="pointer-events-none absolute -top-4 start-8 select-none font-jakarta text-[10rem] font-black leading-none text-brand-violet/10">
            {QUOTE_MARK}
          </span>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col gap-8"
            >
              <p className="max-w-3xl font-jakarta text-xl font-semibold leading-relaxed text-ink md:text-2xl lg:text-3xl">
                {QUOTE_MARK}{current.quote}{QUOTE_MARK_CLOSE}
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-brand-violet/30">
                  <Image src={current.avatar} alt={current.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-jakarta text-base font-bold text-ink">{current.name}</div>
                  <div className="text-sm text-ink-muted">{current.role}</div>
                  <div className="text-xs text-brand-glow">{current.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => go(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={cn("rounded-full transition-all duration-400",
                i === index ? "h-2 w-10 bg-brand-violet" : "h-2 w-2 bg-white/15 hover:bg-white/30"
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
