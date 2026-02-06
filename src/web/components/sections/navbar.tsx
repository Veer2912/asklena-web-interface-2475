import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export function Navbar() {
  const [location] = useLocation();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl border border-white/10 bg-[#0a0e27]/80 backdrop-blur-xl">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm" />
            </div>
            <span>Lena</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/features" active={location === "/features"}>Features</NavLink>
            <NavLink href="/solutions" active={location === "/solutions"}>Solutions</NavLink>
            <NavLink href="/pricing" active={location === "/pricing"}>Pricing</NavLink>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/pricing">
            <Button className="bg-white text-black hover:bg-zinc-200 font-bold rounded-xl px-6 h-11 transition-all">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link 
      href={href} 
      className={`text-sm font-medium transition-all duration-300 ${
        active ? 'text-cyan-400' : 'text-zinc-400 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
}
