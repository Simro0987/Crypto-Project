import { useEffect, useState } from "react";

export interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
}

const MOCK_PRICES: CryptoPrice[] = [
  { symbol: "BTC", name: "Bitcoin", price: 67432.18 },
  { symbol: "ETH", name: "Ethereum", price: 3521.44 },
  { symbol: "SOL", name: "Solana", price: 154.92 },
];

/**
 * Simulates fetching cryptocurrency prices from a remote API.
 * The resolution is delayed by 1s to mimic real network latency so the
 * consuming component can render a loading state.
 */
function fetchPrices(): Promise<CryptoPrice[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PRICES), 1000);
  });
}

interface UsePricesResult {
  prices: CryptoPrice[] | null;
  isLoading: boolean;
}

export function usePrices(): UsePricesResult {
  const [prices, setPrices] = useState<CryptoPrice[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    setIsLoading(true);
    fetchPrices().then((data) => {
      if (!isActive) return;
      setPrices(data);
      setIsLoading(false);
    });

    return () => {
      isActive = false;
    };
  }, []);

  return { prices, isLoading };
}
