"use client";

import { useEffect } from "react";
import ButtonGold from "@/components/atoms/ButtonGold";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-brand-green flex flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="text-xs uppercase tracking-[0.28em] text-brand-gold/70">Something went wrong</p>
      <h1 className="text-3xl md:text-4xl text-brand-cream font-light">An error occurred</h1>
      <p className="text-brand-cream/60 text-sm max-w-md">
        We apologise for the inconvenience. Please try again or return to the home page.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <ButtonGold onClick={() => reset()}>Try Again</ButtonGold>
        <ButtonGold href="/">Return Home</ButtonGold>
      </div>
    </div>
  );
}
