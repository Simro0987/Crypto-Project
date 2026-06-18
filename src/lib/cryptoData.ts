import {
  Activity,
  Bitcoin,
  CircleDollarSign,
  Flame,
  Gem,
  type LucideIcon,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

export type CryptoAsset = {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume: string;
  allocation: number;
  sparkline: number[];
  accent: string;
  icon: LucideIcon;
};

export type MarketCyclePhase = {
  id: string;
  label: string;
  value: number;
  description: string;
  accent: string;
  icon: LucideIcon;
};

export type DashboardMetric = {
  label: string;
  value: string;
  detail: string;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
};

export const cryptoAssets: CryptoAsset[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 104823,
    change24h: 3.82,
    marketCap: '$2.06T',
    volume: '$48.2B',
    allocation: 44,
    sparkline: [38, 42, 40, 48, 45, 52, 57, 55, 61, 68, 72, 78],
    accent: 'from-orange-400 to-amber-300',
    icon: Bitcoin,
  },
  {
    id: 'eth',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 5486,
    change24h: 2.14,
    marketCap: '$659.8B',
    volume: '$22.7B',
    allocation: 28,
    sparkline: [52, 50, 54, 57, 55, 61, 63, 62, 67, 71, 69, 74],
    accent: 'from-cyan-300 to-blue-400',
    icon: Gem,
  },
  {
    id: 'sol',
    name: 'Solana',
    symbol: 'SOL',
    price: 288.42,
    change24h: 6.51,
    marketCap: '$132.1B',
    volume: '$9.8B',
    allocation: 17,
    sparkline: [31, 35, 37, 36, 44, 49, 53, 58, 64, 66, 71, 83],
    accent: 'from-fuchsia-400 to-violet-400',
    icon: Zap,
  },
  {
    id: 'usdc',
    name: 'USD Coin',
    symbol: 'USDC',
    price: 1,
    change24h: 0.01,
    marketCap: '$43.2B',
    volume: '$7.4B',
    allocation: 11,
    sparkline: [50, 50, 49, 50, 50, 51, 50, 50, 49, 50, 50, 50],
    accent: 'from-emerald-300 to-teal-400',
    icon: CircleDollarSign,
  },
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    label: 'Portfolio Value',
    value: '$842,650',
    detail: '+$28,430 this week',
    trend: 'up',
    icon: Sparkles,
  },
  {
    label: 'Market Momentum',
    value: 'Bullish',
    detail: '74/100 cycle score',
    trend: 'up',
    icon: Activity,
  },
  {
    label: 'Risk Shield',
    value: 'Optimized',
    detail: '11% stable reserve',
    trend: 'neutral',
    icon: ShieldCheck,
  },
];

export const marketCyclePhases: MarketCyclePhase[] = [
  {
    id: 'accumulation',
    label: 'Accumulation',
    value: 18,
    description: 'Smart money positioning',
    accent: 'bg-sky-400',
    icon: ShieldCheck,
  },
  {
    id: 'markup',
    label: 'Markup',
    value: 46,
    description: 'Capital rotation expanding',
    accent: 'bg-emerald-400',
    icon: Activity,
  },
  {
    id: 'euphoria',
    label: 'Euphoria',
    value: 27,
    description: 'Narratives accelerating',
    accent: 'bg-amber-300',
    icon: Flame,
  },
  {
    id: 'distribution',
    label: 'Distribution',
    value: 9,
    description: 'Risk control zone',
    accent: 'bg-rose-400',
    icon: Sparkles,
  },
];
