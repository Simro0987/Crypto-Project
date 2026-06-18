import { motion } from 'framer-motion';
import { BarChart3, Layers3, Settings2, WalletCards } from 'lucide-react';

import { cn } from '../lib/utils';

const navItems = [
  { label: 'Pulse', icon: BarChart3, active: true },
  { label: 'Assets', icon: WalletCards, active: false },
  { label: 'Cycles', icon: Layers3, active: false },
  { label: 'Settings', icon: Settings2, active: false },
];

export function BottomNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-x-4 bottom-4 z-20 mx-auto max-w-lg rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
    >
      <div className="grid grid-cols-4 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className={cn(
                'flex flex-col items-center gap-1 rounded-2xl px-2 py-3 text-xs font-medium transition',
                item.active
                  ? 'bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20'
                  : 'text-slate-500 hover:bg-white/5 hover:text-slate-200',
              )}
              type="button"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
