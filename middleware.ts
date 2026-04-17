import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Soft-close the site during brand migration.
// Set SITE_MODE=coming_soon in Vercel env vars to activate.
// Remove or set to "live" to bring the full site back.

export function middleware(request: NextRequest) {
  const mode = process.env.SITE_MODE;

  if (mode !== "coming_soon") {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Let the coming-soon page itself through, plus static assets, favicon, images, and API routes.
  if (
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.match(/\.(png|jpg|jpeg|svg|ico|webp|gif)$/i)
  ) {
    return NextResponse.next();
  }

  // Rewrite everything else to the coming-soon page (URL stays the same for the visitor)
  return NextResponse.rewrite(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: "/((?!_next/static|_next/image).*)",
};
