import { motion } from "framer-motion";
import { SiLinkedin, SiX, SiYoutube, SiGithub } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <a href="/" className="text-2xl font-bold text-white mb-6 block font-outfit tracking-tight">
              ASKLENA<span className="text-purple-500">.</span>
            </a>
            <p className="text-zinc-500 max-w-xs mb-8 leading-relaxed">
              The world's most human-like AI voice agents for enterprise customer engagement.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<SiX />} />
              <SocialLink href="#" icon={<SiLinkedin />} />
              <SocialLink href="#" icon={<SiGithub />} />
              <SocialLink href="#" icon={<SiYoutube />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-outfit">Solutions</h4>
            <ul className="space-y-4">
              <FooterLink href="#">Healthcare</FooterLink>
              <FooterLink href="#">Logistics</FooterLink>
              <FooterLink href="#">Finance</FooterLink>
              <FooterLink href="#">Ecommerce</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-outfit">Product</h4>
            <ul className="space-y-4">
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Security</FooterLink>
              <FooterLink href="#">API Docs</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 font-outfit">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-600 text-sm">
            © {currentYear} Asklena AI. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-zinc-600 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-zinc-500 hover:text-purple-400 transition-colors duration-300">
        {children}
      </a>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
