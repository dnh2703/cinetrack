export interface OmdbSearchMovie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface OmdbMovieDetails extends OmdbSearchMovie {
  Genre: string
  Director: string
  Plot: string
  Runtime: string
  imdbRating: string
}

interface OmdbFailure {
  Response: 'False'
  Error: string
}

interface OmdbSearchSuccess {
  Response: 'True'
  Search?: OmdbSearchMovie[]
  totalResults?: string
}

type OmdbDetailsSuccess = OmdbMovieDetails & {
  Response: 'True'
}

export type OmdbSearchResponse = OmdbSearchSuccess | OmdbFailure
export type OmdbDetailsResponse = OmdbDetailsSuccess | OmdbFailure
