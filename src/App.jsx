import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle,
  Globe,
  Clock,
  Zap
} from 'lucide-react';

/**
 * ZERO BRIDGE - OFFICIAL PRODUCTION BUILD
 * Theme: High-Contrast Light (White/Black/Red)
 * Features: Cinematic Background Video, Grain Texture, Center-Aligned Hero.
 */

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased">
      {/* Global CSS & Cinematic Effects */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
        
        body {
          margin: 0;
          background-color: #FFFFFF;
          font-family: 'Space Grotesk', sans-serif;
          overflow-x: hidden;
        }

        .serif-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }

        .stroke-text {
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.15);
          text-stroke: 1px rgba(0, 0, 0, 0.15);
          color: transparent;
        }

        @keyframes slideUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-up {
          animation: slideUp 1.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        /* Cinematic Grain Overlay */
        .grain::after {
          content: "";
          position: fixed;
          top: -150%;
          left: -150%;
          width: 300%;
          height: 300%;
          background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_filmgrain.png");
          opacity: 0.03;
          pointer-events: none;
          animation: grain 8s steps(10) infinite;
          z-index: 50;
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }

        /* Radial Overlay: Clears center for text, fades video to white at edges */
        .video-overlay {
          background: radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,1) 100%);
        }
      ` }} />

      <div className="grain" />

      {/* Navigation Header */}
      <nav className={`fixed w-full z-[100] px-6 py-8 transition-all duration-1000 ease-out ${scrolled ? 'bg-white/95 backdrop-blur-xl py-4 border-b border-zinc-100 shadow-sm' : ''}`}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex flex-col cursor-pointer group">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight uppercase">Zero Bridge<span className="text-red-600">.</span></h1>
            <span className="text-[10px] text-zinc-400 tracking-[0.3em] font-medium uppercase">Infrastructure for Publishers</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <a href="#problem" className="text-xs uppercase tracking-widest font-bold hover:text-red-600 transition-colors">The Gap</a>
            <a href="#process" className="text-xs uppercase tracking-widest font-bold hover:text-red-600 transition-colors">The Process</a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-200 hover:border-black transition-colors"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden text-center pt-64 pb-24">
        {/* Background Video Container */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover grayscale opacity-[0.18] scale-105 pointer-events-none"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-moving-light-streaks-32777-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-overlay z-1" />
        </div>

        <div className="relative z-10 max-w-[1200px] w-full flex flex-col items-center">
          <h2 className="text-[clamp(3.2rem,11.5vw,10.5rem)] font-bold tracking-tighter leading-[0.8] mb-12 animate-up">
            CONTENT <br />
            <span className="serif-italic">Velocity.</span> <br />
            <span className="text-red-600">BUDGET</span> <br />
            <span className="stroke-text">Guaranteed.</span>
          </h2>

          <div className="mt-8 max-w-sm animate-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/50 p-6 border border-zinc-100 rounded-2xl backdrop-blur-md shadow-sm">
               <p className="text-zinc-500 text-xs leading-relaxed mb-4 italic">
                "Eliminating the distance between creation and publishing through 24/7 infrastructure."
               </p>
               <div className="flex items-center justify-center space-x-4">
                 <div className="w-6 h-[1px] bg-zinc-200" />
                 <span className="text-[9px] uppercase tracking-widest text-black font-bold">$29,000 All-Inclusive Retainer</span>
                 <div className="w-6 h-[1px] bg-zinc-200" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="relative py-40 px-6 bg-zinc-50/50">
        <div className="relative z-10 max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-[10px] tracking-[0.5em] text-red-600 font-bold uppercase mb-8 block">The Crisis</span>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-12">
                The <br /><span className="serif-italic">Velocity Gap.</span>
              </h3>
            </div>
            <div className="lg:col-span-7 space-y-12">
              <div className="group border-l-2 border-zinc-200 pl-8 hover:border-red-600 transition-all duration-500">
                <h4 className="text-xl font-bold uppercase tracking-tight mb-4 text-black">Infinite Demand, Finite Budgets</h4>
                <p className="text-zinc-500 leading-relaxed max-w-xl group-hover:text-black transition-colors">
                  Content needs are scaling exponentially, but domestic production costs make high-volume output financially impossible.
                </p>
              </div>
              
              <div className="group border-l-2 border-zinc-200 pl-8 hover:border-red-600 transition-all duration-500">
                <h4 className="text-xl font-bold uppercase tracking-tight mb-4 text-black">The 8-Hour Wall</h4>
                <p className="text-zinc-500 leading-relaxed max-w-xl group-hover:text-black transition-colors">
                  Traditional US workdays create a 16-hour execution "dead zone," resulting in massive delays and missed opportunities.
                </p>
              </div>

              <div className="group border-l-2 border-zinc-200 pl-8 hover:border-red-600 transition-all duration-500">
                <h4 className="text-xl font-bold uppercase tracking-tight mb-4 text-black">The Margin Trap</h4>
                <p className="text-zinc-500 leading-relaxed max-w-xl group-hover:text-black transition-colors">
                  Publishers are forced to choose between scaling their reach or protecting their profit—leading to team burnout or broken budgets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relay Diagram */}
      <section id="process" className="py-40 px-6 max-w-[1400px] mx-auto border-t border-zinc-100">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 text-center lg:text-left">
            <span className="text-[10px] tracking-[0.5em] text-zinc-400 font-bold uppercase">The Global Relay</span>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              While you sleep, <br /><span className="serif-italic">we execute.</span>
            </h3>
            <p className="text-zinc-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We replace the 9-to-5 bottleneck with a round-the-clock production pipeline. 
              Our hubs in India act as a 24/7 extension of your NYC/LA teams.
            </p>
          </div>
          
          <div className="relative border border-zinc-100 rounded-3xl p-8 md:p-12 bg-zinc-50/50">
            <div className="grid grid-cols-2 gap-4 md:gap-8 relative z-10">
              <div className="space-y-4">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">LA / NYC Office</span>
                <div className="h-40 border-2 border-dashed border-zinc-200 rounded-xl flex items-center justify-center italic text-zinc-400 text-center text-xs p-4 bg-white">
                  9 AM - 5 PM <br />(Operational)
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Zero Bridge Hub</span>
                <div className="h-40 bg-black rounded-xl flex items-center justify-center text-white text-xs text-center p-4 shadow-xl">
                  Overnight Relay: <br />Editorial & QC Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lineage */}
      <section id="lineage" className="py-40 px-6 border-y border-zinc-100 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-24 text-center md:text-left">
            <h4 className="text-6xl font-bold tracking-tighter italic serif-italic">The Lineage</h4>
            <p className="text-zinc-400 text-[10px] uppercase tracking-widest pb-4 font-bold mt-4 md:mt-0">A Decade of Production</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { brand: 'BBC NEWS', win: 'Managed overnight high-velocity news cycles.', metric: '10-Year Partnership' },
              { brand: 'DISCOVERY', win: 'End-to-end post-production for wildlife features.', metric: 'Global Broadcast' },
              { brand: 'ITV', win: 'Technical mastering and OTT delivery pipeline.', metric: 'Network Infrastructure' }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-50/50 p-10 border border-zinc-100 hover:border-red-600/30 transition-all group rounded-2xl">
                <h5 className="text-2xl font-bold mb-4 uppercase tracking-widest text-black">{item.brand}</h5>
                <p className="text-zinc-600 text-sm mb-8 leading-relaxed italic">"{item.win}"</p>
                <div className="flex items-center space-x-2 text-zinc-400">
                  <CheckCircle size={14} className="text-red-600" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{item.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 px-6 text-center bg-zinc-50/50">
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-bold tracking-tighter uppercase leading-none italic serif-italic">
            The Bridge <br /><span className="stroke-text">is Open.</span>
          </h2>
          <button className="text-xs uppercase tracking-[0.6em] text-zinc-400 hover:text-red-600 transition-colors border-b border-zinc-200 pb-4">
            Initiate The Signal
          </button>
          <div className="flex flex-wrap justify-center gap-12 pt-20 text-[10px] text-zinc-400 tracking-[0.4em] uppercase font-bold">
            <span>MUMBAI HQ</span>
            <span>LA READY</span>
            <span>LONDON</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
