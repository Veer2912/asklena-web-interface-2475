import { motion } from "framer-motion";
import { SiLinkedin, SiX, SiYoutube, SiGithub } from "react-icons/si";
import { Mail, ArrowRight, Globe2, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-12 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <a href="/" className="text-3xl font-bold text-white tracking-tighter uppercase">
              ASKLENA<span className="text-purple-500">.</span>
            </a>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-sm">
              The world's most human-like AI voice agents for enterprise customer engagement. Delivering sub-200ms latency and deep emotional intelligence.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<SiX />} />
              <SocialLink href="#" icon={<SiLinkedin />} />
              <SocialLink href="#" icon={<SiGithub />} />
              <SocialLink href="#" icon={<SiYoutube />} />
            </div>
            
            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3 text-zinc-500 text-sm">
                <Globe2 className="w-4 h-4 text-purple-500" />
                <span>Global Headquaters: San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500 text-sm">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>+1 (888) ASKLENA-AI</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-500 text-sm">
                <MessageSquare className="w-4 h-4 text-pink-500" />
                <span>support@asklena.ai</span>
              </div>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-8">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Solutions</h4>
              <ul className="space-y-4">
                <FooterLink href="#">Healthcare</FooterLink>
                <FooterLink href="#">Logistics</FooterLink>
                <FooterLink href="#">Finance</FooterLink>
                <FooterLink href="#">Education</FooterLink>
                <FooterLink href="#">Ecommerce</FooterLink>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-4">
                <FooterLink href="#">Platform</FooterLink>
                <FooterLink href="#">Pricing</FooterLink>
                <FooterLink href="#">API Docs</FooterLink>
                <FooterLink href="#">Security</FooterLink>
                <FooterLink href="#">Careers</FooterLink>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-white font-bold text-lg mb-4">Neural Newsletter</h4>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed">
                  Get the latest updates on generative voice AI and enterprise automation.
                </p>
                
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full h-14 bg-black border border-white/5 rounded-2xl pl-12 pr-4 text-white text-sm focus:outline-none focus:border-purple-500/50 transition-all"
                  />
                  <button className="absolute right-2 top-2 h-10 w-10 bg-white rounded-xl flex items-center justify-center text-black hover:bg-zinc-200 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[10px] text-zinc-700 mt-4 font-bold uppercase tracking-widest">
                  NO SPAM. JUST PURE INTELLIGENCE.
                </p>
              </div>
              
              {/* Background Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all duration-500" />
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">99.9% Uptime</span>
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Operational Status</span>
              </div>
              <div className="w-px h-8 bg-white/5" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">SOC 2 TYPE II</span>
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Security Certified</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-600 text-xs font-mono uppercase tracking-widest">
            © {currentYear} ASKLENA AI ENGINE v4.2. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-zinc-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Terms</a>
            <a href="#" className="text-zinc-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-zinc-500 hover:text-purple-400 transition-all duration-300 text-sm flex items-center group">
        <span className="w-0 group-hover:w-2 h-px bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300" />
        {children}
      </a>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="w-12 h-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 shadow-xl"
    >
      <div className="text-xl">
        {icon}
      </div>
    </a>
  );
}
