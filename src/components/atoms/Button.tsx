import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    variant?: "primary" | "outline" | "ghost";
  };

type AsLink = BaseProps & {
  href: string;
  variant?: "primary" | "outline" | "ghost";
};

type Props = AsButton | AsLink;

function baseClasses(variant: NonNullable<Props["variant"]>) {
  const common =
    "inline-flex items-center justify-center rounded-pill uppercase tracking-[0.22em] text-xs md:text-[10px] transition-all duration-300";
  switch (variant) {
    case "primary":
      return cn(
        common,
        "px-8 py-2 bg-brand-gold text-black shadow-pill hover:bg-brand-gold/90 hover:shadow-[0_0_22px_rgba(200,169,107,0.55)]"
      );
    case "outline":
      return cn(
        common,
        "px-6 py-2 border border-brand-gold/70 text-brand-gold bg-black/25 backdrop-blur-[3px] hover:bg-brand-gold/10 hover:text-brand-cream"
      );
    case "ghost":
    default:
      return cn(
        common,
        "px-5 py-2 text-brand-cream/80 hover:text-brand-gold"
      );
  }
}

export function Button(props: Props) {
  const {
    children,
    className,
    variant = "primary",
    ...rest
  } = props as any;
  const classes = cn(baseClasses(variant), className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as any)}>
      {children}
    </button>
  );
}