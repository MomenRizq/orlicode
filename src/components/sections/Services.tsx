"use client";

import { motion } from "framer-motion";
import { FiSmartphone, FiGlobe, FiBarChart2, FiDatabase, FiCloud, FiCpu, FiLayout, FiServer, FiLink, FiCode } from "react-icons/fi";
import Container from "@/components/ui/Container";
import type { Dictionary } from "@/i18n/getDictionary";
import type { ServiceItem } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  mobile: <FiSmartphone size={22} />,
  web: <FiGlobe size={22} />,
  dashboard: <FiBarChart2 size={22} />,
  erp: <FiDatabase size={22} />,
  saas: <FiCloud size={22} />,
  ai: <FiCpu size={22} />,
  design: <FiLayout size={22} />,
  cloud: <FiServer size={22} />,
  api: <FiLink size={22} />,
  custom: <FiCode size={22} />,
};

const accentColors = [
  "#00D4FF", "#7C5CFC", "#10B981", "#F59E0B",
  "#5B3FE4", "#E040FB", "#B49DFF", "#F43F5E", "#00D4FF", "#7C5CFC",
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: (index % 5) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
      className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 transition-colors duration-300 hover:border-white/15"
    >
      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ background: accent }}
      />

      {/* Icon */}
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl border text-white transition-colors duration-300"
        style={{ borderColor: `${accent}30`, background: `${accent}12`, color: accent }}
      >
        {iconMap[service.icon] ?? <FiCode size={22} />}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="font-jakarta text-lg font-bold text-ink">{service.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{service.description}</p>
      </div>

      {/* Subtle index */}
      <span className="absolute end-6 bottom-5 font-jakarta text-5xl font-black text-white/[0.03] leading-none select-none">
        {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

export default function Services({ dict }: { dict: Dictionary }) {
  const items = dict.services.items as ServiceItem[];

  return (
    <section id="services" className="relative py-28 md:py-36">
      <Container className="flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 text-sm font-medium text-brand-glow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet shadow-glow-sm" />
            {dict.services.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl font-jakarta text-3xl font-extrabold leading-tight text-ink sm:text-4xl md:text-5xl"
          >
            {dict.services.title}
          </motion.h2>
        </div>

        {/* 2-col grid (5 rows × 2) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {items.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
