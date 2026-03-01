import { useQueries, useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import {
  MovieCard,
  MovieCardSkeleton,
  MovieRankCard,
  MovieRankCardSkeleton,
} from '@/entities/movie'
import {
  FEATURED_MOVIE_ID,
  TOP_RATED_MOVIE_IDS,
  TRENDING_MOVIE_IDS,
  movieQueries,
} from '@/features/movies'
import { MovieSearchForm } from '@/features/movie-search'
import { Header } from '@/widgets/header'
import { HeroBanner } from '@/widgets/hero'

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')

  const featuredMovie = useQuery(movieQueries.byId(FEATURED_MOVIE_ID))
  const searchResults = useQuery({
    ...movieQueries.search(searchQuery),
    enabled: searchQuery.trim().length > 0,
  })

  const trendingRequests = useQueries({
    queries: TRENDING_MOVIE_IDS.map((id) => movieQueries.byId(id)),
  })
  const topRatedRequests = useQueries({
    queries: TOP_RATED_MOVIE_IDS.map((id) => movieQueries.byId(id)),
  })

  const trendingMovies = trendingRequests.flatMap((request) =>
    request.data ? [request.data] : [],
  )
  const topRatedMovies = topRatedRequests.flatMap((request) =>
    request.data ? [request.data] : [],
  )
  const isTrendingLoading = trendingRequests.some(
    (request) => request.isPending,
  )
  const isTopRatedLoading = topRatedRequests.some(
    (request) => request.isPending,
  )

  const hasSearch = searchQuery.trim().length > 0
  const hasSearchResults = (searchResults.data?.length ?? 0) > 0

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Header />

      <main>
        <HeroBanner
          movie={featuredMovie.data}
          isLoading={featuredMovie.isPending}
        />

        <section className="relative z-10 mx-auto -mt-12 w-full max-w-[1440px] px-6">
          <MovieSearchForm
            defaultValue={searchQuery}
            onSubmit={setSearchQuery}
            isLoading={searchResults.isFetching}
          />
        </section>

        <div className="mx-auto w-full max-w-[1440px] space-y-16 px-6 py-16">
          {hasSearch ? (
            <section>
              <div className="mb-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    Search Results
                  </h2>
                  <span className="bg-primary h-1 w-12 rounded-full" />
                </div>
                <p className="text-sm text-slate-400">“{searchQuery}”</p>
              </div>

              {searchResults.isPending ? (
                <p className="text-slate-400">Loading results...</p>
              ) : null}

              {searchResults.isError ? (
                <p className="text-sm text-red-400">
                  {searchResults.error instanceof Error
                    ? searchResults.error.message
                    : 'Failed to search movies.'}
                </p>
              ) : null}

              {searchResults.isSuccess && !hasSearchResults ? (
                <p className="text-slate-400">
                  No movies found. Try another keyword.
                </p>
              ) : null}

              {hasSearchResults ? (
                <div className="no-scrollbar -mx-2 flex gap-6 overflow-x-auto px-2 pb-8">
                  {searchResults.data?.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={{
                        id: movie.id,
                        title: movie.title,
                        year: movie.year,
                        poster: movie.poster,
                        subtitle: movie.type,
                      }}
                    />
                  ))}
                </div>
              ) : null}
            </section>
          ) : null}

          <section>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Trending Now
                </h2>
                <span className="bg-primary h-1 w-12 rounded-full" />
              </div>
              <button
                type="button"
                className="text-primary text-sm font-semibold hover:underline"
              >
                View All
              </button>
            </div>
            <div className="no-scrollbar -mx-2 flex gap-6 overflow-x-auto px-2 pb-8">
              {isTrendingLoading && trendingMovies.length === 0
                ? TRENDING_MOVIE_IDS.map((id) => <MovieCardSkeleton key={id} />)
                : trendingMovies.map((movie) => (
                    <MovieCard
                      key={movie.id}
                      movie={{
                        id: movie.id,
                        title: movie.title,
                        year: movie.year,
                        poster: movie.poster,
                        subtitle: movie.director,
                        rating: movie.imdbRating,
                      }}
                    />
                  ))}
            </div>
          </section>

          <section>
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Top Rated
                </h2>
                <span className="bg-primary h-1 w-12 rounded-full" />
              </div>
              <button
                type="button"
                className="text-primary text-sm font-semibold hover:underline"
              >
                View All
              </button>
            </div>
            <div className="no-scrollbar -mx-2 flex gap-6 overflow-x-auto px-2 pb-8">
              {isTopRatedLoading && topRatedMovies.length === 0
                ? TOP_RATED_MOVIE_IDS.map((id) => (
                    <MovieRankCardSkeleton key={id} />
                  ))
                : topRatedMovies.map((movie, index) => (
                    <MovieRankCard
                      key={movie.id}
                      rank={index + 1}
                      movie={{
                        id: movie.id,
                        title: movie.title,
                        year: movie.year,
                        poster: movie.poster,
                        subtitle: `${movie.year} • ${movie.genre || 'Movie'}`,
                      }}
                    />
                  ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="border-border bg-surface border-t py-12">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-xl font-extrabold text-white">
              CineTrack
            </h3>
            <p className="max-w-lg text-sm leading-relaxed text-slate-400">
              Discover and track movies with OMDb-powered metadata, search, and
              ranked sections built with Feature-Sliced Design.
            </p>
          </div>
          <div className="text-sm text-slate-500 md:text-right">
            Data provided by OMDb API. All imagery and metadata belong to their
            respective owners.
          </div>
        </div>
      </footer>
    </div>
  )
}
