import ButtonGold from "@/components/atoms/ButtonGold";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Jard'or Restaurant",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-green flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-brand-gold/70">404</p>
      <h1 className="text-3xl md:text-4xl text-brand-cream font-light">Page Not Found</h1>
      <p className="text-brand-cream/60 text-sm max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <ButtonGold href="/">Return Home</ButtonGold>
    </div>
  );
}
