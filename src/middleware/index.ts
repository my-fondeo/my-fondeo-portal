import { decodeToken } from "@util/jwt";
import type { APIContext, MiddlewareNext } from "astro";
import { defineMiddleware } from "astro:middleware";

const privateRoutes = ['/app'];

export const onRequest = defineMiddleware((context, next) => {
  const pathname = context.url.pathname;

  // En el landing no se aplica.
  if (pathname === '/') return next();

  const token = context.cookies.get('token');

  // En el auth se verifica si hay token y lo envía a app
  // En app se valida el token y si algo no está bien, se elimina y vuelve al auth
  
  console.log({pathname, token})
  if (pathname === '/auth' && token) {
    return Response.redirect(new URL('/app', context.url), 302);
  }

  if (privateRoutes.some((route) => pathname.startsWith(route))) {
    return checkLocalAuth(next, context, token?.value);
  }
  
  return next();
})

const checkLocalAuth = (next: MiddlewareNext, context: APIContext, token?: string) => {
  try {
    if (token) {
      const decodedPayload = decodeToken(token);
      const isExpired = decodedPayload.exp !== undefined && decodedPayload.exp * 1000 < Date.now();

      if (isExpired) {
        context.cookies.delete('token')
        return Response.redirect(new URL('/auth', context.url), 302);
      }

      return next();
    }


    return Response.redirect(new URL('/auth', context.url), 302);
  }
  catch (e: any) {
    console.log(e)
  }
}