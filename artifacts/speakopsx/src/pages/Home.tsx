import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InterfacesSection } from "@/components/InterfacesSection";
import { QuickStartSection } from "@/components/QuickStartSection";
import { CliCommandsSection } from "@/components/CliCommandsSection";
import { ConfigSection } from "@/components/ConfigSection";
import { TechStackSection } from "@/components/TechStackSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { SecuritySection } from "@/components/SecuritySection";
import { ContributingSection } from "@/components/ContributingSection";
import { BuiltBySection } from "@/components/BuiltBySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden font-sans">
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <ArchitectureSection />
        <FeaturesSection />
        <InterfacesSection />
        <QuickStartSection />
        <CliCommandsSection />
        <ConfigSection />
        <TechStackSection />
        <RoadmapSection />
        <SecuritySection />
        <ContributingSection />
        <BuiltBySection />
      </main>
      <Footer />
    </div>
  );
}
