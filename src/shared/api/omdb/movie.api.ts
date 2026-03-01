import { client } from '@/shared/api/client'

import type { OmdbDetailsResponse, OmdbSearchResponse } from './types'

export const fetchOmdbMovieById = async (id: string) => {
  const { data } = await client.get<OmdbDetailsResponse>('/', {
    params: { i: id, plot: 'full' },
  })

  return data
}

export const fetchOmdbMoviesBySearch = async (query: string) => {
  const { data } = await client.get<OmdbSearchResponse>('/', {
    params: { s: query.trim(), type: 'movie' },
  })

  return data
}
