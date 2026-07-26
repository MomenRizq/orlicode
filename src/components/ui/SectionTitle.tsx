"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "start",
  className,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3 text-sm font-medium tracking-wide text-brand-glow"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-violet shadow-glow" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="max-w-2xl font-display text-3xl font-medium leading-[1.15] text-ink sm:text-4xl md:text-[2.75rem]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="max-w-xl text-base text-ink-muted"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
