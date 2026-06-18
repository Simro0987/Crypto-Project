import { Area, AreaChart, ResponsiveContainer } from "recharts";

export function Sparkline({
  data,
  positive,
}: {
  data: number[];
  positive: boolean;
}) {
  const color = positive ? "#22C55E" : "#EF4444";
  const chartData = data.map((value, index) => ({ index, value }));
  const gradientId = `spark-${positive ? "up" : "down"}`;

  return (
    <div className="h-10 w-24">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 2, right: 0, bottom: 2, left: 0 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.3} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={1.5}
            fill={`url(#${gradientId})`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
