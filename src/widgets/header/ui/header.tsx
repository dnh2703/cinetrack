import { Clapperboard, Search } from 'lucide-react'

const navItems = [
  { label: 'Movies', active: true },
  { label: 'TV Shows', active: false },
  { label: 'My List', active: false },
  { label: 'Discover', active: false },
]

const navItemClassName = 'text-sm leading-5 font-semibold transition-colors'
const iconButtonClassName =
  'text-muted hover:text-foreground flex h-9 w-9 items-center justify-center rounded-full p-2 transition-colors'

export function Header() {
  return (
    <header className="border-border/60 bg-background/80 fixed top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="text-primary flex h-6 w-6 items-center justify-center">
              <Clapperboard className="h-5 w-5" />
            </div>
            <span className="text-foreground text-[20px] leading-7 font-extrabold tracking-tight">
              CineTrack
            </span>
          </div>

          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Primary"
          >
            {navItems.map(({ label, active }) => (
              <button
                key={label}
                type="button"
                className={`${navItemClassName} ${
                  active ? 'text-foreground' : 'text-muted hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>

        <button
          type="button"
          aria-label="Search"
          className={iconButtonClassName}
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
