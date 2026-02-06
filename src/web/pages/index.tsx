import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LucidePhone, LucideArrowRight, LucideCheckCircle2, LucideGlobe, LucideShieldCheck, LucideZap, LucideUsers, LucideActivity, LucideMessageSquare, LucidePlus, LucidePlay, LucideStethoscope, LucideTruck, LucideLandmark, LucideGraduationCap, LucideMonitor, LucideRss, LucideBriefcase, LucideCalendar, LucideUserCheck, LucideCreditCard, LucideBarChart3, LucideCpu, LucideNetwork, LucideLayers } from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-white/10 bg-black/20">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
          <LucidePhone className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-bold tracking-tighter text-white">Asklena</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
        <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
        <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
        <a href="#demo" className="hover:text-white transition-colors">Live Demo</a>
        <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="text-white hover:bg-white/10 hidden sm:flex">Log in</Button>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">Get Started</Button>
      </div>
    </nav>
  );
};

const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: any[] = [];
    const particleCount = 60;
    const connectionDistance = 150;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.5)";
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle(canvas.width, canvas.height));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p, i) => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.2 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-40" />;
};

const MorphingText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap justify-center gap-x-[0.2em] overflow-hidden">
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block whitespace-nowrap">
          {word.split("").map((char, j) => (
            <motion.span
              key={j}
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: [20, 0, -5, 0],
                opacity: 1,
                scaleY: [1, 1.2, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5,
                delay: (i * word.length + j) * 0.05,
                ease: "easeInOut"
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </div>
  );
};

const FloatingShapes = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <motion.div
        animate={{ 
          x: mousePos.x * 0.5, 
          y: mousePos.y * 0.5,
          rotateZ: 45
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 border border-primary/30 rounded-lg backdrop-blur-sm"
      />
      <motion.div
        animate={{ 
          x: -mousePos.x * 0.8, 
          y: -mousePos.y * 0.8,
          rotateZ: -15
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-blue-500/20 rounded-full backdrop-blur-sm"
      />
      <motion.div
        animate={{ 
          x: mousePos.x, 
          y: -mousePos.y,
          rotateZ: 120
        }}
        className="absolute top-1/3 right-1/3 w-24 h-24 border border-purple-500/30 rotate-45 backdrop-blur-sm"
      />
    </div>
  );
};

const Hero = () => {
  const [index, setIndex] = useState(0);
  const titles = [
    "Voice AI Agents Built for Enterprise",
    "Human-Like Conversations at Scale",
    "Intelligent Voice Solutions for Global Business"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-black">
      <NeuralNetwork />
      <FloatingShapes />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-1 pointer-events-none" />

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/30 rounded-full border border-cyan-500/30 backdrop-blur-md"
            animate={{ 
              boxShadow: ["0 0 0px rgba(34, 211, 238, 0)", "0 0 20px rgba(34, 211, 238, 0.3)", "0 0 0px rgba(34, 211, 238, 0)"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Autonomous Intelligence
          </motion.div>
          
          <div className="h-[180px] md:h-[220px] flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)", scale: 1.1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none chromatic-aberration"
              >
                <MorphingText text={titles[index]} />
              </motion.h1>
            </AnimatePresence>
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-10 leading-relaxed font-light">
            Revolutionizing enterprise communication with neural voice synthesis that's indistinguishable from reality. Deploy in minutes, scale to millions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Button size="lg" className="relative h-16 px-10 text-xl bg-black text-white rounded-xl border border-white/10 flex items-center gap-2 overflow-hidden hologram-effect">
                <span className="relative z-10 flex items-center gap-2">
                  Launch Your Agent
                  <LucideZap className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </Button>
            </motion.div>
            
            <Button size="lg" variant="ghost" className="h-16 px-10 text-lg text-white/70 hover:text-white transition-all hover:bg-white/5 border border-transparent hover:border-white/10 rounded-xl">
              System Architecture
            </Button>
          </div>
        </motion.div>
        
        {/* Floating Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: "Latency", value: "<150ms", icon: LucideActivity },
            { label: "Accuracy", value: "99.9%", icon: LucideCheckCircle2 },
            { label: "Scalability", value: "Infinite", icon: LucideLayers },
            { label: "Languages", value: "100+", icon: LucideGlobe },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="glass-card p-4 rounded-xl border-white/5 flex flex-col items-center gap-1"
            >
              <stat.icon className="w-5 h-5 text-cyan-400 mb-1" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/30">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Liquid Swipe Background Effect (Simulated with Gradient) */}
      <motion.div 
        className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1)_0%,transparent_50%)]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

const IndustryShowcase = () => {
  const industries = [
    { icon: LucideStethoscope, name: "Healthcare", desc: "Automated patient scheduling, follow-ups, and HIPAA-compliant medical inquiries." },
    { icon: LucideTruck, name: "Logistics", desc: "Real-time fleet coordination, delivery status updates, and automated driver support." },
    { icon: LucideLandmark, name: "Finance", desc: "Secure multi-factor authentication, transaction alerts, and personalized banking advice." },
    { icon: LucideGraduationCap, name: "Education", desc: "Global student admissions, virtual tutoring support, and automated campus info." },
    { icon: LucideMonitor, name: "IT", desc: "Automated helpdesk ticketing, system monitoring alerts, and remote diagnostics." },
    { icon: LucideRss, name: "Telecommunication", desc: "Billing dispute resolution, service plan upgrades, and network status reporting." },
  ];

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.2);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="solutions" className="py-32 relative overflow-hidden bg-black">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight chromatic-aberration"
          >
            Infinite Industry Orbital
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Witness our neural agents orbiting through specialized industry clusters, providing sub-millisecond intelligence across the enterprise.
          </p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center perspective-1000">
          {/* Orbital Path (Visual Only) */}
          <div className="absolute w-[800px] h-[300px] border border-white/5 rounded-[100%] rotate-x-60" />
          
          <div className="relative w-full h-full flex items-center justify-center">
            {industries.map((ind, idx) => {
              const angle = (idx / industries.length) * Math.PI * 2 + (rotation * Math.PI) / 180;
              const x = Math.cos(angle) * 400;
              const z = Math.sin(angle) * 200;
              const scale = (z + 400) / 600; // 0.33 to 1
              const opacity = (z + 300) / 500; // fade when far

              return (
                <motion.div
                  key={idx}
                  className="absolute w-64 h-80 preserve-3d cursor-pointer group"
                  animate={{
                    x,
                    z,
                    scale,
                    opacity,
                    zIndex: Math.round(z + 200)
                  }}
                  transition={{ type: "spring", stiffness: 50, damping: 20, mass: 1 }}
                >
                  {/* Card Inner with 3D Flip */}
                  <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden">
                      <div className="w-full h-full glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center border-2 border-transparent relative overflow-hidden">
                        {/* Shimmering Rainbow Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                        
                        <div className="relative z-10">
                          <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                            <ind.icon className="w-10 h-10 text-cyan-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{ind.name}</h3>
                          <div className="w-12 h-1 bg-cyan-500/50 mx-auto rounded-full" />
                        </div>
                        
                        {/* Floating Particles Around Card */}
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            animate={{
                              y: [0, -40, 0],
                              x: [0, Math.random() * 20 - 10, 0],
                              opacity: [0, 1, 0]
                            }}
                            transition={{
                              duration: 2 + Math.random() * 2,
                              repeat: Infinity,
                              delay: Math.random() * 2
                            }}
                            style={{
                              top: Math.random() * 100 + "%",
                              left: Math.random() * 100 + "%",
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <div className="w-full h-full glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center border-2 border-cyan-500/30">
                        <div className="absolute inset-0 bg-cyan-900/20" />
                        <div className="relative z-10">
                          <p className="text-sm text-white/80 leading-relaxed mb-6">
                            {ind.desc}
                          </p>
                          <Button size="sm" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10">
                            Deploy Agent
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
    </section>
  );
};

const AgentComparison = () => {
  const [activeNode, setActiveNode] = useState<"inbound" | "outbound" | null>(null);

  const inboundFeatures = [
    "Instant Call Answering",
    "Context-Aware Routing",
    "24/7 Availability",
    "Multi-intent Recognition",
    "Automated Ticketing"
  ];

  const outboundFeatures = [
    "Lead Qualification",
    "Appointment Scheduling",
    "Payment Reminders",
    "Customer Feedback Surveys",
    "Strategic Re-engagement"
  ];

  return (
    <section id="agents" className="py-32 relative overflow-hidden bg-black">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 chromatic-aberration"
          >
            Neural Agent Architectures
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Our neural nodes are optimized for specific conversational directions, ensuring peak performance whether receiving or initiating interactions.
          </p>
        </div>

        <div className="relative h-[500px] flex items-center justify-center">
          {/* Central Neural Hub */}
          <motion.div 
            className="relative z-20 w-32 h-32 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center backdrop-blur-xl"
            animate={{ 
              boxShadow: ["0 0 20px rgba(34, 211, 238, 0.2)", "0 0 60px rgba(34, 211, 238, 0.5)", "0 0 20px rgba(34, 211, 238, 0.2)"],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <LucideNetwork className="w-12 h-12 text-cyan-400" />
            <div className="absolute inset-0 rounded-full border border-cyan-400/50 animate-ping" style={{ animationDuration: '3s' }} />
          </motion.div>

          {/* SVG Energy Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="flow-inbound" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="flow-outbound" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0" />
                <stop offset="50%" stopColor="#d946ef" stopOpacity="1" />
                <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            <motion.path
              d="M 200 250 Q 400 250 500 250"
              fill="none"
              stroke="url(#flow-inbound)"
              strokeWidth="2"
              strokeDasharray="10 10"
              animate={{ strokeDashoffset: [100, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="md:block hidden"
              style={{ transform: 'translateX(calc(50% - 350px))' }}
            />
            
            <motion.path
              d="M 500 250 Q 600 250 800 250"
              fill="none"
              stroke="url(#flow-outbound)"
              strokeWidth="2"
              strokeDasharray="10 10"
              animate={{ strokeDashoffset: [0, 100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="md:block hidden"
              style={{ transform: 'translateX(calc(50% - 450px))' }}
            />
          </svg>

          <div className="absolute left-[10%] md:left-[20%] top-1/2 -translate-y-1/2 z-30">
            <motion.div
              onClick={() => setActiveNode(activeNode === "inbound" ? null : "inbound")}
              className={`relative cursor-pointer group transition-all duration-500 ${activeNode === "inbound" ? "scale-110" : "hover:scale-105"}`}
            >
              <div className={`w-24 h-24 rounded-2xl flex items-center justify-center border transition-all duration-500 ${activeNode === "inbound" ? "bg-cyan-500/20 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)]" : "bg-white/5 border-white/10 group-hover:border-cyan-400/50"}`}>
                <LucideMessageSquare className={`w-10 h-10 transition-colors ${activeNode === "inbound" ? "text-cyan-400" : "text-white/40 group-hover:text-cyan-400/70"}`} />
              </div>
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                <div className="font-bold text-xl text-white">Inbound</div>
                <div className="text-xs text-cyan-400/60 uppercase tracking-widest mt-1 font-mono">Receiver Node</div>
              </div>
              
              <AnimatePresence>
                {activeNode === "inbound" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="absolute right-full mr-12 top-0 w-64 glass-card p-6 rounded-3xl border-cyan-500/30"
                  >
                    <h4 className="text-lg font-bold mb-4 text-cyan-400">Core Capabilities</h4>
                    <ul className="space-y-3">
                      {inboundFeatures.map((f, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3 text-sm text-white/70"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          <div className="absolute right-[10%] md:right-[20%] top-1/2 -translate-y-1/2 z-30">
            <motion.div
              onClick={() => setActiveNode(activeNode === "outbound" ? null : "outbound")}
              className={`relative cursor-pointer group transition-all duration-500 ${activeNode === "outbound" ? "scale-110" : "hover:scale-105"}`}
            >
              <div className={`w-24 h-24 rounded-2xl flex items-center justify-center border transition-all duration-500 ${activeNode === "outbound" ? "bg-purple-500/20 border-purple-400 shadow-[0_0_30px_rgba(217,70,239,0.4)]" : "bg-white/5 border-white/10 group-hover:border-purple-400/50"}`}>
                <LucidePhone className={`w-10 h-10 transition-colors ${activeNode === "outbound" ? "text-purple-400" : "text-white/40 group-hover:text-purple-400/70"}`} />
              </div>
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                <div className="font-bold text-xl text-white">Outbound</div>
                <div className="text-xs text-purple-400/60 uppercase tracking-widest mt-1 font-mono">Proactive Node</div>
              </div>

              <AnimatePresence>
                {activeNode === "outbound" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute left-full ml-12 top-0 w-64 glass-card p-6 rounded-3xl border-purple-500/30"
                  >
                    <h4 className="text-lg font-bold mb-4 text-purple-400">Core Capabilities</h4>
                    <ul className="space-y-3">
                      {outboundFeatures.map((f, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center gap-3 text-sm text-white/70"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(217,70,239,0.8)]" />
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </section>
  );
};

const DemoArena = () => {
  const [activePod, setActivePod] = useState(0);
  const pods = [
    { name: "Healthcare", text: "Processing patient records...", color: "cyan" },
    { name: "Finance", text: "Verifying transaction ID...", color: "purple" },
    { name: "Logistics", text: "Optimizing route path...", color: "blue" },
    { name: "IT Support", text: "Diagnosing server nodes...", color: "green" },
    { name: "Education", text: "Synthesizing lesson plan...", color: "orange" },
    { name: "Telecom", text: "Analyzing network signal...", color: "red" },
  ];

  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-32 relative overflow-hidden bg-black">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 chromatic-aberration"
          >
            Immersive Demo Arena
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Interact with our neural core as it simultaneous processes multiple industry-specific voice streams in real-time.
          </p>
        </div>

        <div className="relative h-[700px] flex items-center justify-center perspective-1000">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-[2px] h-[1000px] bg-gradient-to-t from-transparent via-cyan-500/20 to-transparent"
                style={{ transform: `rotate(${i * 30}deg)` }}
              />
            ))}
          </div>

          <motion.div 
            className="relative z-20 w-64 h-64 rounded-full border-2 border-cyan-500/30 flex items-center justify-center bg-cyan-950/20 backdrop-blur-2xl"
            animate={{ 
              boxShadow: ["0 0 40px rgba(34, 211, 238, 0.3)", "0 0 100px rgba(34, 211, 238, 0.6)", "0 0 40px rgba(34, 211, 238, 0.3)"],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="absolute inset-4 rounded-full border border-cyan-400/50 flex items-center justify-center overflow-hidden">
              <svg className="w-full h-full opacity-50" viewBox="0 0 100 100">
                <motion.path
                  d="M 10 50 Q 25 20 50 50 T 90 50"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  animate={{ 
                    d: ["M 10 50 Q 25 20 50 50 T 90 50", "M 10 50 Q 25 80 50 50 T 90 50", "M 10 50 Q 25 20 50 50 T 90 50"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.circle 
                  cx="50" cy="50" r="15" 
                  fill="rgba(34, 211, 238, 0.2)"
                  animate={{ r: [15, 25, 15] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </svg>
            </div>
            <LucideCpu className="w-16 h-16 text-cyan-400 relative z-10" />
          </motion.div>

          <div className="relative w-full h-full flex items-center justify-center preserve-3d">
            {pods.map((pod, idx) => {
              const angle = (idx / pods.length) * 360 + rotation;
              const radius = 350;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const z = Math.sin((angle * Math.PI) / 180) * radius;
              const scale = (z + radius) / (radius * 1.5) + 0.5;

              return (
                <motion.div
                  key={idx}
                  className="absolute w-48 h-64 glass-card rounded-2xl p-4 flex flex-col items-center justify-between border-cyan-500/20 cursor-pointer hover:border-cyan-400/50 transition-colors"
                  animate={{ x, z, scale, opacity: (z + radius) / (radius * 2) + 0.5 }}
                  onClick={() => setActivePod(idx)}
                >
                  <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">{pod.name}</div>
                  
                  <div className="flex-1 flex items-center gap-1 w-full justify-center">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-cyan-400/50 rounded-full"
                        animate={{ height: [10, 40, 10] }}
                        transition={{ duration: 0.5 + Math.random(), repeat: Infinity, delay: i * 0.1 }}
                      />
                    ))}
                  </div>

                  <div className="h-16 overflow-hidden relative w-full mt-4">
                    <motion.div 
                      className="absolute bottom-0 w-full text-[10px] text-white/40 font-mono"
                      animate={{ y: [-50, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      {pod.text}<br />
                      Connection secured...<br />
                      Latency: 142ms<br />
                      Node: US-EAST-1<br />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ value, suffix }: { value: string, suffix: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const isInteger = !value.includes('.');

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(timer);
      } else {
        setDisplayValue(start);
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <div className="flex items-baseline gap-1 mb-1">
      <span className="text-3xl font-bold tracking-tight">
        {isInteger ? Math.floor(displayValue) : displayValue.toFixed(1)}
      </span>
      <span className="text-primary font-bold">{suffix}</span>
    </div>
  );
};

const LiquidCapabilities = () => {
  const capabilities = [
    { icon: LucideActivity, title: "Real-time Analytics", count: "99.9", suffix: "%", desc: "Constant monitoring of neural performance." },
    { icon: LucideGlobe, title: "Multi-language", count: "100", suffix: "+", desc: "Native-level fluency in every major dialect." },
    { icon: LucideZap, title: "Ultra-low Latency", count: "150", suffix: "ms", desc: "Human-indistinguishable response times." },
    { icon: LucideShieldCheck, title: "Secure & Compliant", count: "100", suffix: "%", desc: "Bank-grade encryption and SOC2 compliance." },
    { icon: LucideUsers, title: "Natural NLP", count: "10", suffix: "B+", desc: "Billion-parameter neural training models." },
    { icon: LucideCpu, title: "Scalability", count: "1", suffix: "M+", desc: "Concurrent call handling with zero degradation." },
    { icon: LucideBriefcase, title: "Enterprise Ready", count: "500", suffix: "+", desc: "Out-of-the-box CRM and ERP integrations." },
    { icon: LucideCheckCircle2, title: "Custom Training", count: "48", suffix: "h", desc: "Rapid brand-voice synthesis and deployment." },
  ];

  return (
    <section id="capabilities" className="py-32 relative overflow-hidden bg-black">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 chromatic-aberration"
          >
            Neural Capabilities
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Our infrastructure is a living, breathing network designed for the most demanding enterprise workloads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-80 glass-card rounded-[2.5rem] p-8 overflow-hidden border-white/5 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Liquid Background Blob */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <motion.path
                    fill="url(#liquid-grad)"
                    animate={{
                      d: [
                        "M45.2,-76.3C58.9,-69.5,70.5,-57.8,78.2,-44.1C85.9,-30.4,89.7,-15.2,88.9,-0.5C88.1,14.3,82.6,28.5,74.5,41.4C66.4,54.3,55.6,65.8,42.4,73.5C29.2,81.2,14.6,85.1,-0.4,85.8C-15.4,86.5,-30.8,84.1,-44.8,76.9C-58.8,69.7,-71.4,57.7,-79.3,43.5C-87.2,29.3,-90.4,12.9,-88.4,-2.9C-86.4,-18.7,-79.1,-33.9,-68.8,-46.4C-58.5,-58.9,-45.2,-68.6,-31.4,-75.4C-17.6,-82.2,-3.8,-86.1,10.6,-86.7C25,-87.3,31.5,-83.1,45.2,-76.3Z",
                        "M48.1,-75.1C61.8,-68.2,71.9,-54.6,78.4,-40.1C84.9,-25.6,87.7,-10.3,87.1,4.9C86.5,20.1,82.4,35.3,73.5,47.8C64.6,60.3,50.8,70.1,36.1,76.5C21.4,82.9,5.7,85.9,-10.8,84.6C-27.3,83.3,-44.5,77.7,-57.8,67.6C-71.1,57.5,-80.4,42.9,-86.2,27C-92,11.1,-94.3,-6.1,-89.9,-21.2C-85.5,-36.3,-74.4,-49.3,-61,-56.3C-47.6,-63.3,-32,-64.3,-18.3,-71.2C-4.6,-78.1,7.2,-91,23.3,-91.5C39.4,-92,48.1,-75.1,48.1,-75.1Z",
                        "M45.2,-76.3C58.9,-69.5,70.5,-57.8,78.2,-44.1C85.9,-30.4,89.7,-15.2,88.9,-0.5C88.1,14.3,82.6,28.5,74.5,41.4C66.4,54.3,55.6,65.8,42.4,73.5C29.2,81.2,14.6,85.1,-0.4,85.8C-15.4,86.5,-30.8,84.1,-44.8,76.9C-58.8,69.7,-71.4,57.7,-79.3,43.5C-87.2,29.3,-90.4,12.9,-88.4,-2.9C-86.4,-18.7,-79.1,-33.9,-68.8,-46.4C-58.5,-58.9,-45.2,-68.6,-31.4,-75.4C-17.6,-82.2,-3.8,-86.1,10.6,-86.7C25,-87.3,31.5,-83.1,45.2,-76.3Z"
                      ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    transform="translate(100 100)"
                  />
                  <defs>
                    <linearGradient id="liquid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Data Streams Flowing In */}
              <div className="absolute top-0 right-0 p-4 opacity-30 group-hover:opacity-60">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 h-12 bg-cyan-400 mb-2 rounded-full mx-auto"
                    animate={{ y: [-20, 40], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                  <cap.icon className="w-7 h-7 text-cyan-400" />
                </div>
                
                <div className="flex-1">
                  <AnimatedCounter value={cap.count} suffix={cap.suffix} />
                  <h4 className="text-xl font-bold text-white mb-2">{cap.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {cap.desc}
                  </p>
                </div>

                {/* Floating Glass Bubble Tooltip (Simplified as a decorative element) */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <LucideZap className="w-6 h-6 text-cyan-400/50" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const MorphingTextWall = () => {
  const [index, setIndex] = useState(0);
  const items = [
    { type: "testimonial", text: "Asklena has transformed our global support operations, reducing latency by 80% while maintaining a 98% CSAT score. Truly revolutionary technology.", author: "Sarah Chen, VP of CX at GlobalLogistics" },
    { type: "stat", text: "Processed over 1.2 Billion minutes of neural voice synthesis across 142 countries with 99.99% uptime compliance.", author: "Network Throughput Analytics" },
    { type: "testimonial", text: "The natural prosody and emotional intelligence of these agents is indistinguishable from human operators. Our customers are amazed every day.", author: "Marcus Thorne, CTO of FinTech Solutions" },
    { type: "stat", text: "Average response latency reduced to 142ms, setting a new industry benchmark for real-time conversational AI scaling.", author: "Performance Benchmark Report" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-black min-h-[600px] flex items-center">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(20px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(20px)" }}
              transition={{ duration: 1.5 }}
              className="relative"
            >
              {/* Animated Typewriter Liquid Text */}
              <div className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight mb-12">
                {items[index].text.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-4 mb-2">
                    {word.split("").map((char, j) => (
                      <motion.span
                        key={j}
                        initial={{ opacity: 0, y: 20, rotateX: 90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (i * 0.1) + (j * 0.03),
                          type: "spring",
                          stiffness: 100
                        }}
                        className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-white via-cyan-400 to-purple-500 animate-shimmer"
                        style={{ backgroundSize: '200% 100%' }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="w-12 h-[1px] bg-cyan-500/50" />
                <span className="text-cyan-400 font-mono text-sm uppercase tracking-[0.3em]">
                  {items[index].author}
                </span>
                <div className="w-12 h-[1px] bg-cyan-500/50" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Decorative Dissolving Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/20 rounded-full"
            animate={{ 
              y: [0, -100],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 2, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </section>
  );
};

const HypnoticUseCases = () => {
  const cases = [
    { title: "Customer Support", icon: LucideMessageSquare, desc: "Resolve 80% of routine inquiries instantly with zero wait time." },
    { title: "Appointment Booking", icon: LucideCalendar, desc: "Seamlessly sync with calendars to manage complex scheduling." },
    { title: "Lead Qualification", icon: LucideUserCheck, desc: "Instantly qualify and route leads based on custom business logic." },
    { title: "Payment Collection", icon: LucideCreditCard, desc: "Securely process payments over voice with full PCI compliance." },
    { title: "Market Research", icon: LucideBarChart3, desc: "Conduct massive-scale surveys with natural conversational flow." },
    { title: "Technical Support", icon: LucideMonitor, desc: "Guide users through complex troubleshooting with expert AI." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cases.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="use-cases" className="py-32 relative overflow-hidden bg-black">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-bold mb-6 chromatic-aberration"
          >
            Hypnotic Use Cases
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Our agents are versatile neural entities, capable of mastering any conversational workflow with absolute precision.
          </p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
            {cases.map((useCase, idx) => {
              const offset = (idx - activeIndex + cases.length) % cases.length;
              const isActive = offset === 0;
              const isPrev = offset === cases.length - 1;
              const isNext = offset === 1;
              
              let z = 0;
              let x = 0;
              let opacity = 0;
              let scale = 0.8;
              let rotateY = 0;

              if (isActive) {
                z = 100;
                opacity = 1;
                scale = 1;
              } else if (isNext) {
                x = 300;
                z = -100;
                opacity = 0.5;
                rotateY = -45;
              } else if (isPrev) {
                x = -300;
                z = -100;
                opacity = 0.5;
                rotateY = 45;
              } else {
                z = -300;
                opacity = 0;
              }

              return (
                <motion.div
                  key={idx}
                  className="absolute w-full max-w-md aspect-[4/3] preserve-3d cursor-pointer group"
                  animate={{
                    x,
                    z,
                    opacity,
                    scale,
                    rotateY,
                    zIndex: isActive ? 50 : 20
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  <div className="relative w-full h-full glass-card rounded-[3rem] p-10 border-white/5 overflow-hidden group-hover:border-cyan-500/50 transition-colors">
                    {/* Holographic Scanline */}
                    <div className="absolute inset-0 bg-scanline opacity-10 pointer-events-none" />
                    
                    {/* Animated Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                        <useCase.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      
                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">
                        {useCase.title}
                      </h3>
                      <p className="text-white/40 text-lg leading-relaxed group-hover:text-white/60 transition-colors">
                        {useCase.desc}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore architecture <LucideArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Parallax Depth Elements */}
                    <motion.div 
                      className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white/5 rounded-full pointer-events-none" />
    </section>
  );
};

const GlobalNetwork = () => {
  const [rotation, setRotation] = useState(0);
  const hubs = [
    { name: "New York", x: 25, y: 35 },
    { name: "London", x: 48, y: 30 },
    { name: "Tokyo", x: 85, y: 40 },
    { name: "Singapore", x: 80, y: 65 },
    { name: "Sydney", x: 88, y: 80 },
    { name: "Sao Paulo", x: 32, y: 75 },
    { name: "Dubai", x: 60, y: 45 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 chromatic-aberration"
          >
            Global Neural Network
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Asklena agents are deployed across a low-latency global edge network, ensuring sub-150ms response times anywhere on Earth.
          </p>
        </div>

        <div className="relative aspect-video max-w-5xl mx-auto glass-card rounded-[3rem] p-4 border-white/5 overflow-hidden">
          {/* World Map Background (Simplified SVG) */}
          <svg className="w-full h-full opacity-20" viewBox="0 0 1000 500">
            <path 
              d="M150,150 Q200,100 250,150 T350,150 T450,100 T550,150 T650,200 T750,150 T850,200" 
              fill="none" stroke="white" strokeWidth="1" 
              strokeDasharray="5 5"
            />
            {/* Simplified continents dots */}
            {[...Array(500)].map((_, i) => (
              <circle 
                key={i}
                cx={Math.random() * 1000} 
                cy={Math.random() * 500} 
                r="1" 
                fill="white" 
                opacity={Math.random() * 0.5} 
              />
            ))}
          </svg>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500">
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
            </defs>
            {hubs.map((hub, i) => {
              if (i === 0) return null;
              const prevHub = hubs[i - 1];
              return (
                <motion.path
                  key={i}
                  d={`M ${prevHub.x * 10} ${prevHub.y * 5} Q ${(prevHub.x + hub.x) * 5} ${(prevHub.y + hub.y) * 2.5 - 50} ${hub.x * 10} ${hub.y * 5}`}
                  fill="none"
                  stroke="url(#line-grad)"
                  strokeWidth="1"
                  strokeDasharray="1000"
                  initial={{ strokeDashoffset: 1000 }}
                  animate={{ strokeDashoffset: [1000, -1000] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                />
              );
            })}
          </svg>

          {/* Hub Indicators */}
          {hubs.map((hub, i) => (
            <div 
              key={i}
              className="absolute"
              style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
            >
              <motion.div 
                className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,1)]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono text-white/40 uppercase tracking-tighter">
                {hub.name}
              </div>
            </div>
          ))}

          {/* Rotating Globe Overlay (Decorative) */}
          <div className="absolute bottom-8 right-8 w-40 h-40 glass-card rounded-full border-cyan-500/20 flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="relative w-full h-full opacity-30"
            >
              <LucideGlobe className="w-full h-full text-cyan-400 p-4" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </div>

          {/* Real-time stats overlay */}
          <div className="absolute top-8 left-8 flex flex-col gap-4">
            <div className="glass-card px-4 py-2 rounded-xl border-white/5 flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="text-[10px] font-mono text-white/60">ACTIVE NODES: 1,420</div>
            </div>
            <div className="glass-card px-4 py-2 rounded-xl border-white/5 flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <div className="text-[10px] font-mono text-white/60">AVG LATENCY: 124MS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const TransformingCTA = () => {
  const [state, setState] = useState<"static" | "loading" | "success">("static");

  const handleAction = () => {
    setState("loading");
    setTimeout(() => {
      setState("success");
    }, 3000);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Background that reacts to state */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ 
          background: state === "success" 
            ? "radial-gradient(circle at center, rgba(34, 211, 238, 0.15) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(168, 85, 247, 0.05) 0%, transparent 70%)"
        }}
      />

      <div className="container px-6 mx-auto relative z-10">
        <div className={`max-w-4xl mx-auto glass-card rounded-[4rem] p-12 md:p-24 border-white/5 text-center transition-all duration-1000 ${state === 'success' ? 'border-cyan-500/50 shadow-[0_0_100px_rgba(34,211,238,0.2)]' : ''}`}>
          <AnimatePresence mode="wait">
            {state !== "success" ? (
              <motion.div
                key="static"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white mb-8">
                  Ready to Deploy your <span className="text-cyan-400">Neural Clone?</span>
                </h2>
                <p className="text-white/40 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
                  Join the elite group of enterprise pioneers scaling human intelligence with Asklena.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12"
              >
                <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-cyan-400/50">
                  <LucideCheckCircle2 className="w-12 h-12 text-cyan-400" />
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
                  Neural Bridge Established
                </h2>
                <p className="text-cyan-400/60 font-mono uppercase tracking-[0.3em] text-sm">
                  Awaiting deployment confirmation...
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative inline-block mt-8">
            <Button
              size="lg"
              disabled={state !== "static"}
              onClick={handleAction}
              className={`h-20 px-16 text-2xl font-bold rounded-2xl transition-all duration-500 relative overflow-hidden ${
                state === "static" ? "bg-white text-black hover:scale-105" : 
                state === "loading" ? "bg-white/10 text-white w-64" : 
                "bg-cyan-500 text-black border-none shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              }`}
            >
              <AnimatePresence mode="wait">
                {state === "static" && (
                  <motion.span key="static" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-3">
                    Initialize Deployment <LucideArrowRight className="w-6 h-6" />
                  </motion.span>
                )}
                {state === "loading" && (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <LucideZap className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                    Syncing Neural...
                  </motion.div>
                )}
                {state === "success" && (
                  <motion.span key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3">
                    Mission Active
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Progress bar for loading state */}
              {state === "loading" && (
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-cyan-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3 }}
                />
              )}
            </Button>

            {/* Particle Explosion Simulation (Simplified with Framer Motion) */}
            {state === "loading" && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    initial={{ x: "50%", y: "50%" }}
                    animate={{ 
                      x: `${50 + Math.cos(i * 30 * Math.PI / 180) * 150}%`,
                      y: `${50 + Math.sin(i * 30 * Math.PI / 180) * 150}%`,
                      opacity: [1, 0],
                      scale: [1, 0]
                    }}
                    transition={{ duration: 0.8 }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const AIConsciousness = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 chromatic-aberration"
          >
            Neural Consciousness Meter
          </motion.h2>
          <p className="text-white/40 max-w-2xl mx-auto text-lg">
            Monitor the real-time cognitive load and emotional resonance of our global agent network.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Side Meters */}
          <div className="space-y-12">
            {[
              { label: "Cognitive Load", value: 78, color: "cyan" },
              { label: "Emotional Resonance", value: 92, color: "purple" },
              { label: "Semantic Accuracy", value: 99, color: "blue" },
            ].map((meter, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl border-white/5">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs uppercase tracking-widest text-white/40 font-mono">{meter.label}</span>
                  <span className={`text-sm font-bold text-${meter.color}-400`}>{meter.value}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-${meter.color}-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${meter.value}%` }}
                    transition={{ duration: 2, delay: i * 0.2 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Central Neural Core */}
          <div className="relative flex items-center justify-center">
            {/* Pulsing Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-cyan-500/20"
                style={{ width: 200 + i * 100, height: 200 + i * 100 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.5, 0.2],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
              />
            ))}
            
            <motion.div 
              className="relative z-10 w-48 h-48 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center backdrop-blur-3xl shadow-[0_0_50px_rgba(34,211,238,0.2)]"
              animate={{ 
                boxShadow: ["0 0 20px rgba(34, 211, 238, 0.2)", "0 0 60px rgba(34, 211, 238, 0.5)", "0 0 20px rgba(34, 211, 238, 0.2)"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <LucideCpu className="w-20 h-20 text-cyan-400" />
              
              {/* Circular Progress Rings */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle
                  cx="96" cy="96" r="88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="text-cyan-500/20"
                />
                <motion.circle
                  cx="96" cy="96" r="88"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeDasharray="552.92"
                  className="text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,1)]"
                  initial={{ strokeDashoffset: 552.92 }}
                  whileInView={{ strokeDashoffset: 552.92 * 0.22 }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Right Side EQ Visualizer */}
          <div className="glass-card p-8 rounded-3xl border-white/5 flex flex-col h-full min-h-[300px]">
            <div className="text-xs uppercase tracking-widest text-white/40 font-mono mb-8">Audio Synthesis Core</div>
            <div className="flex-1 flex items-end justify-between gap-1">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-full bg-gradient-to-t from-cyan-600 to-purple-500 rounded-t-sm"
                  animate={{ 
                    height: [`${Math.random() * 20 + 10}%`, `${Math.random() * 80 + 20}%`, `${Math.random() * 20 + 10}%`]
                  }}
                  transition={{ duration: 0.5 + Math.random(), repeat: Infinity }}
                />
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
              <span className="text-[10px] font-mono text-cyan-400">STATUS: OPTIMIZED</span>
              <span className="text-[10px] font-mono text-white/20">KHZ: 48.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Index() {
  return (
    <div className="bg-black text-white selection:bg-primary/30 min-h-screen">
      <Navbar />
      <Hero />
      <IndustryShowcase />
      <AgentComparison />
      <DemoArena />
      <LiquidCapabilities />
      <MorphingTextWall />
      <HypnoticUseCases />
      <GlobalNetwork />
      <AIConsciousness />
      <TransformingCTA />
      <Footer />
    </div>
  );
}








