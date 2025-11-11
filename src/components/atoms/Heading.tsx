import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  as?: "h1" | "h2" | "h3" | "h4";
  size?:
    | "display"
    | "hero"
    | "xl"
    | "lg"
    | "md"
    | "sm";
  align?: "left" | "center" | "right";
  className?: string;
  children: ReactNode;
};

const sizeMap: Record<NonNullable<Props["size"]>, string> = {
  display:
    "text-5xl md:text-6xl lg:text-7xl",
  hero:
    "text-4xl md:text-5xl",
  xl:
    "text-3xl md:text-4xl",
  lg:
    "text-2xl md:text-3xl",
  md:
    "text-xl md:text-2xl",
  sm:
    "text-lg md:text-xl",
};

export function Heading({
  as: Tag = "h2",
  size = "lg",
  align = "left",
  className,
  children,
}: Props) {
  return (
    <Tag
      className={cn(
        "font-serif text-brand-cream tracking-[0.08em]",
        sizeMap[size],
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      {children}
    </Tag>
  );
}