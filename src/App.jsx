import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Globe, 
  Zap, 
  Clock, 
  Check 
} from 'lucide-react';

/**
 * ZERO BRIDGE - V10 PRODUCTION BUILD
 * Refinements: 
 * - Tagline in ALL CAPS
 * - "Guaranteed" reverted to stroke style in black
 * - Video color restored (Grayscale removed)
 * - Matrix Layout & Center-aligned Messaging
 */

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white antialiased">
      {/* Cinematic Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');
        
        body {
          margin: 0;
          background-color: #FFFFFF;
          font-family: 'Space Grotesk', sans-serif;
        }

        .serif-italic {
          font-family: 'Playfair Display', serif;
          font-style: italic;
        }

        .stroke-text {
          -webkit-text-stroke: 1px rgba(0, 0, 0, 0.8);
          text-stroke: 1px rgba(0, 0, 0, 0.8);
          color: transparent;
        }

        @keyframes fadeInScale {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-entrance {
          animation: fadeInScale 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }

        /* Subtle mask to maintain text legibility while showing video color */
        .video-mask {
          background: radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,1) 100%);
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
            <span className="text-xl font-bold uppercase tracking-tighter">Zero Bridge<span className="text-red-600">.</span></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold leading-none text-nowrap">GLOBAL CONTENT INFRASTRUCTURE</span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <button onClick={() => scrollToSection('process')} className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 hover:text-black transition-colors">Process</button>
            <button className="bg-black text-white px-7 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-red-600 transition-all">
              Initiate
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 pt-40 md:pt-48">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Grayscale removed for true form color */}
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-[0.85] scale-100 pointer-events-none">
            <source src="https://sypcyzzog59nwuus.public.blob.vercel-storage.com/Zbbackground.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-mask z-1" />
        </div>

        <div className="relative z-10 text-center animate-entrance">
          <h1 className="text-[clamp(3.5rem,14vw,11rem)] font-bold tracking-tighter leading-[0.75] mb-12 uppercase">
            CONTENT <br />
            <span className="serif-italic text-zinc-800 lowercase">Velocity.</span> <br />
            <span className="text-red-600">BUDGET</span> <br />
            <span className="stroke-text">Guaranteed.</span>
          </h1>
        </div>
      </section>

      {/* Mission Statement - Centered */}
      <section className="py-48 md:py-72 px-8 bg-white border-t border-zinc-50 flex flex-col items-center justify-center text-center">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] animate-up">
            Scale <br />
            <span className="serif-italic text-red-600">without stretching.</span>
          </h2>
          <div className="space-y-12 max-w-4xl mx-auto animate-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-5xl font-bold leading-[1.05] tracking-tighter text-black">
              Zero Bridge is an end-to-end media studio helping publishers solve the content velocity problem.
            </p>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium">
              A seamless creative extension for the world's most ambitious media publishers and brands. Bridging the gap between ideation and massive-scale execution.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO - Redesigned Matrix Layout */}
      <section className="bg-black text-white py-40 md:py-64 px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col mb-32 items-center text-center">
            <span className="text-lg md:text-2xl uppercase tracking-[0.4em] text-red-600 font-bold mb-8">What We Do</span>
            <h3 className="text-5xl md:text-[8rem] font-bold tracking-tighter leading-none uppercase">Our Engine<span className="text-red-600">.</span></h3>
          </div>

          <div className="grid lg:grid-cols-3 border-t border-zinc-800">
            <div className="py-24 lg:pr-12 border-b lg:border-b-0 lg:border-r border-zinc-800 group transition-all duration-700">
              <span className="text-red-600 font-bold text-xs mb-10 block uppercase tracking-widest">Connect</span>
              <p className="text-white text-2xl md:text-4xl font-bold leading-tight tracking-tighter group-hover:text-red-600 transition-colors">
                ZeroBridge connects publishers and media companies with global creatives and dedicated teams to produce and package content at optimised costs.
              </p>
            </div>
            <div className="py-24 lg:px-12 border-b lg:border-b-0 lg:border-r border-zinc-800 group transition-all duration-700">
              <span className="text-red-600 font-bold text-xs mb-10 block uppercase tracking-widest">Empower</span>
              <p className="text-white text-2xl md:text-4xl font-bold leading-tight tracking-tighter group-hover:text-red-600 transition-colors">
                ZeroBridge helps brands scale new heights with our world-class platform-agnostic production engine powered by talent, technology and experience.
              </p>
            </div>
            <div className="py-24 lg:pl-12 group transition-all duration-700">
              <span className="text-red-600 font-bold text-xs mb-10 block uppercase tracking-widest">Execute</span>
              <p className="text-white text-2xl md:text-4xl font-bold leading-tight tracking-tighter group-hover:text-red-600 transition-colors">
                ZeroBridge does the heavy lifting for you, works as your extended team, enables you to produce and publish high volume content daily across diverse formats.
              </p>
            </div>
          </div>

          <div className="mt-40 border-t border-zinc-800 pt-20 text-center">
            <h4 className="text-3xl md:text-6xl font-bold tracking-tighter leading-[1.1] max-w-5xl mx-auto">
              We have a follow-the-sun studio model designed to handle daily publishing schedules
            </h4>
          </div>
        </div>
      </section>

      {/* Global Relay Section */}
      <section id="process" className="py-48 px-8 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="space-y-16">
            <h3 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] uppercase">
              While you sleep, <br />
              <span className="serif-italic text-red-600 lowercase">we execute.</span>
            </h3>
            <p className="text-zinc-400 text-2xl md:text-5xl max-w-5xl mx-auto leading-tight font-bold tracking-tighter">
              Our hubs in India act as a 24/7 extension of your team.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12 mt-32 max-w-2xl mx-auto text-center">
            <div className="flex flex-col items-center p-12 border border-zinc-100 rounded-[40px] flex-1">
              <span className="text-7xl font-bold mb-2 tracking-tighter">24/7</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">Uptime</span>
            </div>
            <div className="flex flex-col items-center p-12 border border-zinc-100 rounded-[40px] flex-1">
              <span className="text-7xl font-bold mb-2 tracking-tighter">60%</span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">Efficiency</span>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND WALL */}
      <section className="py-40 px-8 border-t border-zinc-100 bg-white">
        <div className="max-w-[1400px] mx-auto text-center">
          <h3 className="text-lg md:text-2xl uppercase tracking-[0.4em] text-red-600 font-bold mb-24">Who We Work With</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-24 gap-x-12 items-center opacity-70">
            <div className="flex space-x-0.5 justify-center scale-125">
              <div className="w-7 h-7 bg-black text-white flex items-center justify-center font-bold text-xs">B</div>
              <div className="w-7 h-7 bg-black text-white flex items-center justify-center font-bold text-xs">B</div>
              <div className="w-7 h-7 bg-black text-white flex items-center justify-center font-bold text-xs">C</div>
            </div>
            <span className="font-bold text-red-600 text-4xl">Shell</span>
            <span className="font-black text-3xl tracking-tighter italic">Discovery</span>
            <span className="font-bold text-2xl tracking-tighter text-blue-600">Booking.com</span>
            <span className="font-black text-4xl tracking-tighter italic text-nowrap">itv</span>
            <span className="font-black text-2xl uppercase tracking-widest">COPA90</span>
            <span className="font-black text-3xl tracking-tighter text-red-600 uppercase">ZOMATO</span>
            <span className="font-serif font-black text-2xl italic text-green-900">Carlsberg</span>
            <span className="font-bold text-xl uppercase tracking-[0.5em] text-nowrap">Future PLC</span>
            <span className="font-black text-2xl uppercase tracking-tighter">LOST iN</span>
            <span className="font-bold text-xl uppercase tracking-widest text-nowrap text-zinc-800">Bigger Bang</span>
            <span className="font-black text-4xl text-red-600 tracking-tighter">SWNS</span>
            <div className="border-2 border-black px-3 py-1 font-black text-xl">RE:</div>
            <div className="flex items-center space-x-1 font-bold text-base tracking-widest uppercase"><span>SBX</span><span className="w-px h-6 bg-zinc-300"></span><span>CARS</span></div>
            <span className="font-bold text-xl text-zinc-400 tracking-[0.2em] uppercase">NEWS UK</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-64 px-8 text-center bg-black text-white">
        <div className="max-w-5xl mx-auto space-y-20">
          <h2 className="text-[clamp(3.5rem,12vw,9rem)] font-bold tracking-tighter leading-none italic serif-italic">
            The Bridge <br /><span className="text-red-600 underline decoration-red-600/20 underline-offset-[20px]">is Open.</span>
          </h2>
          <button className="group flex items-center space-x-6 mx-auto text-xs uppercase tracking-[0.6em] font-bold border border-zinc-800 px-16 py-8 rounded-full hover:bg-white hover:text-black transition-all">
            <span>Initiate The Signal</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-48 text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-bold text-nowrap">
            <span>Bangalore HQ</span>
            <span>Delhi NCR</span>
            <span>Los Angeles</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
