// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
 
// export default NextAuth(authConfig).auth;

export async function middleware(request: NextRequest) {  return await updateSession(request)}
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};