import { NextResponse, NextRequest } from "next/server";
import { ROUTES } from "./data/routes";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const refreshToken = request.cookies.get("refresh_token")?.value;
  const verifiedAt = request.cookies.get("verified_at")?.value;

  const isPrivate = ROUTES.private.some((route) => pathname.startsWith(route));
  const isGuest = ROUTES.guest.some((route) => pathname.startsWith(route));

  // Jika user sudah login & verified → larang akses guest routes
  if (isGuest && refreshToken && verifiedAt) {
    return NextResponse.redirect(new URL(ROUTES.dashboard, request.url));
  }

  // Jika user sudah login tapi belum verifikasi email
  if ((isPrivate || isGuest) && refreshToken && !verifiedAt) {
    return NextResponse.redirect(new URL(ROUTES.verifyEmail, request.url));
  }

  // Jika mengakses private route tanpa login
  if (isPrivate && !refreshToken) {
    return NextResponse.redirect(new URL(ROUTES.login, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/about/:path*",
    "/admin/:path*",
    "/auth/:path*",
  ],
};
