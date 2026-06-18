import { useMemo } from "react";
import {
  coins,
  marketStats,
  portfolioHistory,
  portfolioHoldings,
} from "@/data/mockData";
import type { Coin, MarketStat, PortfolioHolding, PortfolioPoint } from "@/types";

interface MarketData {
  coins: Coin[];
  stats: MarketStat[];
  holdings: PortfolioHolding[];
  history: PortfolioPoint[];
  portfolioValue: number;
  portfolioChange24h: number;
}

/**
 * Central data hook. Currently backed by mock data, but the shape mirrors a
 * typical REST/websocket response so it can be swapped for a real API
 * (e.g. CoinGecko) without touching the components that consume it.
 */
export function useMarketData(): MarketData {
  return useMemo(() => {
    const priceById = new Map(coins.map((c) => [c.id, c]));

    const portfolioValue = portfolioHoldings.reduce(
      (sum, h) => sum + h.amount * h.price,
      0
    );

    const weightedChange = portfolioHoldings.reduce((sum, h) => {
      const coin = priceById.get(h.coinId);
      const weight = (h.amount * h.price) / portfolioValue;
      return sum + (coin?.change24h ?? 0) * weight;
    }, 0);

    return {
      coins,
      stats: marketStats,
      holdings: portfolioHoldings,
      history: portfolioHistory,
      portfolioValue,
      portfolioChange24h: Number(weightedChange.toFixed(2)),
    };
  }, []);
}
