import FeatureSection from "./_components/sections/FeatureSection";
import Hero from "./_components/layout/Hero";
import ProductSection from "./_components/sections/ProductSection";
import PriceSection from "./_components/sections/PriceSection";
import FAQSection from "./_components/sections/FAQSection";
import CTA from "./_components/CTA";
import Footer from "./_components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <ProductSection />
      <PriceSection />
      <FAQSection />
      <CTA />
      <Footer />
    </>
  );
}
