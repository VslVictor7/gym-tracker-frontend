import { NextResponse } from 'next/server';

export function middleware(request) {

  const user = ""

  
  if (!user){
    return NextResponse.redirect(
      new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/signup/:path*',
  ],
};