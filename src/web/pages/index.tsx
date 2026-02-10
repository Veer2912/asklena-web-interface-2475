import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { StatsSection } from "@/components/sections/stats-section";
import { AgentPlayground } from "@/components/sections/agent-playground";
import { ConversationalAgentsSection } from "@/components/sections/conversational-agents";
import { IntelligenceLayers } from "@/components/sections/intelligence-layers";
import { KeyFeatures } from "@/components/sections/key-features";
import { IntegrationShowcase } from "@/components/sections/integration-showcase";
import { SecurityTrust } from "@/components/sections/security-trust";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";

export default function Index() {
  return (
    <main className="min-h-screen bg-black selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <StatsSection />
      <AgentPlayground />
      <ConversationalAgentsSection />
      <IntelligenceLayers />
      <KeyFeatures />
      <IntegrationShowcase />
      <SecurityTrust />
      <FinalCTA />
      <Footer />
    </main>
  );
}
