import { StatGrid } from "@/components/dashboard/StatCard";
import { PortfolioCard } from "@/components/dashboard/PortfolioCard";
import { Holdings } from "@/components/dashboard/Holdings";
import { MarketTable } from "@/components/dashboard/MarketTable";
import { useMarketData } from "@/hooks/useMarketData";

export function DashboardPage() {
  const { coins, stats, holdings, history, portfolioValue, portfolioChange24h } =
    useMarketData();

  return (
    <div className="space-y-6">
      <StatGrid stats={stats} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PortfolioCard
            value={portfolioValue}
            change24h={portfolioChange24h}
            history={history}
          />
        </div>
        <Holdings holdings={holdings} />
      </div>

      <MarketTable coins={coins} />
    </div>
  );
}
