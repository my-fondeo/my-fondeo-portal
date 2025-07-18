import { jwtDecode } from 'jwt-decode';

export interface JwtPayload {
  uid: string;
  email: string;
  name?: string;
  exp?: number;
  iat?: number;
}

export const decodeToken = (token: string): JwtPayload => {
  try {
    return jwtDecode<JwtPayload>(token);
  } catch (e) {
    console.error('Error al decodificar el token:', e);
    throw new Error('Token inválido');
  }
};
