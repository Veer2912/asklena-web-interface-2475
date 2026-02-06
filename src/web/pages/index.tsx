import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { IndustryGrid } from "@/components/sections/industry-grid";
import { StatsSection } from "@/components/sections/stats-section";
import { AgentComparison } from "@/components/sections/agent-comparison";
import { LiveDemo } from "@/components/sections/live-demo";
import { KeyFeatures } from "@/components/sections/key-features";
import { IntegrationShowcase } from "@/components/sections/integration-showcase";
import { UseCases } from "@/components/sections/use-cases";
import { SecurityTrust } from "@/components/sections/security-trust";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-black selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <StatsSection />
      <AgentComparison />
      <LiveDemo />
      <KeyFeatures />
      <UseCases />
      <IntegrationShowcase />
      <SecurityTrust />
      <IndustryGrid />
      <FinalCTA />
      <Footer />
    </main>
  );
}
