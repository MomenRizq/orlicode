import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from "react-icons/fi";
import Container from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/getDictionary";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();
  const services = [
    "Mobile App Development", "Web Development", "ERP Systems",
    "AI Solutions", "SaaS Platforms", "UI/UX Design",
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-bg-elevated">
      <Container className="pt-20 pb-0">
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-[1.6fr_1fr_1.2fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <img 
                src="/logo.png" 
                alt="OrliCode Logo" 
                className="h-9 w-9 rounded-xl object-contain" 
              />
              <span className="font-jakarta text-lg font-bold text-ink">Orli<span className="text-brand-violet">Code</span></span>
            </div>
            <p className="max-w-[260px] text-sm leading-relaxed text-ink-muted">{dict.footer.tagline}</p>
            <div className="flex items-center gap-2.5">
              {[FiGithub, FiLinkedin, FiTwitter, FiInstagram].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-faint transition-all duration-200 hover:border-brand-violet/40 hover:text-ink">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-faint">{dict.footer.nav_title}</span>
            {[
              { href: "#about", label: dict.nav.about },
              { href: "#services", label: dict.nav.services },
              { href: "#portfolio", label: dict.nav.work },
              { href: "#process", label: dict.nav.process },
              { href: "#contact", label: dict.nav.contact },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-ink-muted transition-colors hover:text-ink">{l.label}</a>
            ))}
          </div>

          {/* Services */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-faint">{dict.footer.services_title}</span>
            {services.map((s) => (
              <span key={s} className="text-sm text-ink-muted">{s}</span>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-ink-faint">{dict.footer.contact_title}</span>
            <a href="mailto:hello@orlicode.com" className="text-sm text-ink-muted transition-colors hover:text-ink">hello@orlicode.com</a>
            <a href="tel:+18000000000" className="text-sm text-ink-muted transition-colors hover:text-ink">+1 (800) ORL-CODE</a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] py-8 text-xs text-ink-faint md:flex-row">
          <span>&copy; {year} OrliCode. {dict.footer.rights}</span>
          <div className="flex items-center gap-6">
            <Link href={`/${locale}`} className="hover:text-ink-muted">Privacy Policy</Link>
            <Link href={`/${locale}`} className="hover:text-ink-muted">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
