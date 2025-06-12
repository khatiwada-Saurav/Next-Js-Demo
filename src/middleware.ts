import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  console.log(pathname, "pathname");
}

export const config = {
  matcher: ["/((?!api|auth/signin|static|.*\\..*|_next).*)"],
};
