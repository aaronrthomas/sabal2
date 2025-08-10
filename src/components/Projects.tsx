import React, { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "NEON RUNNER",
      category: "RACING GAME",
      description: "High-speed cyberpunk racing game with dynamic weather systems and real-time ray tracing.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Unreal Engine 5", "C++", "Blueprints", "Niagara VFX"],
      status: "COMPLETED"
    },
    {
      title: "QUANTUM ARENA",
      category: "MULTIPLAYER FPS",
      description: "Competitive multiplayer shooter with advanced physics-based gameplay mechanics.",
      image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Unreal Engine 5", "Networking", "AI Systems", "Audio"],
      status: "IN DEVELOPMENT"
    },
    {
      title: "DIGITAL FORTRESS",
      category: "VR EXPERIENCE",
      description: "Immersive VR exploration game featuring photorealistic environments and haptic feedback.",
      image: "https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Unreal Engine 5", "VR SDK", "Spatial Audio", "Hand Tracking"],
      status: "COMPLETED"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-red glow-text">DIGITAL</span> CONSTRUCTS
          </h2>
          <div className="h-0.5 w-24 bg-neon-red mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`cyber-card group cursor-pointer transition-all duration-500 ${
                activeProject === index ? 'scale-105 border-neon-red' : ''
              }`}
              onMouseEnter={() => setActiveProject(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 text-xs font-rajdhani rounded ${
                    project.status === 'COMPLETED' 
                      ? 'bg-neon-teal/20 text-neon-teal border border-neon-teal/30' 
                      : 'bg-neon-red/20 text-neon-red border border-neon-red/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-rajdhani text-neon-teal">{project.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-orbitron text-xl font-bold mb-2 text-neon-red group-hover:glow-text transition-all">
                  {project.title}
                </h3>
                <p className="font-rajdhani text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-rajdhani bg-gray-800/50 border border-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-sm font-rajdhani text-neon-red hover:text-white transition-colors">
                    <Play className="w-4 h-4" />
                    <span>DEMO</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm font-rajdhani text-neon-teal hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                    <span>CODE</span>
                  </button>
                  <button className="flex items-center space-x-2 text-sm font-rajdhani text-gray-400 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>LIVE</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;