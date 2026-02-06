import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "../sound-provider";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const { isMuted, toggleMute } = useSound();
  const [location] = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <nav className="flex items-center justify-between w-full max-w-7xl px-6 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-2xl pointer-events-auto">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-xl font-black text-white tracking-tighter flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            ASKLENA
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/solutions" active={location === "/solutions"}>Solutions</NavLink>
            <NavLink href="/features" active={location === "/features"}>Features</NavLink>
            <NavLink href="/pricing" active={location === "/pricing"}>Pricing</NavLink>
            <NavLink href="https://docs.asklena.ai" isExternal>Docs</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-all"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
          <Button variant="ghost" className="hidden sm:block text-sm font-bold text-zinc-400 hover:text-white">
            Log in
          </Button>
          <Button size="sm" className="bg-white text-black hover:bg-cyan-50 font-black rounded-full px-6 h-10 transition-all">
            Get Started
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}

function NavLink({ href, children, active, isExternal }: { href: string; children: React.ReactNode; active?: boolean; isExternal?: boolean }) {
  if (isExternal) {
    return (
      <a 
        href={href} 
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-bold text-zinc-500 hover:text-white transition-all duration-300"
      >
        {children}
      </a>
    );
  }

  return (
    <Link 
      href={href} 
      className={`text-sm font-bold transition-all duration-300 ${
        active ? 'text-cyan-400' : 'text-zinc-500 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}
