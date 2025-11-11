import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
    children: ReactNode;
    className?: string;
    muted?: boolean;
    size?: "xs" | "sm" | "base";
};

const sizeClass: Record<NonNullable<Props["size"]>, string> = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
};

export function Paragraph({
    children,
    className,
    muted,
    size = "sm",
}: Props) {
    return (
        <p
            className={cn(
                sizeClass[size],
                "leading-relaxed",
                muted
                    ? "text-brand-cream/65"
                    : "text-brand-cream/82",
                className
            )}
        >
            {children}
        </p>
    );
}