import { Search } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'

interface MovieSearchFormProps {
  defaultValue?: string
  isLoading?: boolean
  onSubmit: (query: string) => void
}

export function MovieSearchForm({
  defaultValue = '',
  isLoading = false,
  onSubmit,
}: MovieSearchFormProps) {
  const [value, setValue] = useState(defaultValue)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(value.trim())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-border bg-surface rounded-xl border p-6 shadow-2xl"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <label className="relative block flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-500" />
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Search for a movie, actor, or director (OMDb)..."
            className="border-border bg-background text-foreground placeholder:text-muted focus:border-primary h-14 w-full rounded-lg border pr-4 pl-12 focus:outline-none"
          />
        </label>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary hover:bg-primary/90 inline-flex h-14 items-center justify-center gap-2 rounded-lg px-8 text-sm font-bold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Search className="h-4 w-4" />
          {isLoading ? 'Searching...' : 'Search OMDb'}
        </button>
      </div>
    </form>
  )
}
