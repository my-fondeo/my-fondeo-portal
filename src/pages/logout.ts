import type { APIRoute } from "astro";

export const POST: APIRoute = ({ cookies, redirect }) => {
  cookies.delete('token', { path: '/' });
  return redirect('/auth');
}