"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/getDictionary";
import type { ProcessStep } from "@/types";

const stepColors = ["#00D4FF", "#7C5CFC", "#10B981", "#F59E0B", "#E040FB", "#F43F5E"];

export default function Process({ dict }: { dict: Dictionary }) {
  const steps = dict.process.steps as ProcessStep[];
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.3"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-sm font-medium text-brand-glow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
            {dict.process.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl font-jakarta text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl"
          >
            {dict.process.title}
          </motion.h2>
        </div>

        <div ref={ref} className="relative flex flex-col">
          {/* Track line */}
          <div className="absolute start-[19px] top-0 bottom-0 w-px bg-white/[0.06] sm:start-[23px]" />
          <motion.div style={{ height: lineH }} className="absolute start-[19px] top-0 w-px bg-brand-gradient sm:start-[23px]" />

          {steps.map((step, i) => {
            const color = stepColors[i % stepColors.length];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-8 py-9 ps-14 sm:ps-18 first:pt-0 last:pb-0"
              >
                {/* Step indicator */}
                <span
                  className="absolute start-0 top-9 flex h-10 w-10 items-center justify-center rounded-full border font-jakarta text-xs font-bold text-white"
                  style={{ borderColor: `${color}50`, background: `${color}18`, color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-jakarta text-xl font-bold text-ink md:text-2xl">
                      {step.title}
                    </h3>
                    <div className="h-px flex-1 bg-white/[0.06] hidden sm:block" />
                  </div>
                  <p className="max-w-lg text-base leading-relaxed text-ink-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
