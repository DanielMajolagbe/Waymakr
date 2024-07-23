import { authMiddleware } from "@clerk/nextjs";


export default authMiddleware({
    publicRoutes: req => !req.url.includes('/dashboard/manage')
}); 
export const config = {
  matcher: [
    '/((?!.+\\.[\\w]+$|_next).*)',  // Matches paths that do not end with a file extension or start with _next
    '/',                             // Matches the root path
    '/(api|trpc)(.*)'                // Matches paths starting with /api or /trpc
  ],
};
 
