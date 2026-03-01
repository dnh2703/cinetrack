export function MovieRankCardSkeleton() {
  return (
    <article
      className="w-70 shrink-0 animate-pulse"
      aria-label="Loading top rated movie card"
      aria-busy="true"
    >
      <div className="border-border bg-surface rounded-xl border p-2">
        <div className="mb-3 aspect-video rounded-lg bg-white/10" />
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="mb-2 h-5 w-4/5 rounded bg-white/10" />
            <div className="h-3 w-3/5 rounded bg-white/10" />
          </div>
          <div className="h-5 w-12 rounded bg-white/10" />
        </div>
      </div>
    </article>
  )
}
