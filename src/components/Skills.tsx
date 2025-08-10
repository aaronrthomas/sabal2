import React, { useEffect, useState } from 'react';
import { Monitor, Code2, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "ENGINE MASTERY",
      icon: Monitor,
      color: "neon-red",
      skills: [
        { name: "Unreal Engine 5", level: 95 },
        { name: "Blueprint System", level: 90 },
        { name: "C++ Development", level: 85 },
        { name: "Niagara VFX", level: 80 }
      ]
    },
    {
      title: "PROGRAMMING",
      icon: Code2,
      color: "neon-teal",
      skills: [
        { name: "C++", level: 90 },
        { name: "Python", level: 75 },
        { name: "HLSL Shaders", level: 80 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "DESIGN SYSTEMS",
      icon: Palette,
      color: "neon-purple",
      skills: [
        { name: "3D Modeling", level: 85 },
        { name: "Animation", level: 80 },
        { name: "UI/UX Design", level: 75 },
        { name: "Level Design", level: 90 }
      ]
    },
    {
      title: "OPTIMIZATION",
      icon: Zap,
      color: "neon-red",
      skills: [
        { name: "Performance Tuning", level: 90 },
        { name: "Memory Management", level: 85 },
        { name: "Rendering Pipeline", level: 88 },
        { name: "Multi-threading", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-red glow-text">NEURAL</span> NETWORKS
          </h2>
          <div className="h-0.5 w-24 bg-neon-red mx-auto mb-6"></div>
          <p className="font-rajdhani text-xl text-gray-300">
            COGNITIVE ABILITIES & TECHNICAL PROFICIENCY
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="cyber-card p-6">
              <div className="text-center mb-6">
                <div className={`inline-flex p-3 rounded-full bg-${category.color}/20 border border-${category.color}/30 mb-4`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white mb-2">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-rajdhani text-sm text-gray-300">
                        {skill.name}
                      </span>
                      <span className={`font-rajdhani text-sm text-${category.color}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/60 rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="font-orbitron text-3xl font-bold text-neon-red mb-2">100M+</div>
            <div className="font-rajdhani text-sm text-gray-400">POLYGONS RENDERED</div>
          </div>
          <div className="text-center">
            <div className="font-orbitron text-3xl font-bold text-neon-teal mb-2">500K+</div>
            <div className="font-rajdhani text-sm text-gray-400">LINES OF CODE</div>
          </div>
          <div className="text-center">
            <div className="font-orbitron text-3xl font-bold text-neon-red mb-2">24/7</div>
            <div className="font-rajdhani text-sm text-gray-400">SYSTEM UPTIME</div>
          </div>
          <div className="text-center">
            <div className="font-orbitron text-3xl font-bold text-neon-teal mb-2">∞</div>
            <div className="font-rajdhani text-sm text-gray-400">POSSIBILITIES</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;