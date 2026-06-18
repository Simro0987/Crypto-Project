import { Card, CardHeader } from "@/components/ui/Card";
import { ChangeBadge } from "@/components/ui/Badge";
import { Sparkline } from "@/components/dashboard/Sparkline";
import { formatCompact, formatCurrency } from "@/lib/format";
import type { Coin } from "@/types";

function CoinIcon({ symbol }: { symbol: string }) {
  return (
    <div className="grid h-9 w-9 place-items-center rounded-full border border-neutral-800 bg-elevated text-xs font-semibold text-neutral-300">
      {symbol.slice(0, 3)}
    </div>
  );
}

export function MarketTable({ coins }: { coins: Coin[] }) {
  return (
    <Card className="animate-fade-in overflow-hidden">
      <CardHeader title="Markets" subtitle="Top assets by market cap" />

      {/* Desktop table */}
      <div className="mt-4 hidden md:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-800 text-left text-xs text-neutral-500">
              <th className="px-5 py-3 font-medium">Asset</th>
              <th className="px-5 py-3 text-right font-medium">Price</th>
              <th className="px-5 py-3 text-right font-medium">24h</th>
              <th className="px-5 py-3 text-right font-medium">Market Cap</th>
              <th className="px-5 py-3 text-right font-medium">Last 24h</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr
                key={coin.id}
                className="border-b border-neutral-800/60 transition hover:bg-elevated/40 last:border-0"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <CoinIcon symbol={coin.symbol} />
                    <div>
                      <p className="font-medium text-neutral-100">{coin.name}</p>
                      <p className="text-xs text-neutral-500">{coin.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-right font-medium text-neutral-100">
                  {formatCurrency(coin.price)}
                </td>
                <td className="px-5 py-3 text-right">
                  <ChangeBadge value={coin.change24h} />
                </td>
                <td className="px-5 py-3 text-right text-neutral-300">
                  ${formatCompact(coin.marketCap)}
                </td>
                <td className="px-5 py-3">
                  <div className="flex justify-end">
                    <Sparkline data={coin.sparkline} positive={coin.change24h >= 0} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile list */}
      <div className="mt-2 divide-y divide-neutral-800/60 md:hidden">
        {coins.map((coin) => (
          <div key={coin.id} className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-3">
              <CoinIcon symbol={coin.symbol} />
              <div>
                <p className="font-medium text-neutral-100">{coin.symbol}</p>
                <p className="text-xs text-neutral-500">{coin.name}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-neutral-100">
                {formatCurrency(coin.price)}
              </p>
              <div className="mt-1 flex justify-end">
                <ChangeBadge value={coin.change24h} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
