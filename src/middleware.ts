import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('refresh_token')?.value

  if (!refreshToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
export const config = {
  matcher: [
    '/signup/:path*',
    '/',
  ],
};