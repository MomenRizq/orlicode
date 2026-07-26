"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { ServiceItem } from "@/types";

export default function ServiceCard({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 transition-colors duration-300 hover:border-brand-violet/30"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-violet/0 blur-3xl transition-all duration-500 group-hover:bg-brand-violet/20"
      />
      <div className="flex items-start justify-between">
        <span className="font-display text-3xl text-brand-glow/60">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:border-brand-violet/40 group-hover:text-ink">
          <FiArrowUpRight size={16} />
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="font-display text-xl font-medium text-ink">{service.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>
      </div>
    </motion.div>
  );
}
