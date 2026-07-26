"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import type { Project } from "@/types";

export default function ProjectCard({
  project,
  viewLabel,
}: {
  project: Project;
  viewLabel: string;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.02] transition-colors duration-300 hover:border-brand-violet/30"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent opacity-70" />
        <span className="absolute right-4 top-4 rounded-full bg-bg/70 px-3 py-1 text-xs text-ink-muted backdrop-blur-sm">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-wide text-brand-glow/80"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-xl font-medium text-ink">{project.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs text-ink-faint">
              {t}
              {project.tech.at(-1) !== t && <span className="px-1">·</span>}
            </span>
          ))}
        </div>

        <a
          href="#"
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors duration-200 group-hover:text-brand-glow"
        >
          {viewLabel}
          <FiArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>
      </div>
    </motion.article>
  );
}
