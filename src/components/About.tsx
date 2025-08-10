import React from 'react';
import { Code, Gamepad2, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-red glow-text">SYSTEM</span> PROFILE
          </h2>
          <div className="h-0.5 w-24 bg-neon-red mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <div className="cyber-frame">
              <div className="w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden relative">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Developer Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-red rounded-full animate-pulse"></div>
                    <span className="text-xs font-rajdhani text-neon-red">ONLINE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-orbitron text-2xl font-bold mb-4 text-neon-red">
                DEVELOPER.INITIALIZE()
              </h3>
              <p className="font-rajdhani text-lg text-gray-300 leading-relaxed mb-6">
                Passionate Unreal Engine developer with 5+ years of experience creating 
                immersive gaming experiences and interactive applications. Specialized in 
                real-time rendering, gameplay mechanics, and cutting-edge visual effects.
              </p>
              <p className="font-rajdhani text-lg text-gray-300 leading-relaxed">
                From AAA game studios to indie projects, I bring technical expertise 
                and creative vision to every digital world I craft.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="cyber-card p-6 text-center">
                <Code className="w-8 h-8 text-neon-red mx-auto mb-2" />
                <div className="font-orbitron text-2xl font-bold text-neon-red">50+</div>
                <div className="font-rajdhani text-sm text-gray-400">PROJECTS</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <Gamepad2 className="w-8 h-8 text-neon-teal mx-auto mb-2" />
                <div className="font-orbitron text-2xl font-bold text-neon-teal">10+</div>
                <div className="font-rajdhani text-sm text-gray-400">GAMES SHIPPED</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <Zap className="w-8 h-8 text-neon-red mx-auto mb-2" />
                <div className="font-orbitron text-2xl font-bold text-neon-red">5+</div>
                <div className="font-rajdhani text-sm text-gray-400">YEARS EXP</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <Award className="w-8 h-8 text-neon-teal mx-auto mb-2" />
                <div className="font-orbitron text-2xl font-bold text-neon-teal">3</div>
                <div className="font-rajdhani text-sm text-gray-400">AWARDS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;