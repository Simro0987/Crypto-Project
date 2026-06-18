import type {
  Coin,
  MarketStat,
  NavItem,
  PortfolioHolding,
  PortfolioPoint,
} from "@/types";

const spark = (base: number, drift: number): number[] =>
  Array.from({ length: 24 }, (_, i) => {
    const wave = Math.sin(i / 3) * drift * 0.4;
    const trend = (i / 23) * drift;
    return Number((base + wave + trend).toFixed(2));
  });

export const coins: Coin[] = [
  {
    id: "bitcoin",
    symbol: "BTC",
    name: "Bitcoin",
    price: 67432.18,
    change24h: 2.41,
    marketCap: 1328000000000,
    volume24h: 38400000000,
    sparkline: spark(66000, 1800),
  },
  {
    id: "ethereum",
    symbol: "ETH",
    name: "Ethereum",
    price: 3521.77,
    change24h: -1.12,
    marketCap: 423000000000,
    volume24h: 18900000000,
    sparkline: spark(3580, -90),
  },
  {
    id: "solana",
    symbol: "SOL",
    name: "Solana",
    price: 168.42,
    change24h: 5.83,
    marketCap: 78000000000,
    volume24h: 4300000000,
    sparkline: spark(158, 12),
  },
  {
    id: "cardano",
    symbol: "ADA",
    name: "Cardano",
    price: 0.452,
    change24h: -0.74,
    marketCap: 16000000000,
    volume24h: 540000000,
    sparkline: spark(0.46, -0.01),
  },
  {
    id: "chainlink",
    symbol: "LINK",
    name: "Chainlink",
    price: 14.92,
    change24h: 3.27,
    marketCap: 9200000000,
    volume24h: 410000000,
    sparkline: spark(14.2, 0.9),
  },
  {
    id: "polkadot",
    symbol: "DOT",
    name: "Polkadot",
    price: 6.31,
    change24h: 1.08,
    marketCap: 9000000000,
    volume24h: 230000000,
    sparkline: spark(6.1, 0.25),
  },
];

export const portfolioHoldings: PortfolioHolding[] = [
  { coinId: "bitcoin", symbol: "BTC", name: "Bitcoin", amount: 0.42, price: 67432.18 },
  { coinId: "ethereum", symbol: "ETH", name: "Ethereum", amount: 3.1, price: 3521.77 },
  { coinId: "solana", symbol: "SOL", name: "Solana", amount: 45, price: 168.42 },
  { coinId: "chainlink", symbol: "LINK", name: "Chainlink", amount: 120, price: 14.92 },
];

export const portfolioHistory: PortfolioPoint[] = [
  { label: "Mon", value: 38200 },
  { label: "Tue", value: 39100 },
  { label: "Wed", value: 37650 },
  { label: "Thu", value: 41200 },
  { label: "Fri", value: 43850 },
  { label: "Sat", value: 42980 },
  { label: "Sun", value: 45610 },
];

export const marketStats: MarketStat[] = [
  { label: "Market Cap", value: "$2.41T", change: 1.92 },
  { label: "24h Volume", value: "$98.7B", change: -3.41 },
  { label: "BTC Dominance", value: "54.2%", change: 0.38 },
  { label: "Fear & Greed", value: "72 · Greed", change: 6.0 },
];

export const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard" },
  { id: "markets", label: "Markets" },
  { id: "portfolio", label: "Portfolio" },
  { id: "watchlist", label: "Watchlist" },
  { id: "settings", label: "Settings" },
];
