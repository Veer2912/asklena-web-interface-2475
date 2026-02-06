import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LucidePhone, LucideArrowRight, LucideCheckCircle2, LucideGlobe, LucideShieldCheck, LucideZap, LucideUsers, LucideActivity, LucideMessageSquare, LucidePlus, LucidePlay, LucideStethoscope, LucideTruck, LucideLandmark, LucideGraduationCap, LucideMonitor, LucideRss, LucideBriefcase, LucideCalendar, LucideUserCheck, LucideCreditCard, LucideBarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

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

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-mesh">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{ 
              y: [null, "-100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 20
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Next-Gen Voice Intelligence
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-gradient leading-[1.1]">
            Voice AI Agents <br /> Built for Enterprise
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-10 leading-relaxed">
            Deploy intelligent, human-like voice solutions that transform customer experience, automate complex workflows, and scale your business operations globally.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/20 group">
              Start Building Now
              <LucideArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white/10 hover:bg-white/5 text-white rounded-xl">
              Watch Demo
            </Button>
          </div>
        </motion.div>

        {/* Floating Glass Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: LucideActivity, title: "Real-time Processing", desc: "Sub-second latency for natural conversations." },
            { icon: LucideShieldCheck, title: "Enterprise Grade", desc: "SOC2 Type II compliant and secure by design." },
            { icon: LucideGlobe, title: "100+ Languages", desc: "Fluent in every language your customers speak." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
              className="glass-card p-6 rounded-2xl text-left animate-float"
              style={{ animationDelay: `${idx * 1.5}s` }}
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IndustrySolutions = () => {
  const industries = [
    { icon: LucideStethoscope, name: "Healthcare", desc: "Patient scheduling and medical inquiries automation." },
    { icon: LucideTruck, name: "Logistics", desc: "Real-time delivery updates and fleet coordination." },
    { icon: LucideLandmark, name: "Finance", desc: "Secure account verification and transaction support." },
    { icon: LucideGraduationCap, name: "Education", desc: "Student support and enrollment automation." },
    { icon: LucideMonitor, name: "IT", desc: "Automated technical support and system alerts." },
    { icon: LucideRss, name: "Telecommunication", desc: "Billing support and service plan optimization." },
  ];

  return (
    <section id="solutions" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Tailored Industry Solutions
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our specialized AI models are trained on domain-specific data to deliver expert-level interactions across diverse sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl group cursor-pointer border-white/5 hover:border-primary/50 transition-colors"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <ind.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{ind.name}</h3>
              <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                {ind.desc}
              </p>
              <div className="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <LucideArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AgentTypes = () => {
  const types = [
    {
      title: "Inbound Agents",
      subtitle: "Always-on Customer Support",
      icon: LucideMessageSquare,
      features: [
        "Instant Call Answering",
        "Context-Aware Routing",
        "24/7 Availability",
        "Multi-intent Recognition",
        "Automated Ticketing"
      ],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Outbound Agents",
      subtitle: "Proactive Business Growth",
      icon: LucidePhone,
      features: [
        "Lead Qualification",
        "Appointment Scheduling",
        "Payment Reminders",
        "Customer Feedback Surveys",
        "Strategic Re-engagement"
      ],
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <section id="agents" className="py-24 bg-white/5">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {types.map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden p-8 md:p-12 rounded-[2.5rem] glass-card border-white/5 bg-gradient-to-br ${type.color}`}
            >
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{type.title}</h3>
                <p className="text-white/60 mb-8">{type.subtitle}</p>
                
                <ul className="space-y-4">
                  {type.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-white/80">
                      <LucideCheckCircle2 className="w-5 h-5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="mt-10 bg-white text-black hover:bg-white/90 rounded-full px-8 h-12">
                  Configure Agent
                </Button>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LiveAgentDemo = () => {
  const [activeTab, setActiveTab] = useState("Healthcare");
  
  const demos = {
    "Healthcare": [
      { role: "agent", text: "Hello! This is Lena from Central Medical. How can I assist you today?" },
      { role: "user", text: "Hi, I'd like to reschedule my appointment with Dr. Smith." },
      { role: "agent", text: "Of course. I see your current appointment is on Tuesday at 10 AM. I have openings on Wednesday at 2 PM or Friday at 9 AM. Which works better?" },
    ],
    "Logistics": [
      { role: "agent", text: "Asklena Logistics support. Providing real-time updates. Looking for a shipment?" },
      { role: "user", text: "Yes, package ID 99281. It was supposed to be here today." },
      { role: "agent", text: "Checking... It's currently on the delivery vehicle and should arrive by 4 PM. Would you like a text notification when it's 10 minutes away?" },
    ],
    "Finance": [
      { role: "agent", text: "Welcome to SecureBank Voice. How can I help with your account today?" },
      { role: "user", text: "I need to report a lost card and get a replacement." },
      { role: "agent", text: "I'm sorry to hear that. For your security, I've temporarily frozen card ending in 4421. Shall I proceed with ordering your new card to your address on file?" },
    ]
  };

  return (
    <section id="demo" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience the <span className="text-primary">Future</span> of Voice</h2>
            <p className="text-white/60 text-lg mb-8">
              See how our AI agents handle complex, multi-turn conversations with perfect naturality and zero delay.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              {Object.keys(demos).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full border transition-all ${
                    activeTab === tab 
                    ? "bg-primary border-primary text-white" 
                    : "border-white/10 text-white/60 hover:border-white/30"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <LucidePlus className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Natural Prosody</h4>
                  <p className="text-sm text-white/50">Human-like intonation and rhythm.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <LucidePlay className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Instant Learning</h4>
                  <p className="text-sm text-white/50">Adapts to new information in real-time.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="glass-card rounded-[2.5rem] p-2 border-white/10 shadow-3xl bg-black/40 relative overflow-hidden">
              <div className="bg-white/5 rounded-[2rem] p-6 min-h-[400px] flex flex-col justify-end">
                <div className="space-y-4 mb-4">
                  {demos[activeTab as keyof typeof demos].map((msg, i) => (
                    <motion.div
                      key={`${activeTab}-${i}`}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: i * 0.5 }}
                      className={`flex ${msg.role === 'agent' ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`max-w-[80%] p-4 rounded-2xl ${
                        msg.role === 'agent' 
                        ? 'bg-white/10 text-white rounded-bl-none' 
                        : 'bg-primary text-white rounded-br-none'
                      }`}>
                        <p className="text-sm md:text-base">{msg.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary"
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-white/40">Agent Live</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                    Latency: 420ms
                  </div>
                </div>
              </div>
            </div>
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

const Capabilities = () => {
  const capabilities = [
    { icon: LucideActivity, title: "Real-time Analytics", count: "99.9", suffix: "%", desc: "Uptime and monitoring." },
    { icon: LucideGlobe, title: "Multi-language", count: "100", suffix: "+", desc: "Native accents globally." },
    { icon: LucideZap, title: "Ultra-low Latency", count: "400", suffix: "ms", desc: "Instant response time." },
    { icon: LucideShieldCheck, title: "Secure & Compliant", count: "100", suffix: "%", desc: "Enterprise security." },
    { icon: LucideUsers, title: "Natural NLP", count: "10", suffix: "M+", desc: "Training parameters." },
    { icon: LucideActivity, title: "Scalability", count: "1", suffix: "M+", desc: "Concurrent calls." },
    { icon: LucideBriefcase, title: "Seamless Integration", count: "50", suffix: "+", desc: "CRM & ERP connectors." },
    { icon: LucideCheckCircle2, title: "Custom Training", count: "24", suffix: "h", desc: "Brand voice setup." },
  ];

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Capabilities</h2>
          <p className="text-white/60">Built for scale, security, and superior performance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-3xl border-white/5 hover:border-primary/30 transition-colors cursor-default"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <cap.icon className="w-5 h-5 text-primary" />
              </div>
              <AnimatedCounter value={cap.count} suffix={cap.suffix} />
              <h4 className="font-bold text-white mb-2">{cap.title}</h4>
              <p className="text-sm text-white/40 leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const WhyChooseAsklena = () => {
  const points = [
    { title: "Advanced AI Technology", desc: "Proprietary voice synthesis and NLP models optimized for low-latency enterprise needs." },
    { title: "Industry Expertise", desc: "Domain-specific agents pre-trained on millions of industry-specific data points." },
    { title: "Proven Results", desc: "Significant cost reduction and CSAT improvement across our global enterprise partners." },
    { title: "Dedicated Support", desc: "24/7 technical assistance and custom agent tuning for your specific brand voice." },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white/5">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="text-primary">Asklena</span>?</h2>
            <p className="text-white/60 text-lg">
              We're not just another AI company. We're your partner in reinventing customer communication.
            </p>
          </div>
          <div className="lg:w-2/3 grid gap-6">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border-white/5 flex gap-6 group hover:bg-primary/5 transition-colors"
              >
                <div className="text-4xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">0{idx + 1}</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{point.title}</h4>
                  <p className="text-white/50 leading-relaxed">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const UseCases = () => {
  const cases = [
    { title: "Customer Support Automation", icon: LucideMessageSquare, desc: "Resolve 80% of routine inquiries instantly." },
    { title: "Appointment Scheduling", icon: LucideCalendar, desc: "Seamlessly book and manage patient or client visits." },
    { title: "Lead Qualification", icon: LucideUserCheck, desc: "Qualify leads at scale before human hand-off." },
    { title: "Payment Collection", icon: LucideCreditCard, desc: "Securely handle billing and collection calls." },
    { title: "Survey & Feedback", icon: LucideBarChart3, desc: "Gather real-time insights from automated surveys." },
  ];

  return (
    <section id="use-cases" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Real-World Use Cases</h2>
          <p className="text-white/60">Versatile AI agents for every business touchpoint.</p>
        </div>

        <div className="flex overflow-x-auto pb-12 gap-6 scrollbar-hide snap-x">
          {cases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[400px] glass-card p-8 rounded-3xl border-white/5 snap-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <useCase.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
              <p className="text-white/50 leading-relaxed mb-6">{useCase.desc}</p>
              <Button variant="link" className="text-primary p-0 h-auto hover:text-primary/80">
                Read case study <LucideArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GetStarted = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="glass-card rounded-[3rem] p-12 md:p-20 relative overflow-hidden bg-gradient-to-br from-primary/10 to-transparent">
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Scale Your Voice Strategy?</h2>
            <p className="text-white/60 text-lg mb-12">
              Join leading enterprises transforming their customer experience with Asklena AI.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Schedule a Demo", icon: LucideCalendar, desc: "Personalized walkthrough." },
                { title: "API Documentation", icon: LucideMonitor, desc: "Developer-first integration." },
                { title: "Enterprise Solution", icon: LucideShieldCheck, desc: "Custom scale & security." },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl cursor-pointer hover:bg-white/10 transition-all"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="mt-12 h-16 px-12 text-xl bg-white text-black hover:bg-white/90 rounded-full font-bold">
              Contact Sales
            </Button>
          </div>
          
          {/* Decorative blur */}
          <div className="absolute top-0 left-0 -ml-20 -mt-20 w-80 h-80 bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 -mr-20 -mb-20 w-80 h-80 bg-blue-500/20 blur-[120px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <LucidePhone className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter">Asklena</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Pioneering the next generation of voice AI for the world's most ambitious enterprises. Secure, scalable, and human-like.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer">
                <LucideGlobe className="w-5 h-5 text-white/60" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer">
                <LucideActivity className="w-5 h-5 text-white/60" />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 cursor-pointer">
                <LucideShieldCheck className="w-5 h-5 text-white/60" />
              </div>
            </div>
          </div>

          {[
            { title: "Product", links: ["Features", "Solutions", "Demo", "Pricing"] },
            { title: "Resources", links: ["Documentation", "API Reference", "Case Studies", "Blog"] },
            { title: "Company", links: ["About Us", "Careers", "Security", "Contact"] },
          ].map((col, idx) => (
            <div key={idx}>
              <h4 className="font-bold mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href="#" className="text-white/40 hover:text-white transition-colors text-sm">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs">© 2024 Asklena AI. All rights reserved.</p>
          <div className="flex gap-8 text-xs text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Index() {
  return (
    <div className="bg-black text-white selection:bg-primary/30 min-h-screen">
      <Navbar />
      <Hero />
      <IndustrySolutions />
      <AgentTypes />
      <LiveAgentDemo />
      <Capabilities />
      <WhyChooseAsklena />
      <UseCases />
      <GetStarted />
      <Footer />
    </div>
  );
}








