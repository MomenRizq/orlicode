"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import Container from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/getDictionary";
import type { FaqItem } from "@/types";

export default function FAQ({ dict }: { dict: Dictionary }) {
  const items = dict.faq.items as FaqItem[];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-28 md:py-36">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col gap-4 lg:sticky lg:top-24 lg:h-fit">
          <div className="flex items-center gap-3 text-sm font-medium text-brand-glow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
            {dict.faq.eyebrow}
          </div>
          <h2 className="font-jakarta text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl">
            {dict.faq.title}
          </h2>
          <p className="mt-2 text-base text-ink-muted">
            Can't find what you're looking for? <a href="#contact" className="text-brand-glow hover:underline">Get in touch.</a>
          </p>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.06]">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="first:border-t first:border-white/[0.06]">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-start"
                >
                  <span className={`font-jakarta text-base font-semibold leading-snug transition-colors duration-200 md:text-lg ${isOpen ? "text-ink" : "text-ink-muted"}`}>
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, background: isOpen ? "rgba(124,92,252,0.2)" : "rgba(255,255,255,0.04)" }}
                    transition={{ duration: 0.3 }}
                    className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-ink-muted"
                  >
                    <FiPlus size={14} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-base leading-relaxed text-ink-muted">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
