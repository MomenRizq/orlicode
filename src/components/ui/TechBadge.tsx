import { cn } from "@/lib/utils";

export default function TechBadge({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-ink-muted",
        className
      )}
    >
      {label}
    </span>
  );
}
