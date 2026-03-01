import { MOVIE_POSTER_FALLBACK } from '../model/constants'
import type { MovieCardData } from '../model/types'

interface MovieRankCardProps {
  movie: MovieCardData
  rank: number
}

export function MovieRankCard({ movie, rank }: MovieRankCardProps) {
  return (
    <article className="group w-70 shrink-0 cursor-pointer">
      <div className="border-border bg-surface rounded-xl border p-2 transition-all duration-300 hover:bg-white/5">
        <div className="mb-3 aspect-video overflow-hidden rounded-lg">
          <img
            src={movie.poster || MOVIE_POSTER_FALLBACK}
            alt={movie.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="group-hover:text-primary truncate font-bold text-white transition-colors">
              {movie.title}
            </h4>
            <p className="truncate text-xs text-slate-500">
              {movie.subtitle || movie.year}
            </p>
          </div>
          <div className="bg-primary/15 text-primary rounded px-2 py-1 text-[10px] font-black tracking-wider uppercase">
            Top {rank}
          </div>
        </div>
      </div>
    </article>
  )
}
