import axios from 'axios'

import { env } from '@/shared/env'

export const client = axios.create({
  baseURL: env.VITE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

client.interceptors.request.use((config) => {
  config.params = {
    apikey: env.VITE_OMDBAPI_API_KEY,
    ...(config.params ?? {}),
  }

  return config
})
