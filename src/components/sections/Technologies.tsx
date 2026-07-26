"use client";

import Container from "@/components/ui/Container";
import { technologies } from "@/data/technologies";
import type { Dictionary } from "@/i18n/getDictionary";
import { motion } from "framer-motion";

export default function Technologies({ dict }: { dict: Dictionary }) {
  const row1 = [...technologies, ...technologies];
  const row2 = [...technologies.slice().reverse(), ...technologies.slice().reverse()];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Container className="mb-14">
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-sm font-medium text-brand-glow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet" />
            {dict.technologies.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl font-jakarta text-3xl font-extrabold leading-tight text-ink sm:text-4xl"
          >
            {dict.technologies.title}
          </motion.h2>
        </div>
      </Container>

      <div className="flex flex-col gap-4">
        {[row1, row2].map((row, ri) => (
          <div
            key={ri}
            className={`flex w-max gap-4 ${ri === 0 ? "animate-marquee" : "animate-marquee-reverse"}`}
            style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
          >
            {row.map((tech, i) => (
              <span
                key={`${ri}-${i}`}
                className="flex items-center gap-4 whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-2.5 font-jakarta text-sm font-medium text-ink-muted transition-colors hover:border-brand-violet/30 hover:text-ink cursor-default"
              >
                <span className="h-1 w-1 rounded-full bg-brand-violet/50 flex-shrink-0" />
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
