import { BASE_URL } from '@/constants/api/baseURL';
import axios from 'axios';

export const instance = axios.create({
  baseURL: BASE_URL,
});

export const setJWTtoRequests = (JWT: string) => {
  instance.defaults.headers.Authorization = `Bearer ${JWT}`;
};
