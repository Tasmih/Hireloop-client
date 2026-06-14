import Image from "next/image";
import StatsSection from "@/components/StatsSection"
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import JobListingsSection from "@/components/JobListingSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <div className=" bg-zinc-50 font-sans dark:bg-black">
      <HeroSection/>
      <StatsSection/>
      <JobListingsSection/>
      <FeaturesSection/>
      <PricingSection/>
      <CTASection/>
    </div>
  );
}
