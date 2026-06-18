import { Bell, Menu, Search, Wallet } from "lucide-react";

interface HeaderProps {
  onToggleSidebar: () => void;
}

/**
 * Sticky top bar with a subtle backdrop-blur "glass" effect over the
 * #0A0A0A background.
 */
export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-800/80 bg-base/70 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="grid h-9 w-9 place-items-center rounded-xl border border-neutral-800 text-neutral-300 transition hover:bg-elevated lg:hidden"
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden flex-1 sm:block">
          <h1 className="text-sm font-semibold text-neutral-100">Dashboard</h1>
          <p className="text-xs text-neutral-500">
            Live market overview · {new Date().toLocaleDateString()}
          </p>
        </div>

        <label className="relative hidden flex-1 max-w-sm items-center md:flex">
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-neutral-500" />
          <input
            type="search"
            placeholder="Search assets..."
            className="w-full rounded-xl border border-neutral-800 bg-card py-2 pl-9 pr-3 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none transition focus:border-brand/60"
          />
        </label>

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="relative grid h-9 w-9 place-items-center rounded-xl border border-neutral-800 text-neutral-300 transition hover:bg-elevated"
            aria-label="Notifications"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-brand" />
          </button>
          <button
            type="button"
            className="inline-flex h-9 items-center gap-2 rounded-xl bg-brand px-3 text-sm font-medium text-white transition hover:bg-brand-muted"
          >
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">Connect</span>
          </button>
        </div>
      </div>
    </header>
  );
}
