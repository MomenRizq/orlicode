import type { Metadata } from "next";
import "@/app/globals.css";
import { locales, localeDirections, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "OrliCode — Premium Software Solutions",
  description:
    "OrliCode builds premium mobile apps, web platforms, ERP systems, SaaS products and AI-powered solutions for ambitious businesses.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = (locales as readonly string[]).includes(rawLocale)
    ? (rawLocale as Locale)
    : "en";
  const dict = await getDictionary(locale);

  return (
    <html lang={locale} dir={localeDirections[locale]}>
      <head>
        {/* Cairo (Arabic + Latin) and Plus Jakarta Sans — loaded via Google Fonts link tag
            so the build works in network-restricted environments (e.g. sandboxes).
            On Vercel / production, swap these for next/font/google for zero layout shift. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <WhatsAppFloatingButton label={dict.contact.whatsapp_label} />
      </body>
    </html>
  );
}
