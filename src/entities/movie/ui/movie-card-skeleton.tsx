export function MovieCardSkeleton() {
  return (
    <article
      className="w-60 shrink-0 animate-pulse"
      aria-label="Loading movie card"
      aria-busy="true"
    >
      <div className="border-border/40 bg-surface relative mb-4 aspect-2/3 overflow-hidden rounded-xl border">
        <div className="h-full w-full bg-white/10" />
      </div>
      <div className="mb-2 h-6 w-4/5 rounded bg-white/10" />
      <div className="h-4 w-2/3 rounded bg-white/10" />
    </article>
  )
}
