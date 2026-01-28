import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Globe, 
  Play, 
  Clock, 
  Smartphone,
  ChevronRight,
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle
} from 'lucide-react';

/**
 * ZERO BRIDGE - PRODUCTION VERSION
 * Fixes: Resolved "Unexpected end of file" error by ensuring all tags are closed.
 */

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E5E5E0] font-sans selection:bg-[#E5E5E0] selection:text-black antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
        
        body { margin: 0; background-color: #0A0A0B; font-family: 'Space Grotesk', sans-serif; overflow-x: hidden; }
        .serif-italic { font-family: 'Playfair Display', serif; font-style: italic; }
        .stroke-text { -webkit-text-stroke: 1px rgba(229, 229, 224, 0.3); text-stroke: 1px rgba(229, 229, 224, 0.3); color: transparent; }
        @keyframes slideIn { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        .animate-slide { animation: slideIn 1s cubic-bezier(0.23, 1, 0.32, 1) forwards; }
        .video-overlay { background: linear-gradient(to right, rgba(10,10,11,0.9) 0%, rgba(10,10,11,0.4) 50%, rgba(10,10,11,0.8) 100%); }
      ` }} />

      {/* Navigation */}
      <nav className={`fixed w-full z-[100] px-6 py-8 transition-all duration-1000 ease-out ${scrolled ? 'bg-[#0A0A0B]/90 backdrop-blur-xl py-4 border-b border-zinc-900' : ''}`}>
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="flex flex-col cursor-pointer group">
            <h1 className="text-xl md:text-2xl font-bold tracking-tight uppercase">Zero Bridge<span className="text-zinc-600">.</span></h1>
            <span className="text-[10px] text-zinc-500 tracking-[0.3em] font-medium uppercase">Infrastructure for Publishers</span>
          </div>
          <button onClick={toggleMenu} className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-800 hover:border-zinc-500 transition-colors">
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale opacity-40">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-moving-light-streaks-32777-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-overlay z-1" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.6em] text-zinc-400 mb-8 animate-slide">[ Authentic Media Infrastructure ]</p>
            <h2 className="text-[clamp(3.5rem,10vw,10rem)] font-bold tracking-tighter leading-[0.85] mb-8">
              CONTENT <br /><span className="serif-italic">Velocity.</span> <br />BUDGET <br /><span className="stroke-text">Guaranteed.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 pb-4">
            <div className="bg-zinc-950/60 p-8 border border-zinc-800/50 rounded-2xl backdrop-blur-md">
               <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">"US-ready production hubs delivering 65%+ guaranteed savings vs. LA in-house hiring."</p>
               <div className="flex items-center space-x-4">
                 <div className="w-8 h-[1px] bg-zinc-700" />
                 <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">$29,000 All-Inclusive Retainer</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Global Relay */}
      <section id="process" className="py-40 px-6 max-w-[1400px] mx-auto border-t border-zinc-900">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <span className="text-[10px] tracking-[0.5em] text-zinc-500 font-bold uppercase">The Global Relay</span>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9]">
              While you sleep, <br /><span className="serif-italic">we execute.</span>
            </h3>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We replace the 9-to-5 bottleneck with a round-the-clock production pipeline. 
              Our hubs in India act as a 24/7 extension of your NYC/LA teams.
            </p>
          </div>
          
          <div className="relative border border-zinc-800 rounded-3xl p-12 bg-zinc-950/50">
            <div className="grid grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">LA / NYC Office</span>
                <div className="h-40 border-2 border-dashed border-zinc-800 rounded-xl flex items-center justify-center italic text-zinc-700 text-xs text-center">9 AM - 5 PM <br/>(US Operational)</div>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Zero Bridge Hub</span>
                <div className="h-40 bg-zinc-900 rounded-xl flex items-center justify-center text-white text-xs text-center p-4 border border-zinc-700">
                  Overnight Relay: <br />Editorial & QC Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Lineage */}
      <section id="lineage" className="py-40 px-6 border-y border-zinc-900 bg-[#080809]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-end mb-24">
            <h4 className="text-5xl md:text-6xl font-bold tracking-tighter italic serif-italic">The Lineage</h4>
            <p className="text-zinc-600 text-[10px] uppercase tracking-widest pb-4 font-bold">A Decade of Production</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { brand: 'BBC NEWS', win: 'Managed overnight high-velocity news cycles.', metric: '10-Year Partnership' },
              { brand: 'DISCOVERY', win: 'End-to-end post-production for wildlife features.', metric: 'Global Broadcast' },
              { brand: 'ITV', win: 'Technical mastering and OTT delivery pipeline.', metric: 'Network Infrastructure' }
            ].map((item, idx) => (
              <div key={idx} className="bg-zinc-900/20 p-10 border border-zinc-900 hover:border-zinc-700 transition-all group rounded-2xl">
                <h5 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{item.brand}</h5>
                <p className="text-zinc-500 text-sm mb-8 leading-relaxed italic">"{item.win}"</p>
                <div className="flex items-center space-x-2 text-zinc-600">
                  <CheckCircle size={14} className="text-blue-500" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold">{item.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-40 px-6 text-center">
        <div className="max-w-2xl mx-auto space-y-12">
          <h2 className="text-[clamp(3rem,10vw,6rem)] font-bold tracking-tighter uppercase leading-none italic serif-italic">
            The Bridge <span className="stroke-text">is Open.</span>
          </h2>
          <button className="text-xs uppercase tracking-[0.6em] text-zinc-500 hover:text-white transition-colors border-b border-zinc-800 pb-4">
            Initiate The Signal
          </button>
          <div className="flex flex-wrap justify-center gap-8 pt-20 text-[10px] text-zinc-700 tracking-[0.4em] uppercase font-bold">
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
