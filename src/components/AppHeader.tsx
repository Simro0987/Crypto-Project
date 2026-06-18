import { motion } from 'framer-motion';
import { Bell, Search, Sparkles } from 'lucide-react';

export function AppHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl md:flex-row md:items-center md:justify-between"
    >
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-100">
          <Sparkles className="h-3.5 w-3.5" />
          Premium Crypto OS
        </div>
        <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
          Market Pulse
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 md:text-base">
          Minimalistický pohľad na portfólio, momentum a trhový cyklus pre
          rýchle rozhodovanie bez vizuálneho šumu.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <label className="group flex min-w-0 flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-slate-400 transition focus-within:border-cyan-300/40 md:w-72">
          <Search className="h-4 w-4 text-slate-500 transition group-focus-within:text-cyan-200" />
          <input
            aria-label="Search assets"
            className="w-full bg-transparent text-slate-100 outline-none placeholder:text-slate-600"
            placeholder="Search assets"
            type="search"
          />
        </label>
        <button
          aria-label="Open notifications"
          className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-slate-200 shadow-lg shadow-black/20 transition hover:border-cyan-300/30 hover:bg-cyan-300/10"
          type="button"
        >
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </motion.header>
  );
}
