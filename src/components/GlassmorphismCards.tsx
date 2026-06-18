import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import type { CryptoAsset, DashboardMetric } from '../lib/cryptoData';
import { buildSparklinePath, cn, formatCurrency, formatPercent } from '../lib/utils';

type GlassmorphismCardsProps = {
  assets: CryptoAsset[];
  metrics: DashboardMetric[];
};

const cardAnimation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function GlassmorphismCards({ assets, metrics }: GlassmorphismCardsProps) {
  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;

          return (
            <motion.article
              key={metric.label}
              {...cardAnimation}
              transition={{ delay: index * 0.08, duration: 0.48, ease: 'easeOut' }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/20 backdrop-blur-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="rounded-2xl bg-white/[0.07] p-3 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-xs font-semibold',
                    metric.trend === 'up' && 'bg-emerald-400/10 text-emerald-200',
                    metric.trend === 'down' && 'bg-rose-400/10 text-rose-200',
                    metric.trend === 'neutral' && 'bg-slate-400/10 text-slate-300',
                  )}
                >
                  Live
                </span>
              </div>
              <p className="text-sm text-slate-400">{metric.label}</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">
                {metric.value}
              </h2>
              <p className="mt-2 text-sm text-slate-500">{metric.detail}</p>
            </motion.article>
          );
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        {assets.map((asset, index) => {
          const Icon = asset.icon;
          const TrendIcon = asset.change24h >= 0 ? ArrowUpRight : ArrowDownRight;

          return (
            <motion.article
              key={asset.id}
              {...cardAnimation}
              transition={{ delay: 0.16 + index * 0.08, duration: 0.48, ease: 'easeOut' }}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/50 p-5 shadow-xl shadow-black/20 backdrop-blur-2xl transition hover:-translate-y-1 hover:border-white/20 hover:bg-slate-900/70"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'rounded-2xl bg-gradient-to-br p-3 text-slate-950 shadow-lg',
                      asset.accent,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{asset.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                      {asset.symbol}
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    'flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold',
                    asset.change24h >= 0
                      ? 'bg-emerald-400/10 text-emerald-200'
                      : 'bg-rose-400/10 text-rose-200',
                  )}
                >
                  <TrendIcon className="h-3.5 w-3.5" />
                  {formatPercent(asset.change24h)}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                  {formatCurrency(asset.price)}
                </p>
                <div className="mt-4 h-16">
                  <svg
                    className="h-full w-full overflow-visible"
                    preserveAspectRatio="none"
                    viewBox="0 0 160 56"
                  >
                    <defs>
                      <linearGradient id={`${asset.id}-line`} x1="0" x2="1" y1="0" y2="0">
                        <stop stopColor="#67e8f9" />
                        <stop offset="1" stopColor="#a78bfa" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 0.22 + index * 0.08, duration: 0.9 }}
                      d={buildSparklinePath(asset.sparkline)}
                      fill="none"
                      stroke={`url(#${asset.id}-line)`}
                      strokeLinecap="round"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl bg-white/[0.045] p-3">
                  <p className="text-slate-500">Market Cap</p>
                  <p className="mt-1 font-semibold text-slate-200">{asset.marketCap}</p>
                </div>
                <div className="rounded-2xl bg-white/[0.045] p-3">
                  <p className="text-slate-500">Volume</p>
                  <p className="mt-1 font-semibold text-slate-200">{asset.volume}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
