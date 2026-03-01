export interface Movie {
  id: string
  title: string
  year: string
  type: string
  poster: string | null
  genre: string
  director: string
  plot: string
  runtime: string
  imdbRating: string
}

export interface MovieCardData {
  id: string
  title: string
  year: string
  poster: string | null
  subtitle?: string
  rating?: string
}
