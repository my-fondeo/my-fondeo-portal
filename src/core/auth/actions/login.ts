
import { AxiosError } from "axios";
import { authApi } from "../api/auth";
import { type User } from "../interfaces/user";


// TODO: Implementar Catching

export interface AuthResponse {
  user: User;
  token: string;
}


export const authCheckStatus = async () => {
  try {
    const token = authApi.defaults.headers.common['Authorization'];
    if (!token) {
      return null;
    }
    const { data } = await authApi.get<AuthResponse>('/check-status')
    return data;
  }
  catch (e: any) {
    console.error("Check status error: ", e)
    return null;
  }
}

export const authLogin = async (email: string, password: string): Promise<AuthResponse> => {
  email = email.toLowerCase();
  try {
    const { data } = await authApi.post<AuthResponse>('/login', { email, password });
    return data;
  }
  catch (e: any) {
    if (e.isAxiosError) {
      const error = {
        status: e.response?.status || 500,
        message: e.response?.data?.message || 'Error de red',
        data: e.response?.data,
      }
      throw error;
    }
    throw {
      status: 500,
      message: 'Error desconocido',
      data: e
    };
  }
}

export const checkUserExistence = async ({ email, phone }: { email: string, phone: string }) => {
  try {
    const { data } = await authApi.get<boolean>(`/user-existence-contact/${email}/${phone}`);
    return data;
  }
  catch (e: any) {
    return null;
  }
}
