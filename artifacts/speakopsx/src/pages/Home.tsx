import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { OwnershipSection } from "@/components/OwnershipSection";
import { VisionSection } from "@/components/VisionSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <OwnershipSection />
      </main>
      <Footer />
    </div>
  );
}
