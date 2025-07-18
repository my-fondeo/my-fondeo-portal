import { authApi } from "@core/auth/api/auth";
import { type AuthResponse } from "./login";

export interface RegisterData {
  email: string;
  password: string;
  name: string;
}

export const authRegister = async (body: RegisterData) => {
  try {
    const { data } = await authApi.post<AuthResponse>('/register', body);
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