import BenefitSection from "@/components/BenefitSection";
import BrandSection from "@/components/BrandSection";
import FQASection from "@/components/FQASection";
import HeroSection from "@/components/HeroSection";
import OurCourseSection from "@/components/OurCourseSection";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import VideoSection from "@/components/VideoSection";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <BrandSection />
      <VideoSection />
      <BenefitSection />
      <OurCourseSection />
      <TestimonialSection />
      <PricingSection />
      <FQASection/>
    </div>
  );
}
