import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/format";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

/**
 * Premium Dark Mode card surface:
 * - background #141414 (bg-card)
 * - border border-neutral-800
 * - rounded-2xl
 */
export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-neutral-800 rounded-2xl shadow-card",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3 px-5 pt-5">
      <div>
        <h3 className="text-sm font-semibold text-neutral-100">{title}</h3>
        {subtitle ? (
          <p className="mt-0.5 text-xs text-neutral-500">{subtitle}</p>
        ) : null}
      </div>
      {action}
    </div>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("p-5", className)}>{children}</div>;
}
