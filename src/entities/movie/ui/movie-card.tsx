import { Star } from 'lucide-react'

import { MOVIE_POSTER_FALLBACK } from '../model/constants'
import type { MovieCardData } from '../model/types'

interface MovieCardProps {
  movie: MovieCardData
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="group w-60 shrink-0 cursor-pointer transition-all duration-300 hover:-translate-y-2">
      <div className="border-border/40 bg-surface relative mb-4 aspect-2/3 overflow-hidden rounded-xl border">
        <img
          src={movie.poster || MOVIE_POSTER_FALLBACK}
          alt={movie.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {movie.rating && movie.rating !== 'N/A' ? (
          <div className="absolute top-3 right-3 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 backdrop-blur-sm">
            <Star className="text-primary h-3.5 w-3.5 fill-current" />
            <span className="text-xs font-bold text-white">{movie.rating}</span>
          </div>
        ) : null}
      </div>
      <h3 className="group-hover:text-primary text-lg leading-tight font-bold text-white transition-colors">
        {movie.title}
      </h3>
      <p className="text-sm font-medium text-slate-400">
        {movie.year}
        {movie.subtitle ? ` • ${movie.subtitle}` : ''}
      </p>
    </article>
  )
}
