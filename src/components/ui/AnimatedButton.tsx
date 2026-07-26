"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  accentColor?: string;
}

export default function AnimatedButton({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  accentColor,
}: AnimatedButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide whitespace-nowrap overflow-hidden transition-colors duration-300",
    variant === "primary" &&
      "bg-brand-gradient text-white shadow-glow hover:shadow-[0_0_80px_-8px_rgba(124,92,252,0.75)]",
    variant === "ghost" &&
      "border border-white/15 text-ink hover:border-white/30 hover:bg-white/5",
    variant === "outline" &&
      "border text-white hover:bg-white/5",
    className
  );

  const motionProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    animate: { x: pos.x, y: pos.y },
    transition: { type: "spring" as const, stiffness: 200, damping: 15, mass: 0.4 },
    style: accentColor && variant === "outline" ? { borderColor: `${accentColor}60` } : {},
  };

  const content = (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-white/10 skew-x-12 transition-transform duration-500 group-hover:translate-x-full" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cn(classes, "group")}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      className={cn(classes, "group")}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
