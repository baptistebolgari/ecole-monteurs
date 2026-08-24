import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Testimonials from "@/components/ui/testimonial-v2";
import FeaturedSectionStats from "@/components/ui/featured-section-stats";
import AboutSection from "@/components/ui/about-section";
import { BouncyCardsFeatures } from "@/components/ui/bounce-card-features";
import { CallToAction } from "@/components/ui/cta-3";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <Hero />
      <Partners />
      <FeaturedSectionStats />
      <AboutSection />
      <BouncyCardsFeatures />
      <CallToAction />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
