import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/sections/navbar";
import { MouseFollower } from "@/components/mouse-follower";
import { Hero } from "@/components/sections/hero";
import { ChevronRight, Zap, Shield, BarChart3, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GlowingCard } from "@/components/ui/glowing-card";

const StatsSection = lazy(() => import("@/components/sections/stats-section").then(m => ({ default: m.StatsSection })));
const LiveDemo = lazy(() => import("@/components/sections/live-demo").then(m => ({ default: m.LiveDemo })));
const NeuralConsciousness = lazy(() => import("@/components/sections/neural-consciousness").then(m => ({ default: m.NeuralConsciousness })));
const IntelligenceLayers = lazy(() => import("@/components/sections/intelligence-layers").then(m => ({ default: m.IntelligenceLayers })));
const VoiceStreamVisualizer = lazy(() => import("@/components/sections/voice-stream-visualizer").then(m => ({ default: m.VoiceStreamVisualizer })));
const FinalCTA = lazy(() => import("@/components/sections/final-cta").then(m => ({ default: m.FinalCTA })));
const Footer = lazy(() => import("@/components/sections/footer").then(m => ({ default: m.Footer })));

export default function Index() {
  return (
    <main className="min-h-screen bg-black selection:bg-cyan-500/30 overflow-x-hidden">
      <MouseFollower />
      <Navbar />
      <Hero />

      {/* Futuristic Transition Divider */}
      <div className="relative h-40 z-20 -mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            animate={{ 
              width: ["0%", "100%", "0%"],
              opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="h-[1px] bg-cyan-400"
          />
        </div>
      </div>

      {/* Primary Navigation CTAs */}
      <section className="py-20 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            title="Explore Our Universe" 
            subtitle="Built for the bold"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickLink 
              href="/features" 
              title="Advanced Features" 
              description="Deep dive into our advanced AI capabilities and neural engine."
              icon={<Zap className="w-8 h-8 text-cyan-400" />}
              color="from-cyan-500 to-blue-600"
            />
            <QuickLink 
              href="/solutions" 
              title="Industry Solutions" 
              description="Discover how Lena transforms Healthcare, Finance, and more."
              icon={<Shield className="w-8 h-8 text-purple-400" />}
              color="from-purple-500 to-pink-600"
            />
            <QuickLink 
              href="/pricing" 
              title="Flexible Pricing" 
              description="Transparent, pay-as-you-go pricing for any scale."
              icon={<BarChart3 className="w-8 h-8 text-emerald-400" />}
              color="from-emerald-500 to-teal-600"
            />
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-screen bg-black flex items-center justify-center">
        <div className="w-20 h-20 border-t-2 border-cyan-500 rounded-full animate-spin" />
      </div>}>
        <div className="relative space-y-0">
          <StatsSection />
          <SectionDivider />
          <VoiceStreamVisualizer />
          <SectionDivider flipped />
          <LiveDemo />
          <SectionDivider />
          <NeuralConsciousness />
          <SectionDivider flipped />
          <IntelligenceLayers />
          <SectionDivider />
          <FinalCTA />
        </div>
        <Footer />
        
        {/* Infinite Scroll Signal */}
        <div className="py-20 flex flex-col items-center justify-center opacity-20">
          <div className="flex gap-1 h-8 items-center mb-4">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [4, 20, 4] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
                className="w-1 bg-cyan-500 rounded-full"
              />
            ))}
          </div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white">Signal End</span>
        </div>
      </Suspense>

      {/* Sticky Floating CTA */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed bottom-10 right-10 z-50 hidden lg:block"
      >
        <Link href="/pricing">
          <Button className="h-14 px-8 rounded-full bg-cyan-500 text-black font-bold hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] group">
            Start Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </main>
  );
}

function SectionDivider({ flipped = false }: { flipped?: boolean }) {
  return (
    <div className={`relative h-32 w-full overflow-hidden ${flipped ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full fill-white/[0.02]">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
      </svg>
    </div>
  );
}

function QuickLink({ href, title, description, icon, color }: { href: string; title: string; description: string; icon: React.ReactNode; color: string }) {
  return (
    <Link href={href}>
      <div className="cursor-pointer group h-full">
        <GlowingCard className="h-full">
          <div className="relative z-10">
            <div className={`mb-8 p-4 rounded-3xl bg-gradient-to-br ${color} bg-opacity-10 border border-white/5 w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
              {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              {title} <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform text-cyan-400" />
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed group-hover:text-zinc-200 transition-colors">
              {description}
            </p>
          </div>
        </GlowingCard>
      </div>
    </Link>
  );
}

