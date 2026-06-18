import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardBody, CardHeader } from "@/components/ui/Card";
import { ChangeBadge } from "@/components/ui/Badge";
import { formatCurrency } from "@/lib/format";
import type { PortfolioPoint } from "@/types";

interface PortfolioCardProps {
  value: number;
  change24h: number;
  history: PortfolioPoint[];
}

export function PortfolioCard({ value, change24h, history }: PortfolioCardProps) {
  return (
    <Card className="animate-fade-in">
      <CardHeader
        title="Portfolio Value"
        subtitle="Total balance across all assets"
        action={<ChangeBadge value={change24h} />}
      />
      <CardBody className="pt-3">
        <p className="text-3xl font-semibold tracking-tight text-neutral-100">
          {formatCurrency(value)}
        </p>

        <div className="mt-4 h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={history} margin={{ top: 8, right: 4, bottom: 0, left: 4 }}>
              <defs>
                <linearGradient id="portfolioFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366F1" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="label"
                stroke="#525252"
                tickLine={false}
                axisLine={false}
                fontSize={12}
              />
              <YAxis hide domain={["dataMin - 2000", "dataMax + 2000"]} />
              <Tooltip
                cursor={{ stroke: "#404040" }}
                contentStyle={{
                  background: "#141414",
                  border: "1px solid #262626",
                  borderRadius: "0.75rem",
                  color: "#e5e5e5",
                  fontSize: "12px",
                }}
                formatter={(v: number) => [formatCurrency(v), "Value"]}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#818CF8"
                strokeWidth={2}
                fill="url(#portfolioFill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
}
