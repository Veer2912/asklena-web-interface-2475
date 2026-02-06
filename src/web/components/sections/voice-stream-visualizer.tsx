import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mic2, Zap, Activity } from 'lucide-react';

export const VoiceStreamVisualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 150;

    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speed: number;
      angle: number;

      constructor(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 200;
        this.size = Math.random() * 2 + 1;
        this.color = `hsla(${280 + Math.random() * 60}, 70%, 60%, ${Math.random() * 0.5 + 0.2})`;
        this.speed = Math.random() * 0.5 + 0.2;
        this.angle = Math.random() * Math.PI * 2;
      }

      update(width: number, height: number, intensity: number) {
        this.angle += 0.01 * intensity;
        this.x += Math.cos(this.angle) * this.speed * intensity;
        this.y += Math.sin(this.angle) * this.speed * intensity;
        
        // Z-axis simulation (scaling)
        this.z -= 0.5 * intensity;
        if (this.z < 0) this.z = 200;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const scale = 200 / (this.z + 200);
        const drawX = this.x;
        const drawY = this.y;
        const drawSize = this.size * scale;

        ctx.beginPath();
        ctx.arc(drawX, drawY, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();

        // Add glow
        if (this.z < 50) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color;
        } else {
          ctx.shadowBlur = 0;
        }
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const render = (time: number) => {
      const intensity = 1 + Math.sin(time * 0.002) * 0.5 + Math.sin(time * 0.005) * 0.3;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.update(canvas.width, canvas.height, intensity);
        p.draw(ctx);
      });

      // Draw connection lines for nearby particles to create a neural network look
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const opacity = (1 - distance / 80) * 0.2;
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
      init();
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    render(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative py-32 bg-black overflow-hidden min-h-[600px] flex flex-col justify-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Real-time Visualization</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              The Architecture of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                Natural Dialogue
              </span>
            </h2>
            
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              Witness the complexity of human speech transformed into actionable data. Our neural engine processes millions of parameters in milliseconds to ensure every interaction feels genuine, fast, and secure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Mic2 className="w-5 h-5" />, title: "Audio Capture", desc: "48kHz high-fidelity streaming input" },
                { icon: <Zap className="w-5 h-5" />, title: "Inference", desc: "Sub-200ms end-to-end latency" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{item.title}</h4>
                  <p className="text-zinc-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
          >
            {/* Immersive Visualizer Orb */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
              
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-40px] border border-white/10 rounded-full border-dashed"
              />
              
              {/* Inner rotating ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-cyan-500/20 rounded-full border-dashed"
              />

              {/* Central Core */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-900 to-black border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/10 backdrop-blur-3xl" />
                
                {/* Simulated Audio Bars */}
                <div className="flex items-center gap-1 h-32 relative z-10">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        height: [20, Math.random() * 100 + 20, 20],
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.05,
                      }}
                      className="w-2 bg-gradient-to-t from-purple-500 via-pink-400 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                    />
                  ))}
                </div>
              </div>

              {/* Floating Data Points */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(i) * 20, 0],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md text-[8px] font-mono text-zinc-500 whitespace-nowrap"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                >
                  TOKEN_ID: {Math.random().toString(16).slice(2, 8).toUpperCase()}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
