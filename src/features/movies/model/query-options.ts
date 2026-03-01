import { queryOptions } from '@tanstack/react-query'

import { getMovieById, searchMovies } from '../api/movie.api'

export const movieQueryKeys = {
  all: ['movie'] as const,
  byId: (id: string) => [...movieQueryKeys.all, 'by-id', id] as const,
  search: (query: string) =>
    [...movieQueryKeys.all, 'search', query.trim().toLowerCase()] as const,
}

export const movieQueries = {
  byId: (id: string) =>
    queryOptions({
      queryKey: movieQueryKeys.byId(id),
      queryFn: () => getMovieById(id),
      staleTime: 1000 * 60 * 10,
    }),
  search: (query: string) =>
    queryOptions({
      queryKey: movieQueryKeys.search(query),
      queryFn: () => searchMovies(query),
      staleTime: 1000 * 60 * 2,
    }),
}
