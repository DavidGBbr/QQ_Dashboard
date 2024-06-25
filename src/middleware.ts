import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("@beaba.token")?.value;

  const routes = {
    signInURL: new URL("/", req.url),
    usersURL: new URL("/users", req.url),
    profilesURL: new URL("/profiles", req.url),
    modulesURL: new URL("/modules", req.url),
    transactionsURL: new URL("/transactions", req.url),
    functionsURL: new URL("/functions", req.url),
  };

  if (token) {
    if (req.nextUrl.pathname.endsWith("/")) {
      return NextResponse.redirect(routes.usersURL);
    }
  } else {
    if (
      req.nextUrl.pathname.startsWith("/users") ||
      req.nextUrl.pathname.startsWith("/profiles") ||
      req.nextUrl.pathname.startsWith("/modules") ||
      req.nextUrl.pathname.startsWith("/transactions") ||
      req.nextUrl.pathname.startsWith("/functions")
    ) {
      return NextResponse.redirect(routes.signInURL);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/users",
    "/users/:path*",
    "/profiles",
    "/profiles/:path*",
    "/modules",
    "/modules/:path*",
    "/transactions",
    "/transactions/:path*",
    "/functions",
    "/functions/:path*",
    "/",
  ],
};
