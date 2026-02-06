import { Suspense, lazy } from "react";
import { Navbar } from "@/components/sections/navbar";
import { MouseFollower } from "@/components/mouse-follower";
import { Hero } from "@/components/sections/hero";

const VoiceAgentPods = lazy(() => import("@/components/sections/voice-agent-pods").then(m => ({ default: m.VoiceAgentPods })));
const VoiceAnalytics = lazy(() => import("@/components/sections/voice-analytics").then(m => ({ default: m.VoiceAnalytics })));
const AgentEvolution = lazy(() => import("@/components/sections/agent-evolution").then(m => ({ default: m.AgentEvolution })));
const ConversationalTimeline = lazy(() => import("@/components/sections/conversational-timeline").then(m => ({ default: m.ConversationalTimeline })));
const MilestoneTimeline = lazy(() => import("@/components/sections/milestone-timeline").then(m => ({ default: m.MilestoneTimeline })));
const StatsSection = lazy(() => import("@/components/sections/stats-section").then(m => ({ default: m.StatsSection })));
const AgentComparison = lazy(() => import("@/components/sections/agent-comparison").then(m => ({ default: m.AgentComparison })));
const AdvantageMatrix = lazy(() => import("@/components/sections/advantage-matrix").then(m => ({ default: m.AdvantageMatrix })));
const LiveDemo = lazy(() => import("@/components/sections/live-demo").then(m => ({ default: m.LiveDemo })));
const ConversationWeaver = lazy(() => import("@/components/sections/conversation-weaver").then(m => ({ default: m.ConversationWeaver })));
const NeuralConsciousness = lazy(() => import("@/components/sections/neural-consciousness").then(m => ({ default: m.NeuralConsciousness })));
const IntelligenceLayers = lazy(() => import("@/components/sections/intelligence-layers").then(m => ({ default: m.IntelligenceLayers })));
const VoiceSpectrum = lazy(() => import("@/components/sections/voice-spectrum").then(m => ({ default: m.VoiceSpectrum })));
const VoiceStreamVisualizer = lazy(() => import("@/components/sections/voice-stream-visualizer").then(m => ({ default: m.VoiceStreamVisualizer })));
const KeyFeatures = lazy(() => import("@/components/sections/key-features").then(m => ({ default: m.KeyFeatures })));
const IndustryGrid = lazy(() => import("@/components/sections/industry-grid").then(m => ({ default: m.IndustryGrid })));
const IntegrationShowcase = lazy(() => import("@/components/sections/integration-showcase").then(m => ({ default: m.IntegrationShowcase })));
const UseCases = lazy(() => import("@/components/sections/use-cases").then(m => ({ default: m.UseCases })));
const SecurityTrust = lazy(() => import("@/components/sections/security-trust").then(m => ({ default: m.SecurityTrust })));
const VoiceAgentSandbox = lazy(() => import("@/components/sections/voice-agent-sandbox").then(m => ({ default: m.VoiceAgentSandbox })));
const PersonalityShowcase = lazy(() => import("@/components/sections/personality-showcase").then(m => ({ default: m.PersonalityShowcase })));
const EmotionalIntelligence = lazy(() => import("@/components/sections/emotional-intelligence").then(m => ({ default: m.EmotionalIntelligence })));
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
        <AdvantageMatrix />
        <LiveDemo />
        <ConversationWeaver />
        <NeuralConsciousness />
        <IntelligenceLayers />
        <VoiceSpectrum />
        <VoiceStreamVisualizer />
        <KeyFeatures />
        <IndustryGrid />
        <UseCases />
        <IntegrationShowcase />
        <SecurityTrust />
        <VoiceAgentSandbox />
        <PersonalityShowcase />
        <EmotionalIntelligence />
        <VoiceAgentPods />
        <VoiceAnalytics />
        <AgentEvolution />
        <ConversationalTimeline />
        <MilestoneTimeline />
        <FinalCTA />
        <Footer />
      </Suspense>
    </main>
  );
}
