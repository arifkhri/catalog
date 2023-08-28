import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {

  const { pathname: nextPathname } = request.nextUrl;

  const destinationUrl = (url: string) => new URL(url, request.url)

  if(nextPathname === '/') {
    return NextResponse.redirect(destinationUrl('/products'));
  }

  return NextResponse.next();
}
