"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/ui/Container";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ProjectModal from "@/components/ui/ProjectModal";
import { projectsByCategory } from "@/data/projects";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import type { PortfolioCategory, Project } from "@/types";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

// ── Modal labels builder ──────────────────────────────────────────────────
function buildModalLabels(dict: Dictionary) {
  return {
    visitWebsite: dict.portfolio.modal_visit_website,
    googlePlay: dict.portfolio.modal_google_play,
    appStore: dict.portfolio.modal_app_store,
    techStack: dict.portfolio.modal_tech_stack,
    year: dict.portfolio.modal_year,
    startProject: dict.portfolio.modal_start_project,
    close: dict.portfolio.modal_close,
    featured: dict.portfolio.modal_featured,
  };
}

// ── Single project mini-card ──────────────────────────────────────────────
function ProjectMiniCard({
  project,
  accent,
  viewLabel,
  index,
  onView,
}: {
  project: ReturnType<typeof projectsByCategory>[0];
  accent: string;
  viewLabel: string;
  index: number;
  onView: (project: Project) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border bg-black/20 backdrop-blur-sm transition-colors duration-300"
      style={{ borderColor: `${accent}20` }}
    >
      {/* Project image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${accent}40, transparent 60%)`,
          }}
        />
        {project.featured && (
          <span
            className="absolute end-3 top-3 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
            style={{ background: accent }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider"
              style={{ borderColor: `${accent}35`, color: accent }}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-jakarta text-xl font-bold text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-white/60 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 text-[11px] text-white/35">
          {project.tech.map((t, i) => (
            <span key={t}>{t}{i < project.tech.length - 1 ? " · " : ""}</span>
          ))}
        </div>
        <button
          onClick={() => onView(project)}
          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer"
          style={{ color: accent }}
        >
          {viewLabel}
          <FiArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </motion.article>
  );
}

// ── Single category panel ─────────────────────────────────────────────────
function CategoryPanel({
  cat,
  viewLabel,
  panelIndex,
  total,
  onView,
  locale,
}: {
  cat: PortfolioCategory;
  viewLabel: string;
  panelIndex: number;
  total: number;
  onView: (project: Project) => void;
  locale: Locale;
}) {
  const projects = projectsByCategory(cat.id, locale);

  return (
    <div
      className="portfolio-panel flex min-h-screen flex-col"
      data-panel-index={panelIndex}
      style={{ background: cat.bg, zIndex: panelIndex + 1 }}
    >
      {/* Top accent line */}
      <div className="h-[3px] w-full" style={{ background: cat.accent }} />

      <Container className="flex flex-1 flex-col justify-center py-24 gap-14">
        {/* Section header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span
                className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] opacity-60"
                style={{ color: cat.accent }}
              >
                {cat.number}
              </span>
              <div className="h-px w-12 opacity-30" style={{ background: cat.accent }} />
              <span
                className="font-jakarta text-[11px] font-bold uppercase tracking-[0.2em] opacity-60"
                style={{ color: cat.accent }}
              >
                {panelIndex + 1} / {total}
              </span>
            </div>

            <h2
              className="font-jakarta text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ textShadow: `0 0 80px ${cat.accent}40` }}
            >
              {cat.title}
            </h2>
            <p className="max-w-lg text-lg text-white/55">{cat.description}</p>
          </div>

          <AnimatedButton
            href="#contact"
            variant="outline"
            accentColor={cat.accent}
            className="self-start md:self-end"
          >
            Start a project
          </AnimatedButton>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectMiniCard
              key={project.id}
              project={project}
              accent={cat.accent}
              viewLabel={viewLabel}
              index={i}
              onView={onView}
            />
          ))}
        </div>

        {/* Large decorative number */}
        <div
          className="pointer-events-none absolute end-0 bottom-0 select-none overflow-hidden font-jakarta text-[20vw] font-black leading-none opacity-[0.03]"
          style={{ color: cat.accent }}
        >
          {cat.number}
        </div>
      </Container>
    </div>
  );
}

// ── Main Portfolio Section ────────────────────────────────────────────────
export default function Portfolio({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const categories = dict.portfolio.categories as PortfolioCategory[];
  const viewLabel = dict.portfolio.view_project;

  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [accentColor, setAccentColor] = useState("#7C5CFC");
  const modalLabels = buildModalLabels(dict);

  // Find accent for the selected project
  const handleView = (project: Project) => {
    const cat = categories.find((c) => c.id === project.category);
    setAccentColor(cat?.accent ?? "#7C5CFC");
    setActiveProject(project);
  };

  useEffect(() => {
    if (!wrapperRef.current) return;

    const panels = wrapperRef.current.querySelectorAll<HTMLElement>(".portfolio-panel");
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    // Skip the scrub-linked slide-up transform on touch devices — the
    // mobile browser's address bar resizing the viewport mid-scroll
    // desyncs the animation from actual scroll position, leaving a large
    // dead scroll zone between panels. Panels just render stacked normally.
    if (prefersReduced || isTouch) return;

    const ctx = gsap.context(() => {
      panels.forEach((panel, i) => {
        if (i === 0) return; // first panel is always flat

        gsap.fromTo(
          panel,
          {
            yPercent: prefersReduced ? 5 : 100,
            rotationX: prefersReduced ? 0 : 8,
            scale: prefersReduced ? 1 : 0.96,
            transformOrigin: "top center",
          },
          {
            yPercent: 0,
            rotationX: 0,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "top top",
              scrub: 0.8,
            },
          }
        );

        // Previous panel: scale down & push up slightly as next slides in
        if (i > 0) {
          gsap.to(panels[i - 1], {
            scale: prefersReduced ? 1 : 0.94,
            yPercent: prefersReduced ? 0 : -4,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "top top",
              scrub: 0.8,
            },
          });
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" className="relative">
      {/* Intro block above stacked panels */}
      <div className="relative z-10 bg-bg py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 flex items-center gap-3 text-sm font-medium text-brand-glow"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-violet shadow-glow-sm" />
            {dict.portfolio.eyebrow}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 font-jakarta text-4xl font-extrabold leading-tight text-ink sm:text-5xl md:text-6xl"
          >
            {dict.portfolio.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-lg text-ink-muted"
          >
            {dict.portfolio.intro}
          </motion.p>

          {/* Category index */}
          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#cat-${cat.id}`}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:border-white/20 hover:text-ink"
              >
                <span className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: cat.accent }} />
                {cat.title}
              </a>
            ))}
          </div>
        </Container>
      </div>

      {/* Stacked panel showcase */}
      <div
        ref={wrapperRef}
        className="relative"
        style={{ perspective: "1200px", perspectiveOrigin: "50% 0%" }}
      >
        {categories.map((cat, i) => (
          <div key={cat.id} id={`cat-${cat.id}`} className="relative">
            <CategoryPanel
              cat={cat}
              viewLabel={viewLabel}
              panelIndex={i}
              total={categories.length}
              onView={handleView}
              locale={locale}
            />
          </div>
        ))}
      </div>

      {/* Project detail modal */}
      <ProjectModal
        project={activeProject}
        accentColor={accentColor}
        onClose={() => setActiveProject(null)}
        labels={modalLabels}
      />
    </section>
  );
}
