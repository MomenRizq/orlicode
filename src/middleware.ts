import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./i18n/config";

function getLocaleFromPath(pathname: string) {
  const segment = pathname.split("/")[1];
  return locales.find((l) => l === segment);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = getLocaleFromPath(pathname);
  if (hasLocale) return NextResponse.next();

  // Skip static assets / api routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const preferred =
    request.headers.get("accept-language")?.toLowerCase().includes("ar")
      ? "ar"
      : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
