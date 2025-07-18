
import axios from 'axios';

const STAGE = import.meta.env.PUBLIC_STAGE || 'dev';
const API_URL = import.meta.env.PUBLIC_API_URL

const authApi = axios.create({
  baseURL: `${API_URL}/auth`,
})

authApi.interceptors.request.use(async (config) => {
  // TODO token
  return config;
})

export { authApi };
