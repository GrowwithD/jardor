import HeroSlider from "@/components/HeroSlider";
import HighlightsSection from "@/components/HighlightsSection";
import HighlightsSection4 from "@/components/HighlightsSection4";
import HighlightsSection2 from "@/components/HighlightsSection2";
import HighlightsSection3 from "@/components/HighlightsSection3";
import HighlightsSection5 from "@/components/HighlightsSection5";
import SommelierSection from "@/components/SommelierSection";
import CtaSection from "@/components/CtaSection";
import MapSection from "@/components/MapSection";
import ChefSection from "@/components/ChefSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HighlightsSection />
      <HighlightsSection2 />
      <HighlightsSection3 />
      <HighlightsSection4 />
      <HighlightsSection5 />
      <SommelierSection />
      <ChefSection />
      <CtaSection />
      <MapSection />
    </>
  );
}