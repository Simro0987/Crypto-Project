import { motion } from 'framer-motion';
import { ArrowUpRight, BadgeDollarSign, Globe2, Layers3 } from 'lucide-react';

import { AppHeader } from '../components/AppHeader';
import { BottomNav } from '../components/BottomNav';
import { GlassmorphismCards } from '../components/GlassmorphismCards';
import { ModernCharts } from '../components/ModernCharts';
import { useCryptoPrices } from '../hooks/useCryptoPrices';
import { useMarketCycle } from '../hooks/useMarketCycle';
import { dashboardMetrics } from '../lib/cryptoData';

const desktopNav = [
  { label: 'Overview', icon: Globe2, active: true },
  { label: 'Positions', icon: BadgeDollarSign, active: false },
  { label: 'Strategies', icon: Layers3, active: false },
];

export default function Index() {
  const assets = useCryptoPrices();
  const marketCycle = useMarketCycle();

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-12rem] top-[-10rem] h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-10rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute bottom-[-14rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl gap-6 px-4 py-4 pb-28 md:px-6 md:py-6 lg:pb-6">
        <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-24 shrink-0 rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/20 backdrop-blur-2xl lg:block">
          <div className="flex h-full flex-col items-center justify-between">
            <div>
              <div className="mb-10 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/30">
                <ArrowUpRight className="h-6 w-6" />
              </div>
              <nav className="space-y-3">
                {desktopNav.map((item) => {
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.label}
                      aria-label={item.label}
                      className={`grid h-12 w-12 place-items-center rounded-2xl transition ${
                        item.active
                          ? 'bg-white text-slate-950'
                          : 'text-slate-500 hover:bg-white/10 hover:text-slate-100'
                      }`}
                      type="button"
                    >
                      <Icon className="h-5 w-5" />
                    </button>
                  );
                })}
              </nav>
            </div>
            <div className="h-12 w-12 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950" />
          </div>
        </aside>

        <div className="min-w-0 flex-1 space-y-6">
          <AppHeader />

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
            className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/15 via-white/[0.055] to-violet-500/15 p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-100/80">
                Total balance
              </p>
              <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl">
                    $842.6K
                  </h2>
                  <p className="mt-3 text-sm text-slate-400">
                    +14.2% blended growth across spot, reserves, and cycle-weighted
                    positions.
                  </p>
                </div>
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-white/10 transition hover:-translate-y-0.5 hover:bg-cyan-100"
                  type="button"
                >
                  Rebalance
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-500">
                Cycle intelligence
              </p>
              <div className="mt-5 flex items-center justify-between gap-6">
                <div>
                  <h2 className="text-4xl font-semibold tracking-[-0.06em] text-white">
                    {marketCycle.sentiment}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    Model zvýrazňuje risk-on fázu, no ponecháva kapitálovú rezervu pre
                    volatilitu.
                  </p>
                </div>
                <div className="grid h-28 w-28 shrink-0 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 shadow-2xl shadow-cyan-500/10">
                  <div className="text-center">
                    <p className="text-3xl font-semibold text-cyan-100">
                      {marketCycle.cycleScore}
                    </p>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-cyan-100/60">
                      Pulse
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          <GlassmorphismCards assets={assets} metrics={dashboardMetrics} />
          <ModernCharts assets={assets} marketCycle={marketCycle} />
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
