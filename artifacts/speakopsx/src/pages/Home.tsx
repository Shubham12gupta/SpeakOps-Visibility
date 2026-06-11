import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { InterfacesSection } from "@/components/InterfacesSection";
import { QuickStartSection } from "@/components/QuickStartSection";
import { CliCommandsSection } from "@/components/CliCommandsSection";
import { ConfigSection } from "@/components/ConfigSection";
import { TechStackSection } from "@/components/TechStackSection";
import { SecuritySection } from "@/components/SecuritySection";
import { ContributingSection } from "@/components/ContributingSection";
import { BuiltBySection } from "@/components/BuiltBySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden font-sans">
      <Header />
      <main className="relative z-10 pt-16">
        <HeroSection />
        <ProblemSection />
        <section id="architecture"><ArchitectureSection /></section>
        <section id="features"><FeaturesSection /></section>
        <InterfacesSection />
        <QuickStartSection />
        <CliCommandsSection />
        <ConfigSection />
        <TechStackSection />
        <section id="security"><SecuritySection /></section>
        <ContributingSection />
        <BuiltBySection />
      </main>
      <Footer />
    </div>
  );
}
