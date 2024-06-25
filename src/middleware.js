import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = cookies(request).get("next-auth.session-token");
  const pathName = request.nextUrl.pathname;
  if (!token) {
    const url = new URL(`/signin?redirect=${pathName}`, request.url);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/my-bookings/:path*", "/checkout/:path*"],
};
