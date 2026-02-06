import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/sections/navbar";
import { MouseFollower } from "@/components/mouse-follower";
import { Hero } from "@/components/sections/hero";
import { ChevronRight, Zap, Shield, BarChart3 } from "lucide-react";

const StatsSection = lazy(() => import("@/components/sections/stats-section").then(m => ({ default: m.StatsSection })));
const LiveDemo = lazy(() => import("@/components/sections/live-demo").then(m => ({ default: m.LiveDemo })));
const NeuralConsciousness = lazy(() => import("@/components/sections/neural-consciousness").then(m => ({ default: m.NeuralConsciousness })));
const IntelligenceLayers = lazy(() => import("@/components/sections/intelligence-layers").then(m => ({ default: m.IntelligenceLayers })));
const VoiceStreamVisualizer = lazy(() => import("@/components/sections/voice-stream-visualizer").then(m => ({ default: m.VoiceStreamVisualizer })));
const FinalCTA = lazy(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("@/components/sections/footer").then(m => ({ default: m.Footer })));

export default function Index() {
  return (
    <main className="min-h-screen bg-black selection:bg-cyan-500/30">
      <MouseFollower />
      <Navbar />
      <Hero />

      {/* Primary Navigation CTAs */}
      <section className="py-20 relative z-20 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <QuickLink 
              href="/features" 
              title="Explore Features" 
              description="Deep dive into our advanced AI capabilities and neural engine."
              icon={<Zap className="w-6 h-6 text-cyan-400" />}
              color="from-cyan-500/20 to-blue-500/20"
            />
            <QuickLink 
              href="/solutions" 
              title="See Solutions" 
              description="Discover how Lena transforms Healthcare, Finance, and more."
              icon={<Shield className="w-6 h-6 text-purple-400" />}
              color="from-purple-500/20 to-pink-500/20"
            />
            <QuickLink 
              href="/pricing" 
              title="View Pricing" 
              description="Transparent, pay-as-you-go pricing for any scale."
              icon={<BarChart3 className="w-6 h-6 text-emerald-400" />}
              color="from-emerald-500/20 to-teal-500/20"
            />
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-screen bg-black" />}>
        <StatsSection />
        <VoiceStreamVisualizer />
        <LiveDemo />
        <NeuralConsciousness />
        <IntelligenceLayers />
        <FinalCTA />
        <Footer />
      </Suspense>
    </main>
  );
}

function QuickLink({ href, title, description, icon, color }: { href: string; title: string; description: string; icon: React.ReactNode; color: string }) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl cursor-pointer hover:border-white/20 transition-all duration-300"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]`} />
        <div className="relative z-10">
          <div className="mb-6 p-3 rounded-2xl bg-white/5 border border-white/10 w-fit group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            {title} <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
            {description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
