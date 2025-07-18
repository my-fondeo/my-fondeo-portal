import { authLogin } from "@core/auth/actions/login";
import { authRegister } from "@core/auth/actions/register";
import { useAuthStore } from "@core/auth/store/auth-store";
import { AstroError } from "astro/errors";
import { defineAction } from "astro:actions";
import { z } from 'astro:schema'

export const registerUser = defineAction({
  accept: 'json',
  input: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
    // Todo: remember me
  }),
  handler: async (payload, { cookies, url }) => {
    try {
      const { token, user } = await authRegister(payload);
      cookies.set('token', token, { path: '/' });
      useAuthStore.setState({ user, token });
      return true;
    } catch (err: any) {
      const message = err.message || 'Error desconocido';
      throw new AstroError(message, '');
    }
  }
})

export const loginUser = defineAction({
  accept: 'json',
  input: z.object({
    email: z.string().email(),
    password: z.string().min(6),
  }),
  handler: async ({ email, password }, { cookies, url }) => {
    try {
      const { token, user } = await authLogin(email, password);
      cookies.set('token', token, { path: '/' })
      useAuthStore.setState({ user, token });
      return true;
    }
    catch (e: any) {
      const message = e.message || 'Error desconocido';
      throw new AstroError(message, '');
    }
  }
})