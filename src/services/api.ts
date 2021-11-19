

import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_PORT_PROD || 'http://localhost:4000',
});
