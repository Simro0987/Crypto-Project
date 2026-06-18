import { Card } from "@/components/ui/Card";
import { ChangeBadge } from "@/components/ui/Badge";
import type { MarketStat } from "@/types";

export function StatCard({ stat }: { stat: MarketStat }) {
  return (
    <Card className="animate-fade-in p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-neutral-500">{stat.label}</p>
        <ChangeBadge value={stat.change} />
      </div>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-neutral-100">
        {stat.value}
      </p>
    </Card>
  );
}

export function StatGrid({ stats }: { stats: MarketStat[] }) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </section>
  );
}
