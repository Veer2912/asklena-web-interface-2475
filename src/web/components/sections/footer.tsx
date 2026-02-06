import { Link } from "wouter";
import { SiLinkedin, SiX, SiYoutube, SiGithub } from "react-icons/si";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0e27] border-t border-white/10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm" />
              </div>
              <span>Lena</span>
            </Link>
            <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
              Empowering enterprises with human-sounding AI voice agents. Delivering exceptional customer experiences at scale.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <FooterLink href="/features">Features</FooterLink>
              <FooterLink href="/solutions">Solutions</FooterLink>
              <FooterLink href="/pricing">Pricing</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <SocialLink href="#" icon={<SiX />} />
              <SocialLink href="#" icon={<SiLinkedin />} />
              <SocialLink href="#" icon={<SiGithub />} />
            </div>
            <p className="text-zinc-500 text-sm">contact@asklena.ai</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {currentYear} Lena AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-zinc-400 hover:text-cyan-400 transition-colors text-sm">
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a href={href} className="text-zinc-400 hover:text-white transition-colors text-xl">
      {icon}
    </a>
  );
}
