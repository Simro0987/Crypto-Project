import { motion } from 'framer-motion';
import { Brain, Radar, TrendingUp } from 'lucide-react';

import type { CryptoAsset, MarketCyclePhase } from '../lib/cryptoData';
import { buildSparklinePath, cn } from '../lib/utils';

type MarketCycle = {
  total: number;
  dominantPhase: MarketCyclePhase;
  cycleScore: number;
  sentiment: string;
  phases: MarketCyclePhase[];
};

type ModernChartsProps = {
  assets: CryptoAsset[];
  marketCycle: MarketCycle;
};

const portfolioCurve = [42, 45, 44, 49, 53, 51, 58, 61, 66, 64, 71, 76, 74, 82];

export function ModernCharts({ assets, marketCycle }: ModernChartsProps) {
  const linePath = buildSparklinePath(portfolioCurve, 520, 180);
  const areaPath = `${linePath} L 520 180 L 0 180 Z`;

  return (
    <section className="grid gap-6 xl:grid-cols-[1.45fr_0.9fr]">
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.55, ease: 'easeOut' }}
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
              <TrendingUp className="h-3.5 w-3.5" />
              Performance
            </div>
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white">
              Portfolio Growth
            </h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
              Jemná syntetická krivka kombinuje momentum veľkých aktív a stabilnú
              rezervu portfólia.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/45 px-5 py-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">30D PnL</p>
            <p className="mt-1 text-3xl font-semibold tracking-[-0.05em] text-emerald-200">
              +18.4%
            </p>
          </div>
        </div>

        <div className="mt-8 h-72 rounded-[1.5rem] bg-slate-950/35 p-4">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 520 180">
            <defs>
              <linearGradient id="portfolio-line" x1="0" x2="1" y1="0" y2="0">
                <stop stopColor="#22d3ee" />
                <stop offset="0.55" stopColor="#34d399" />
                <stop offset="1" stopColor="#a78bfa" />
              </linearGradient>
              <linearGradient id="portfolio-area" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#22d3ee" stopOpacity="0.28" />
                <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[30, 70, 110, 150].map((y) => (
              <line
                key={y}
                stroke="rgba(148, 163, 184, 0.12)"
                strokeDasharray="6 10"
                x1="0"
                x2="520"
                y1={y}
                y2={y}
              />
            ))}
            <motion.path
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              d={areaPath}
              fill="url(#portfolio-area)"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.35, duration: 1.2, ease: 'easeInOut' }}
              d={linePath}
              fill="none"
              stroke="url(#portfolio-line)"
              strokeLinecap="round"
              strokeWidth="4"
            />
          </svg>
        </div>
      </motion.article>

      <div className="space-y-6">
        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.34, duration: 0.55, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-100">
                <Radar className="h-3.5 w-3.5" />
                Allocation
              </div>
              <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
                Asset Mix
              </h2>
            </div>
            <span className="text-sm text-slate-500">Live model</span>
          </div>

          <div className="space-y-4">
            {assets.map((asset) => (
              <div key={asset.id}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-200">{asset.symbol}</span>
                  <span className="text-slate-500">{asset.allocation}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${asset.allocation}%` }}
                    transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
                    className={cn('h-full rounded-full bg-gradient-to-r', asset.accent)}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.43, duration: 0.55, ease: 'easeOut' }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/25 backdrop-blur-2xl"
        >
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                <Brain className="h-3.5 w-3.5" />
                Market Cycle
              </div>
              <h2 className="text-xl font-semibold tracking-[-0.04em] text-white">
                {marketCycle.sentiment}
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Dominant phase: {marketCycle.dominantPhase.label}
              </p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-semibold tracking-[-0.06em] text-cyan-100">
                {marketCycle.cycleScore}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Score</p>
            </div>
          </div>

          <div className="space-y-3">
            {marketCycle.phases.map((phase) => {
              const Icon = phase.icon;
              const width = `${(phase.value / marketCycle.total) * 100}%`;

              return (
                <div
                  key={phase.id}
                  className="rounded-2xl border border-white/5 bg-slate-950/35 p-3"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className={cn('rounded-xl p-2 text-slate-950', phase.accent)}>
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-slate-100">{phase.label}</p>
                        <p className="text-sm text-slate-500">{phase.value}%</p>
                      </div>
                      <p className="truncate text-xs text-slate-500">{phase.description}</p>
                    </div>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width }}
                      transition={{ delay: 0.6, duration: 0.6, ease: 'easeOut' }}
                      className={cn('h-full rounded-full', phase.accent)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
