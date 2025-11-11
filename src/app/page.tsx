import HeroSlider from "@/components/HeroSlider";
import HighlightsSection from "@/components/HighlightsSection";
import SommelierSection from "@/components/SommelierSection";
import CtaSection from "@/components/CtaSection";
import MapSection from "@/components/MapSection";
import ChefSection from "@/components/ChefSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HighlightsSection />
      <SommelierSection />
      <ChefSection />
      <CtaSection />
      <MapSection />
    </>
  );
}