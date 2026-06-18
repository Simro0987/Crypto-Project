import { useState } from "react";
import {
  Coins,
  LayoutDashboard,
  LineChart,
  Settings,
  Star,
  X,
} from "lucide-react";
import { navItems } from "@/data/mockData";
import { cn } from "@/lib/format";

const ICONS: Record<string, typeof LayoutDashboard> = {
  dashboard: LayoutDashboard,
  markets: LineChart,
  portfolio: Coins,
  watchlist: Star,
  settings: Settings,
};

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const [active, setActive] = useState("dashboard");

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden
      />

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform border-r border-neutral-800 bg-card transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-xl bg-brand text-white">
              <Coins className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold text-neutral-100">
              Crypto Project
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-8 w-8 place-items-center rounded-lg text-neutral-400 hover:bg-elevated lg:hidden"
            aria-label="Close navigation"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="space-y-1 px-3 py-4">
          {navItems.map((item) => {
            const Icon = ICONS[item.id] ?? LayoutDashboard;
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActive(item.id);
                  onClose();
                }}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                  isActive
                    ? "bg-elevated text-neutral-100"
                    : "text-neutral-400 hover:bg-elevated/60 hover:text-neutral-200"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="absolute inset-x-3 bottom-4">
          <div className="rounded-2xl border border-neutral-800 bg-base p-4">
            <p className="text-xs font-medium text-neutral-200">Go Pro</p>
            <p className="mt-1 text-xs text-neutral-500">
              Unlock advanced analytics & alerts.
            </p>
            <button
              type="button"
              className="mt-3 w-full rounded-xl bg-brand py-2 text-xs font-semibold text-white transition hover:bg-brand-muted"
            >
              Upgrade
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
