import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const sessionID = request.cookies.get('sessionid')?.value

  if (!sessionID) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()

}

export const config = {
  matcher: [
    '/signup/:path*',
    '/dashboard/:path*',
    '/',
  ],
};