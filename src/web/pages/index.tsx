import { Suspense, lazy } from "react";
import { Navbar } from "@/components/sections/navbar";
import { MouseFollower } from "@/components/mouse-follower";
import { Hero } from "@/components/sections/hero";

const VoiceAgentPods = lazy(() => import("@/components/sections/voice-agent-pods").then(m => ({ default: m.VoiceAgentPods })));
const VoiceAnalytics = lazy(() => import("@/components/sections/voice-analytics").then(m => ({ default: m.VoiceAnalytics })));
const AgentEvolution = lazy(() => import("@/components/sections/agent-evolution").then(m => ({ default: m.AgentEvolution })));
const ConversationalTimeline = lazy(() => import("@/components/sections/conversational-timeline").then(m => ({ default: m.ConversationalTimeline })));
const StatsSection = lazy(() => import("@/components/sections/stats-section").then(m => ({ default: m.StatsSection })));
const AgentComparison = lazy(() => import("@/components/sections/agent-comparison").then(m => ({ default: m.AgentComparison })));
const LiveDemo = lazy(() => import("@/components/sections/live-demo").then(m => ({ default: m.LiveDemo })));
const NeuralConsciousness = lazy(() => import("@/components/sections/neural-consciousness").then(m => ({ default: m.NeuralConsciousness })));
const VoiceStreamVisualizer = lazy(() => import("@/components/sections/voice-stream-visualizer").then(m => ({ default: m.VoiceStreamVisualizer })));
const KeyFeatures = lazy(() => import("@/components/sections/key-features").then(m => ({ default: m.KeyFeatures })));
const IntegrationShowcase = lazy(() => import("@/components/sections/integration-showcase").then(m => ({ default: m.IntegrationShowcase })));
const UseCases = lazy(() => import("@/components/sections/use-cases").then(m => ({ default: m.UseCases })));
const SecurityTrust = lazy(() => import("@/components/sections/security-trust").then(m => ({ default: m.SecurityTrust })));
const FinalCTA = lazy(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("@/components/sections/footer").then(m => ({ default: m.Footer })));

export default function Index() {
  return (
    <main className="min-h-screen bg-black selection:bg-purple-500/30">
      <MouseFollower />
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <StatsSection />
        <AgentComparison />
        <LiveDemo />
        <NeuralConsciousness />
        <VoiceStreamVisualizer />
        <KeyFeatures />
        <UseCases />
        <IntegrationShowcase />
        <SecurityTrust />
        <VoiceAgentPods />
        <VoiceAnalytics />
        <AgentEvolution />
        <ConversationalTimeline />
        <FinalCTA />
        <Footer />
      </Suspense>
    </main>
  );
}
