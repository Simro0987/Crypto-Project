import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn, formatPercent } from "@/lib/format";

export function ChangeBadge({ value }: { value: number }) {
  const positive = value >= 0;
  const Icon = positive ? ArrowUpRight : ArrowDownRight;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-lg px-2 py-0.5 text-xs font-medium",
        positive
          ? "bg-success/10 text-success"
          : "bg-danger/10 text-danger"
      )}
    >
      <Icon className="h-3 w-3" />
      {formatPercent(value)}
    </span>
  );
}
