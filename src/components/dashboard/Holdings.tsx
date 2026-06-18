import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { formatCurrency } from "@/lib/format";
import type { PortfolioHolding } from "@/types";

export function Holdings({ holdings }: { holdings: PortfolioHolding[] }) {
  const total = holdings.reduce((sum, h) => sum + h.amount * h.price, 0);

  return (
    <Card className="animate-fade-in">
      <CardHeader title="Your Holdings" subtitle="Allocation breakdown" />
      <CardBody className="space-y-4 pt-3">
        {holdings.map((holding) => {
          const value = holding.amount * holding.price;
          const pct = (value / total) * 100;
          return (
            <div key={holding.coinId}>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-neutral-100">
                    {holding.symbol}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {holding.amount} units
                  </span>
                </div>
                <span className="font-medium text-neutral-200">
                  {formatCurrency(value)}
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-elevated">
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
}
