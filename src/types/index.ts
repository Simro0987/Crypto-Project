export interface Coin {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  /** Recent price points used for the sparkline. */
  sparkline: number[];
}

export interface PortfolioHolding {
  coinId: string;
  symbol: string;
  name: string;
  amount: number;
  price: number;
}

export interface PortfolioPoint {
  /** Short label, e.g. "Mon" or "09:00". */
  label: string;
  value: number;
}

export interface MarketStat {
  label: string;
  value: string;
  change: number;
}

export interface NavItem {
  id: string;
  label: string;
}
