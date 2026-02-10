import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX, Menu, X, ChevronRight } from "lucide-react";
import { useSound } from "../sound-provider";

// ============================================================================
// MORPHING GLASS NAVBAR - Adaptive navbar with premium glass morphism
// ============================================================================

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
];

// Animated Logo Component
function AnimatedLogo() {
  return (
    <a href="/" className="relative group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-2"
      >
        {/* Logo mark */}
        <div className="relative w-8 h-8">
          {/* Animated rings */}
          <motion.div
            className="absolute inset-0 rounded-lg border border-cyan-500/50"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-1 rounded-md border border-purple-500/50"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Core */}
          <div className="absolute inset-2 rounded bg-gradient-to-br from-cyan-500 to-purple-600" />
          
          {/* Pulse */}
          <motion.div
            className="absolute inset-2 rounded bg-cyan-400"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
        
        {/* Text */}
        <span className="text-xl font-bold text-white tracking-tight">
          ASKLENA<span className="text-cyan-400">.</span>
        </span>
      </motion.div>
      
      {/* Hover glow */}
      <motion.div
        className="absolute -inset-2 rounded-xl bg-cyan-500/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity -z-10"
      />
    </a>
  );
}

// Nav Link with hover effect
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
      whileHover={{ y: -2 }}
    >
      {children}
      
      {/* Underline animation */}
      <motion.div
        className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-cyan-500 to-purple-500"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Hover dot */}
      <motion.div
        className="absolute top-0 right-2 w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
      />
    </motion.a>
  );
}

// Mobile Menu
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />
          
          {/* Menu panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 right-0 bottom-0 w-80 bg-zinc-950 border-l border-white/10 z-50 p-6"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Logo */}
            <div className="mb-12">
              <AnimatedLogo />
            </div>
            
            {/* Links */}
            <nav className="space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 text-white hover:bg-white/10 transition-colors group"
                >
                  <span className="font-medium">{link.name}</span>
                  <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </nav>
            
            {/* CTA */}
            <div className="absolute bottom-6 left-6 right-6 space-y-3">
              <Button 
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl h-12"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                className="w-full border-white/10 text-zinc-400 hover:text-white rounded-xl h-12"
              >
                Log in
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Navbar() {
  const { isMuted, toggleMute } = useSound();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none"
      >
        <motion.nav
          animate={{
            backgroundColor: scrolled ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.4)",
            backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
            borderColor: scrolled ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)",
            boxShadow: scrolled 
              ? "0 0 30px rgba(6,182,212,0.1), 0 10px 40px rgba(0,0,0,0.3)" 
              : "none",
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-between w-full max-w-6xl px-4 md:px-6 py-3 rounded-2xl border pointer-events-auto"
        >
          {/* Logo */}
          <AnimatedLogo />
          
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>
          
          {/* Right side */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Sound toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </motion.button>
            
            {/* Login - desktop only */}
            <a 
              href="/login" 
              className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Log in
            </a>
            
            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="sm" 
                className="hidden sm:flex bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full px-5 border-0 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-shadow"
              >
                Get Started
              </Button>
            </motion.div>
            
            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
