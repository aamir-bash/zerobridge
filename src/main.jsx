import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  ArrowRight,
  X
} from 'lucide-react';

/**
 * ZERO BRIDGE WEBSITE - PRODUCTION BUILD
 * Updates:
 * - Fixed rendering: Added createRoot mounting logic to ensure the site opens.
 * - Brand Headline: Unified with site-wide 'unified-heading' class.
 * - Maintained: Scroll reveals, global pulse clock, and V11:55 refinements.
 */

// Animation Wrapper Component
const Reveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const videoRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });

  // Update Global Clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const startVideo = () => {
      if (videoRef.current) {
        videoRef.current.muted = true;
        videoRef.current.play().catch(err => console.log("Video waiting..."));
      }
    };
    startVideo();
    const timer = setTimeout(startVideo, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const subject = `inquiry from ${formData.name}`;
    const body = `name: ${formData.name}%0D%0Aemail: ${formData.email}%0D%0A%0D%0Aquery: ${formData.query}`;
    window.location.href = `mailto:aamir@zerobridge.net?subject=${subject}&body=${body}`;
  };

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
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');
        
        body {
          margin: 0;
          background-color: #FFFFFF;
          font-family: 'Space Grotesk', sans-serif;
        }

        .unified-heading {
          font-size: clamp(2.5rem, 8vw, 7rem);
          font-weight: 700;
          line-height: 0.95;
          letter-spacing: -0.04em;
        }

        .standard-body {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          line-height: 1.4;
          letter-spacing: -0.02em;
        }

        .video-overlay {
          background: radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,1) 100%);
        }

        .relay-vignette {
          background: radial-gradient(circle at center, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,1) 100%);
        }

        .pulse-dot {
          box-shadow: 0 0 0 rgba(220, 38, 38, 0.4);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(22, 163, 74, 0); }
          100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); }
        }

        .film-grain::after {
          content: "";
          position: fixed; top: -150%; left: -150%; width: 300%; height: 300%;
          background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_filmgrain.png");
          opacity: 0.015; pointer-events: none; animation: grain 8s steps(10) infinite; z-index: 50;
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          50% { transform: translate(-15%, 10%); }
        }
      ` }} />

      <div className="film-grain" />

      {/* Navigation */}
      <nav className={`fixed w-full z-[100] px-8 py-8 transition-all duration-700 ${scrolled ? 'bg-white/95 backdrop-blur-md py-5 border-b border-zinc-100' : ''}`}>
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-xl font-black uppercase tracking-tighter">ZERO BRIDGE<span className="text-red-600">.</span></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold leading-none text-nowrap mt-0.5">GLOBAL CONTENT INFRASTRUCTURE</span>
          </div>

          <div className="hidden md:flex items-center space-x-12">
            <button onClick={() => scrollToSection('process')} className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-400 hover:text-black transition-colors">PROCESS</button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-black text-white px-7 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-red-600 transition-all"
            >
              INITIATE
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center px-6 pt-40 md:pt-48 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-white">
          <video 
            ref={videoRef}
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-[0.9] scale-100 pointer-events-none"
          >
            <source src="https://cdn.jsdelivr.net/gh/aamir-bash/assets/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 video-overlay z-1" />
        </div>

        <div className="relative z-10 text-center max-w-[95vw]">
          <h1 className="unified-heading mb-12">
            always-on content <br />
            operations for brands <br />
            that <span className="text-red-600">publish daily</span>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-48 md:py-72 px-8 bg-white border-t border-zinc-50 flex flex-col items-center justify-center text-center">
        <Reveal>
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
        </Reveal>
      </section>

      {/* Engine Section */}
      <section id="process" className="bg-black text-white py-40 md:py-64 px-8 overflow-hidden">
        <div className="max-w-[1400px] mx-auto text-center">
          <Reveal>
            <span className="text-[10px] tracking-[0.4em] text-red-600 font-bold mb-8 uppercase block">WHAT WE DO</span>
            <h3 className="unified-heading mb-32">our engine<span className="text-red-600">.</span></h3>
          </Reveal>
          
          <div className="grid lg:grid-cols-3 border-t border-zinc-800">
            <Reveal>
              <div className="py-24 lg:px-12 border-b lg:border-b-0 lg:border-r border-zinc-800 group text-center flex flex-col items-center">
                <span className="text-red-600 font-bold text-[10px] mb-10 block tracking-widest uppercase">CONNECT</span>
                <p className="standard-body font-bold group-hover:text-red-600 transition-colors max-w-sm">
                  we integrate publishers and media companies with global creatives and dedicated teams to produce and package content at optimised costs.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="py-24 lg:px-12 border-b lg:border-b-0 lg:border-r border-zinc-800 group text-center flex flex-col items-center">
                <span className="text-red-600 font-bold text-[10px] mb-10 block tracking-widest uppercase">EMPOWER</span>
                <p className="standard-body font-bold group-hover:text-red-600 transition-colors max-w-sm">
                  our world-class platform-agnostic production engine enables brands to scale new heights powered by talent, technology and experience.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="py-24 lg:px-12 group text-center flex flex-col items-center">
                <span className="text-red-600 font-bold text-[10px] mb-10 block tracking-widest uppercase">EXECUTE</span>
                <p className="standard-body font-bold group-hover:text-red-600 transition-colors max-w-sm">
                  serving as your extended team, our operations handle the heavy lifting, enabling you to produce and publish high volume content daily across diverse formats.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Global Relay Section */}
      <section className="relative py-48 px-8 bg-white border-b border-zinc-50 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-90 saturate-[1.2] contrast-110"
            alt="Vibrant Global Network"
          />
          <div className="absolute inset-0 relay-vignette" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto text-center">
          <Reveal>
            <div className="space-y-16">
              <h3 className="unified-heading">
                while you sleep, <br />
                <span className="text-red-600">we execute.</span>
              </h3>
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="standard-body font-bold text-black leading-tight">
                  our hubs in india act as a 24/7 extension of your team.
                </p>
                <p className="standard-body font-bold text-black leading-tight">
                  we leverage the timezone advantage for a seamless, agile workflow.
                </p>
              </div>
            </div>
          </Reveal>
          
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center p-8 border border-zinc-100 rounded-[30px] bg-white/80 backdrop-blur-xl">
                <span className="text-4xl font-bold mb-1 tracking-tighter">24/7</span>
                <span className="text-[8px] tracking-[0.4em] text-zinc-500 font-bold uppercase">UPTIME</span>
              </div>
              <div className="flex flex-col items-center p-8 border border-zinc-100 rounded-[30px] bg-white/80 backdrop-blur-xl">
                <span className="text-4xl font-bold mb-1 tracking-tighter">60%</span>
                <span className="text-[8px] tracking-[0.4em] text-zinc-500 font-bold uppercase">COST SAVING</span>
              </div>
              <div className="flex flex-col items-center p-8 border border-zinc-100 rounded-[30px] bg-white/80 backdrop-blur-xl">
                <span className="text-4xl font-bold mb-1 tracking-tighter">365</span>
                <span className="text-[8px] tracking-[0.4em] text-zinc-500 font-bold uppercase">DAYS A YEAR</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Global Status Panel */}
      <section className="py-24 bg-white px-8">
        <Reveal>
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center border-y border-zinc-100 py-12">
            <div className="flex items-center space-x-4 mb-8 md:mb-0">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full pulse-dot" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">OPERATIONS LIVE</span>
            </div>
            <div className="text-center md:text-right">
              <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase block mb-2">GLOBAL TIME</span>
              <span className="text-4xl font-bold tracking-tighter">
                {currentTime.toLocaleTimeString('en-US', { hour12: false })} <span className="text-zinc-300 text-xl font-medium">UTC</span>
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Brand Wall: Top Brands & Publishers */}
      <section className="py-48 md:py-64 px-8 bg-white overflow-hidden">
        <Reveal>
          <div className="max-w-[1400px] mx-auto text-center">
            {/* Unified heading style applied here */}
            <h3 className="unified-heading mb-32">
              we work with the top <br />
              brands and <span className="text-red-600">publishers.</span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-24 gap-x-12 items-center opacity-60 grayscale filter mt-32">
              <div className="flex space-x-0.5 justify-center scale-110">
                <div className="w-6 h-6 bg-black text-white flex items-center justify-center font-bold text-[10px]">b</div>
                <div className="w-6 h-6 bg-black text-white flex items-center justify-center font-bold text-[10px]">b</div>
                <div className="w-6 h-6 bg-black text-white flex items-center justify-center font-bold text-[10px]">c</div>
              </div>
              <span className="font-bold text-3xl tracking-tight">shell</span>
              <span className="font-bold text-2xl tracking-tighter">discovery</span>
              <span className="font-bold text-xl tracking-tighter">booking.com</span>
              <span className="font-bold text-4xl tracking-tighter">itv</span>
              <span className="font-bold text-2xl tracking-widest">copa90</span>
              <span className="font-bold text-3xl tracking-tighter uppercase">zomato</span>
              <span className="font-bold text-2xl uppercase">carlsberg</span>
              <span className="font-bold text-lg tracking-[0.5em] uppercase">future plc</span>
              <span className="font-bold text-2xl tracking-tighter uppercase">lost in</span>
              <span className="font-bold text-xl tracking-widest text-zinc-800 uppercase">bigger bang</span>
              <span className="font-bold text-4xl tracking-tighter uppercase">swns</span>
              <div className="border-2 border-black px-3 py-1 font-bold text-xl uppercase inline-block mx-auto">re:</div>
              <div className="flex items-center space-x-1 font-bold text-base tracking-widest uppercase justify-center"><span>sbx</span><span className="w-px h-6 bg-zinc-300"></span><span>cars</span></div>
              <span className="font-bold text-xl text-zinc-400 tracking-[0.2em] uppercase">news uk</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="py-64 px-8 text-center bg-black text-white">
        <Reveal>
          <h2 className="unified-heading mb-20">
            the distance <br /><span className="text-red-600 underline decoration-red-600/20 underline-offset-[20px]">is zero.</span>
          </h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center space-x-6 mx-auto text-[10px] tracking-[0.6em] font-bold border border-zinc-800 px-16 py-8 rounded-full hover:bg-white hover:text-black transition-all uppercase"
          >
            <span>INITIATE SIGNAL</span>
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-48 text-[10px] tracking-[0.5em] text-zinc-600 font-bold uppercase">
            <span>BANGALORE HQ</span>
            <span>DELHI NCR</span>
            <span>LOS ANGELES</span>
          </div>
        </Reveal>
      </footer>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-white/95 backdrop-blur-xl">
          <button onClick={() => setIsModalOpen(false)} className="absolute top-12 right-12 text-zinc-400 hover:text-black transition-colors">
            <X size={32} />
          </button>
          
          <div className="max-w-xl w-full space-y-12">
            <h2 className="text-5xl font-bold tracking-tighter text-left">initiate.</h2>
            <form className="space-y-8" onSubmit={handleFormSubmit}>
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none standard-body" 
                  placeholder="enter name" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">email</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none standard-body" 
                  placeholder="your@email.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">query</label>
                <textarea 
                  required
                  className="w-full bg-transparent border-b border-zinc-200 py-4 focus:border-black outline-none standard-body resize-none" 
                  rows="3" 
                  placeholder="how can we bridge the gap?" 
                  value={formData.query}
                  onChange={(e) => setFormData({...formData, query: e.target.value})}
                />
              </div>
              <button type="submit" className="w-full bg-black text-white py-6 rounded-full font-bold uppercase tracking-[0.4em] text-xs hover:bg-red-600 transition-all">
                send the signal
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// MOUNTING LOGIC: Tells the browser to render the website into the root div
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
