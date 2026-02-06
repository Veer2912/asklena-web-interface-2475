import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "../sound-provider";

export function Navbar() {
  const { isMuted, toggleMute } = useSound();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none"
    >
      <nav className="flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl pointer-events-auto">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold text-white font-outfit tracking-tight">
            ASKLENA<span className="text-cyan-500">.</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="#">Solutions</NavLink>
            <NavLink href="#">Features</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">Docs</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="text-zinc-400 hover:text-white rounded-full"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </Button>
          <a href="#" className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            Log in
          </a>
          <Button size="sm" className="bg-white text-black hover:bg-zinc-200 rounded-full px-5">
            Get Started
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300"
    >
      {children}
    </a>
  );
}
