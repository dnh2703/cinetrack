import type { Movie } from '@/entities/movie'

interface HeroBannerProps {
  movie?: Movie
  isLoading?: boolean
}

const heroFallbackImage =
  'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1920&q=80'

const fallbackHeroCopy = {
  title: 'Featured Movie',
  genre: 'Action • Adventure • Drama',
  plot: 'Explore movie details, ratings, and cast information to find your next favorite watch on CineTrack.',
}

function HeroBannerSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-6 w-20 rounded bg-white/20" />
        <div className="h-4 w-40 rounded bg-white/20" />
      </div>

      <div className="space-y-3">
        <div className="h-14 w-full rounded bg-white/20 md:w-4/5" />
        <div className="h-14 w-4/5 rounded bg-white/20 md:w-2/3" />
      </div>

      <div className="space-y-2">
        <div className="h-5 w-full rounded bg-white/15" />
        <div className="h-5 w-11/12 rounded bg-white/15" />
        <div className="h-5 w-8/12 rounded bg-white/15" />
      </div>

      <div className="flex items-center gap-4 pt-2">
        <div className="h-12 w-36 rounded-lg bg-white/20" />
        <div className="h-12 w-32 rounded-lg bg-white/20" />
      </div>
    </div>
  )
}

export function HeroBanner({ movie, isLoading = false }: HeroBannerProps) {
  const backgroundImage = movie?.poster || heroFallbackImage
  const title = movie?.title || fallbackHeroCopy.title
  const genre = movie?.genre || fallbackHeroCopy.genre
  const plot = movie?.plot || fallbackHeroCopy.plot
  const showSkeleton = isLoading && !movie

  return (
    <section className="relative h-[85vh] w-full overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <div className="from-background via-background/60 to-background/15 absolute inset-0 bg-linear-to-t" />
      </div>

      <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col justify-end px-6 pb-24">
        <div className="max-w-2xl space-y-6">
          {showSkeleton ? (
            <HeroBannerSkeleton />
          ) : (
            <>
              <div className="flex items-center gap-3">
                <span className="bg-primary rounded px-2 py-1 text-[10px] font-black tracking-[0.16em] text-white uppercase">
                  Featured
                </span>
                <span className="text-sm font-medium text-slate-300">
                  {genre}
                </span>
              </div>

              <h1 className="text-5xl leading-none font-black tracking-tight text-white md:text-7xl">
                {title}
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                {plot}
              </p>

              <div className="flex items-center gap-4 pt-2">
                <button
                  type="button"
                  className="bg-primary hover:bg-primary/90 rounded-lg px-8 py-3 text-sm font-bold text-white transition-colors"
                >
                  Watch Trailer
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-white/10 px-8 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  More Info
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
