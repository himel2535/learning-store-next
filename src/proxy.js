import { NextResponse } from "next/server";

export function proxy(req) {
  // cookie detect
  const token = req.cookies.get("token")?.value;

  if (!token) {
    // original path capture
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/addBook/:path*","/manageBooks/:path*",]
};
