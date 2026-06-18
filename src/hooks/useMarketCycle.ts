import { useMemo } from 'react';

import { marketCyclePhases } from '../lib/cryptoData';

export function useMarketCycle() {
  return useMemo(() => {
    const total = marketCyclePhases.reduce((sum, phase) => sum + phase.value, 0);
    const dominantPhase = marketCyclePhases.reduce((strongest, phase) =>
      phase.value > strongest.value ? phase : strongest,
    );

    return {
      total,
      dominantPhase,
      cycleScore: 74,
      sentiment: 'Constructive Bull',
      phases: marketCyclePhases,
    };
  }, []);
}
