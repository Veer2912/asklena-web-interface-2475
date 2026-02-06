import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Zap, Shield, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveDemo = lazy(() => import("@/components/sections/live-demo").then(m => ({ default: m.LiveDemo })));
const NeuralConsciousness = lazy(() => import("@/components/sections/neural-consciousness").then(m => ({ default: m.NeuralConsciousness })));
const Footer = lazy(() => import("@/components/sections/footer").then(m => ({ default: m.Footer })));

export default function Index() {
  return (
    <main className="min-h-screen bg-[#0a0e27] text-white selection:bg-cyan-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Primary Navigation CTAs */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickLink 
              href="/features" 
              title="Advanced Features" 
              description="Deep dive into our advanced AI capabilities and neural engine."
              icon={<Zap className="w-6 h-6" />}
              accent="text-cyan-400"
            />
            <QuickLink 
              href="/solutions" 
              title="Industry Solutions" 
              description="Discover how Lena transforms Healthcare, Finance, and more."
              icon={<Shield className="w-6 h-6" />}
              accent="text-purple-400"
            />
            <QuickLink 
              href="/pricing" 
              title="Flexible Pricing" 
              description="Transparent, pay-as-you-go pricing for any scale."
              icon={<BarChart3 className="w-6 h-6" />}
              accent="text-emerald-400"
            />
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <div className="space-y-32 pb-32">
          <LiveDemo />
          <NeuralConsciousness />
          
          {/* Final Call to Action */}
          <section className="px-6">
            <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Hear the Future?</h2>
              <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
                Join 147+ companies already using Lena to revolutionize their customer experience.
              </p>
              <Link href="/pricing">
                <Button size="lg" className="h-16 px-12 bg-white text-black hover:bg-zinc-200 rounded-2xl font-bold text-lg">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </section>
        </div>
        <Footer />
      </Suspense>
    </main>
  );
}

function QuickLink({ href, title, description, icon, accent }: { href: string; title: string; description: string; icon: React.ReactNode; accent: string }) {
  return (
    <Link href={href}>
      <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all cursor-pointer h-full flex flex-col">
        <div className={`mb-6 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${accent} group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
          {title}
          <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </h3>
        <p className="text-zinc-500 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
}

