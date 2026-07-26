"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: Locale) {
    if (next === locale) return;
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${next}${rest ? `/${rest}` : ""}`);
  }

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          className={cn(
            "rounded-full px-3 py-1.5 font-medium transition-colors duration-300",
            l === locale
              ? "bg-brand-gradient text-white"
              : "text-ink-muted hover:text-ink"
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
