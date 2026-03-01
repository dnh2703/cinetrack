import type { Movie } from '@/entities/movie'
import { fetchOmdbMovieById, fetchOmdbMoviesBySearch } from '@/shared/api/omdb'
import type { OmdbMovieDetails, OmdbSearchMovie } from '@/shared/api/omdb'

const toNullablePoster = (poster: string) => {
  if (poster === 'N/A') {
    return null
  }

  // OMDb often returns low-res IMDb poster variants (e.g. ..._SX300.jpg).
  // Requesting the base V1 image gives a much better source for large hero usage.
  if (poster.includes('m.media-amazon.com')) {
    return poster.replace(
      /\._V1_.*\.(jpg|jpeg|png)$/i,
      (_match, extension: string) => `._V1_.${extension}`,
    )
  }

  return poster
}

const toMovieFromDetails = (movie: OmdbMovieDetails): Movie => ({
  id: movie.imdbID,
  title: movie.Title,
  year: movie.Year,
  type: movie.Type,
  poster: toNullablePoster(movie.Poster),
  genre: movie.Genre,
  director: movie.Director,
  plot: movie.Plot,
  runtime: movie.Runtime,
  imdbRating: movie.imdbRating,
})

const toMovieFromSearch = (movie: OmdbSearchMovie): Movie => ({
  id: movie.imdbID,
  title: movie.Title,
  year: movie.Year,
  type: movie.Type,
  poster: toNullablePoster(movie.Poster),
  genre: '',
  director: '',
  plot: '',
  runtime: '',
  imdbRating: 'N/A',
})

export const getMovieById = async (id: string) => {
  const data = await fetchOmdbMovieById(id)

  if (data.Response === 'False') {
    throw new Error(data.Error || 'Failed to fetch data from OMDb.')
  }

  return toMovieFromDetails(data)
}

export const searchMovies = async (query: string) => {
  const data = await fetchOmdbMoviesBySearch(query)

  if (data.Response === 'False') {
    if (data.Error === 'Movie not found!') {
      return []
    }

    throw new Error(data.Error || 'Failed to search movies.')
  }

  return (data.Search ?? []).map(toMovieFromSearch)
}
