import React from 'react';
import { ChevronDown, Play, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="text-center z-10 px-6">
        <div className="mb-8">
          <h1 className="font-orbitron text-6xl md:text-8xl font-black mb-4">
            <span className="text-white glitch-text" data-text="ALEX">ALEX</span>
            <br />
            <span className="text-neon-red glow-text" data-text="QUANTUM">QUANTUM</span>
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-neon-red to-transparent mx-auto mb-6 animate-pulse"></div>
          <p className="font-rajdhani text-xl md:text-2xl text-gray-300 tracking-wider mb-2">
            UNREAL ENGINE DEVELOPER
          </p>
          <p className="font-rajdhani text-lg text-neon-teal">
            CRAFTING IMMERSIVE DIGITAL WORLDS
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="cyber-button group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            VIEW PROJECTS
          </button>
          <button className="cyber-button-outline group">
            <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            DOWNLOAD CV
          </button>
        </div>

        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-neon-red mx-auto" />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-neon-red rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-neon-teal rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-neon-red rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-neon-teal rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;