import { create } from 'zustand';
import type { User } from "../interfaces/user";
import { authLogin, authCheckStatus } from '../actions/login';
import { authRegister } from '@core/auth/actions/register';

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking'

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  login: (email: string, password: string) => Promise<boolean>;
  register: (data: any) => Promise<boolean>;
  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;
  changeStatus: (token?: string, user?: User) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()(

  (set, get) => ({
    status: "checking",
    user: undefined,
    token: undefined,

    changeStatus: async (token?: string, user?: User) => {
      if (!token || !user) {
        get().logout();
        return false;
      }
      set({ user: user, token: token, status: 'authenticated' })
      return true;
    },

    login: async (email, password) => {
      const resp = await authLogin(email, password);
      return await get().changeStatus(resp?.token, resp?.user);
    },
    checkStatus: async () => {
      const resp = await authCheckStatus();
      await get().changeStatus(resp?.token, resp?.user);
    },
    logout: async () => {
      set({ user: undefined, token: undefined, status: 'unauthenticated' })
    },
    register: async (data) => {
      const resp = await authRegister(data);
      if (!resp?.user) {
        return false
      }
      return await get().changeStatus(resp?.token, resp?.user);
    },
  })
);