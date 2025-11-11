import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "muted";
};

export function Eyebrow({
  children,
  className,
  tone = "gold",
}: EyebrowProps) {
  return (
    <p
      className={cn(
        "uppercase tracking-wider text-xs",
        tone === "gold"
          ? "text-brand-gold/80"
          : "text-brand-cream/60",
        className
      )}
    >
      {children}
    </p>
  );
}