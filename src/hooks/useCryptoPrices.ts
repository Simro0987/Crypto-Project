import { useEffect, useMemo, useState } from 'react';

import { cryptoAssets } from '../lib/cryptoData';

export function useCryptoPrices() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTick((currentTick) => currentTick + 1);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return useMemo(
    () =>
      cryptoAssets.map((asset, index) => {
        const wave = Math.sin((tick + index) * 0.7) * 0.004;
        const drift = Math.cos((tick + index) * 0.42) * 0.002;
        const price = asset.price * (1 + wave + drift);

        return {
          ...asset,
          price,
          change24h: asset.change24h + wave * 100,
        };
      }),
    [tick],
  );
}
