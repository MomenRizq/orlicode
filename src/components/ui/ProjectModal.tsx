"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink } from "react-icons/fi";
import { SiGoogleplay, SiAppstore } from "react-icons/si";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  accentColor: string;
  onClose: () => void;
  labels: {
    visitWebsite: string;
    googlePlay: string;
    appStore: string;
    techStack: string;
    year: string;
    startProject: string;
    close: string;
    featured: string;
  };
}

export default function ProjectModal({
  project,
  accentColor,
  onClose,
  labels,
}: ProjectModalProps) {
  // Close on Escape key
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    if (project) document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey, project]);

  const hasLinks =
    project?.links?.website ||
    project?.links?.playStore ||
    project?.links?.appStore;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            key="modal"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0F] shadow-2xl"
              style={{ maxHeight: "90vh" }}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent line */}
              <div
                className="h-[3px] w-full flex-shrink-0"
                style={{ background: accentColor }}
              />

              {/* Scrollable content */}
              <div className="overflow-y-auto">
                {/* Hero image */}
                <div className="relative aspect-[16/7] w-full flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 896px) 100vw, 896px"
                    className="object-cover"
                    priority
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, #0A0A0F 0%, ${accentColor}20 50%, transparent 100%)`,
                    }}
                  />

                  {/* Featured badge */}
                  {project.featured && (
                    <span
                      className="absolute start-5 top-5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg"
                      style={{ background: accentColor }}
                    >
                      {labels.featured}
                    </span>
                  )}

                  {/* Tags overlay */}
                  <div className="absolute bottom-5 start-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-sm"
                        style={{
                          borderColor: `${accentColor}50`,
                          color: accentColor,
                          background: `${accentColor}15`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col gap-8 p-6 md:p-10">
                  {/* Title + year */}
                  <div className="flex items-start justify-between gap-4">
                    <h2
                      className="font-jakarta text-3xl font-extrabold leading-tight text-white sm:text-4xl"
                      style={{ textShadow: `0 0 60px ${accentColor}30` }}
                    >
                      {project.title}
                    </h2>
                    <span
                      className="mt-1 flex-shrink-0 rounded-full border px-3 py-1 text-sm font-semibold"
                      style={{
                        borderColor: `${accentColor}40`,
                        color: accentColor,
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-white/70 md:text-lg">
                    {project.longDescription ?? project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-col gap-3">
                    <span
                      className="text-[11px] font-bold uppercase tracking-[0.18em] opacity-50"
                      style={{ color: accentColor }}
                    >
                      {labels.techStack}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border px-3 py-1.5 text-sm font-medium text-white/80"
                          style={{ borderColor: `${accentColor}25` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project links */}
                  {hasLinks && (
                    <div className="flex flex-wrap gap-3">
                      {project.links?.website && (
                        <a
                          href={project.links.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2.5 rounded-xl border px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                          style={{
                            borderColor: `${accentColor}50`,
                            background: `${accentColor}10`,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              `${accentColor}25`;
                            (e.currentTarget as HTMLElement).style.borderColor =
                              accentColor;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              `${accentColor}10`;
                            (e.currentTarget as HTMLElement).style.borderColor =
                              `${accentColor}50`;
                          }}
                        >
                          <FiExternalLink size={16} style={{ color: accentColor }} />
                          {labels.visitWebsite}
                        </a>
                      )}

                      {project.links?.playStore && (
                        <a
                          href={project.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2.5 rounded-xl border px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                          style={{
                            borderColor: `${accentColor}50`,
                            background: `${accentColor}10`,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              `${accentColor}25`;
                            (e.currentTarget as HTMLElement).style.borderColor =
                              accentColor;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              `${accentColor}10`;
                            (e.currentTarget as HTMLElement).style.borderColor =
                              `${accentColor}50`;
                          }}
                        >
                          <SiGoogleplay size={16} style={{ color: accentColor }} />
                          {labels.googlePlay}
                        </a>
                      )}

                      {project.links?.appStore && (
                        <a
                          href={project.links.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2.5 rounded-xl border px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                          style={{
                            borderColor: `${accentColor}50`,
                            background: `${accentColor}10`,
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              `${accentColor}25`;
                            (e.currentTarget as HTMLElement).style.borderColor =
                              accentColor;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background =
                              `${accentColor}10`;
                            (e.currentTarget as HTMLElement).style.borderColor =
                              `${accentColor}50`;
                          }}
                        >
                          <SiAppstore size={16} style={{ color: accentColor }} />
                          {labels.appStore}
                        </a>
                      )}
                    </div>
                  )}

                  {/* CTA */}
                  <div
                    className="flex items-center justify-between rounded-2xl border p-5 md:p-6"
                    style={{
                      borderColor: `${accentColor}20`,
                      background: `${accentColor}08`,
                    }}
                  >
                    <p className="text-sm text-white/60 md:text-base">
                      {labels.startProject}
                    </p>
                    <a
                      href="#contact"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-black transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
                      style={{ background: accentColor }}
                    >
                      {labels.startProject}
                    </a>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                aria-label={labels.close}
                className="absolute end-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:text-white"
              >
                <FiX size={18} />
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
