import React, { useState, useEffect } from 'react';
import { 
  ArrowRight
} from 'lucide-react';

/**
 * ZERO BRIDGE - UNIFIED ARCHITECTURAL BUILD
 * Refinements: 
 * - Standardized body text across all lower sections (mission, matrix, relay)
 * - Removed all remaining italics and serif fonts from brand wall
 * - Strictly unified header sizes for all section titles
 * - Maintained ALL CAPS for UI/Nav elements only
 */

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased lowercase">
      {/* Unified Minimalist Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');
        
        body {
          margin: 0;
          background-color: #FFFFFF;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* Unified Site-wide Heading Scale */
        .unified-heading {
          font-size: clamp(2.5rem, 8vw, 7rem);
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -0.04em;
        }

        /* Standardized Body Text for non-headers */
        .standard-body {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          line-height: 1.4;
          letter-spacing: -0.02em;
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-entrance {
          animation: fadeInScale 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        .video-mask {
          background: radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,1) 100%);
        }

        .grain::after {
          content: "";
          position: fixed; top: -150%; left: -150%; width: 300%; height: 300%;
          background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_filmgrain.png");
          opacity: 0.02; pointer-events: none; animation: grain 8s steps(10) infinite; z-index: 50;
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          50% { transform: translate(-15%, 10%); }
        }
      ` }} />

      <div className="grain" />

      {/* Nav */}
      <nav className={`fixed w-full z-[100] px-8 py-8 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-md py-5 border-b border-zinc-100' : ''}`}>
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-xl font-black uppercase tracking-tighter">ZERO BRIDGE<span className="text-red-600">.</span></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold leading-none text-nowrap mt-0.5">GLOBAL CONTENT INFRASTRUCTURE</span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <button onClick={() => scrollToSection('process')} className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400 hover:text-black transition-colors">PROCESS</button>
            <button className="bg-black text-white px-7 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-red-600 transition-all">
              INITIATE
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 pt-40 md:pt-48 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-[0.85] scale-100 pointer-events-none">
            <source src="https://sypcyzzog59nwuus.public.blob.vercel-storage.com/Parachute%20jump%20group%20%281%29.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-mask z-1" />
        </div>

        <div className="relative z-10 text-center animate-entrance max-w-[95vw]">
          <h1 className="unified-heading">
            always-on content <br />
            operations for brands <br />
            that <span className="text-red-600">publish daily</span>
          </h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-48 md:py-72 px-8 bg-white border-t border-zinc-50 flex flex-col items-center justify-center text-center">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <h2 className="unified-heading">
            scale <span className="text-red-600">without stretching.</span>
          </h2>
          <div className="space-y-12 max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl font-bold tracking-tighter text-black leading-tight">
              zero bridge is an end-to-end media studio helping publishers solve the content velocity problem.
            </p>
            <p className="standard-body text-zinc-500">
              a seamless creative extension for the world's most ambitious media publishers and brands. bridging the gap between ideation and massive-scale execution.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do - Matrix Layout */}
      <section id="process" className="bg-black text-white py-40 md:py-64 px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col mb-32 items-center text-center">
            <span className="text-sm tracking-[0.4em] text-red-600 font-bold mb-8 uppercase">WHAT WE DO</span>
            <h3 className="unified-heading">our engine<span className="text-red-600">.</span></h3>
          </div>

          <div className="grid lg:grid-cols-3 border-t border-zinc-800">
            <div className="py-24 lg:pr-12 border-b lg:border-b-0 lg:border-r border-zinc-800 group transition-all duration-700">
              <span className="text-red-600 font-bold text-xs mb-10 block tracking-widest uppercase">CONNECT</span>
              <p className="standard-body font-bold group-hover:text-red-600 transition-colors">
                zerobridge connects publishers and media companies with global creatives and dedicated teams to produce and package content at optimised costs.
              </p>
            </div>
            <div className="py-24 lg:px-12 border-b lg:border-b-0 lg:border-r border-zinc-800 group transition-all duration-700">
              <span className="text-red-600 font-bold text-xs mb-10 block tracking-widest uppercase">EMPOWER</span>
              <p className="standard-body font-bold group-hover:text-red-600 transition-colors">
                zerobridge helps brands scale new heights with our world-class platform-agnostic production engine powered by talent, technology and experience.
              </p>
            </div>
            <div className="py-24 lg:pl-12 group transition-all duration-700">
              <span className="text-red-600 font-bold text-xs mb-10 block tracking-widest uppercase">EXECUTE</span>
              <p className="standard-body font-bold group-hover:text-red-600 transition-colors">
                zerobridge does the heavy lifting for you, works as your extended team, enables you to produce and publish high volume content daily across diverse formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Relay Section */}
      <section className="py-48 px-8 bg-white border-b border-zinc-50">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="space-y-16">
            <h3 className="unified-heading">
              while you sleep, <br />
              <span className="text-red-600">we execute.</span>
            </h3>
            <p className="standard-body font-bold text-zinc-400 max-w-4xl mx-auto">
              our hubs in india act as a 24/7 extension of your team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 mt-32 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center p-12 border border-zinc-100 rounded-[40px] flex-1">
              <span className="text-7xl font-bold mb-2 tracking-tighter">24/7</span>
              <span className="text-[10px] tracking-[0.4em] text-zinc-400 font-bold uppercase">UPTIME</span>
            </div>
            <div className="flex flex-col items-center p-12 border border-zinc-100 rounded-[40px] flex-1">
              <span className="text-7xl font-bold mb-2 tracking-tighter">60%</span>
              <span className="text-[10px] tracking-[0.4em] text-zinc-400 font-bold uppercase">EFFICIENCY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Wall */}
      <section className="py-40 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <h3 className="text-sm tracking-[0.4em] text-red-600 font-bold mb-24 uppercase">WHO WE WORK WITH</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-24 gap-x-12 items-center opacity-70">
            <div className="flex space-x-0.5 justify-center scale-125">
              <div className="w-7 h-7 bg-black text-white flex items-center justify-center font-bold text-xs">b</div>
              <div className="w-7 h-7 bg-black text-white flex items-center justify-center font-bold text-xs">b</div>
              <div className="w-7 h-7 bg-black text-white flex items-center justify-center font-bold text-xs">c</div>
            </div>
            <span className="font-bold text-red-600 text-3xl">shell</span>
            <span className="font-bold text-2xl tracking-tighter">discovery</span>
            <span className="font-bold text-xl tracking-tighter text-blue-600">booking.com</span>
            <span className="font-bold text-4xl tracking-tighter text-nowrap">itv</span>
            <span className="font-bold text-2xl tracking-widest">copa90</span>
            <span className="font-bold text-3xl tracking-tighter text-red-600 uppercase">zomato</span>
            <span className="font-bold text-2xl text-green-900 uppercase">carlsberg</span>
            <span className="font-bold text-xl tracking-[0.5em] text-nowrap uppercase">future plc</span>
            <span className="font-bold text-2xl tracking-tighter uppercase">lost in</span>
            <span className="font-bold text-xl tracking-widest text-nowrap text-zinc-800 uppercase">bigger bang</span>
            <span className="font-bold text-4xl text-red-600 tracking-tighter uppercase">swns</span>
            <div className="border-2 border-black px-3 py-1 font-bold text-xl uppercase">re:</div>
            <div className="flex items-center space-x-1 font-bold text-base tracking-widest uppercase"><span>sbx</span><span className="w-px h-6 bg-zinc-300"></span><span>cars</span></div>
            <span className="font-bold text-xl text-zinc-400 tracking-[0.2em] uppercase">news uk</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-64 px-8 text-center bg-black text-white">
        <div className="max-w-5xl mx-auto space-y-20">
          <h2 className="unified-heading">
            the bridge <br /><span className="text-red-600 underline decoration-red-600/20 underline-offset-[20px]">is open.</span>
          </h2>
          <button className="group flex items-center space-x-6 mx-auto text-[10px] tracking-[0.6em] font-bold border border-zinc-800 px-16 py-8 rounded-full hover:bg-white hover:text-black transition-all uppercase">
            <span>INITIATE THE SIGNAL</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-48 text-[10px] tracking-[0.5em] text-zinc-600 font-bold text-nowrap uppercase">
            <span>BANGALORE HQ</span>
            <span>DELHI NCR</span>
            <span>LOS ANGELES</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
