import axios from 'axios';
import getGlobalConfiguration from '../config';

export const apiClient = axios.create({
  responseType: 'json',
  withCredentials: true,
  baseURL: getGlobalConfiguration().apiBaseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get('userId');

  if (!config.headers) config.headers = {};

  config.headers.Authorization = `Bearer userId=${userId}`;

  return config;
});
