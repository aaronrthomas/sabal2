import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import UnrealLogo from './icons/UnrealLogo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message transmitted successfully! I\'ll respond within 24 hours.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Transmission failed. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="text-neon-red glow-text">ESTABLISH</span> CONNECTION
          </h2>
          <div className="h-0.5 w-24 bg-neon-red mx-auto mb-6"></div>
          <p className="font-rajdhani text-xl text-gray-300">
            READY TO BUILD THE FUTURE TOGETHER?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-orbitron text-2xl font-bold mb-6 text-neon-red">
                TRANSMISSION PROTOCOLS
              </h3>
              <p className="font-rajdhani text-lg text-gray-300 mb-8">
                Ready to collaborate on your next digital frontier? Let's connect 
                and discuss how we can bring your vision to life through cutting-edge 
                Unreal Engine development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neon-red/20 border border-neon-red/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-neon-red" />
                  </div>
                </div>
                <div>
                  <div className="font-rajdhani text-sm text-gray-400">EMAIL PROTOCOL</div>
                  <div className="font-rajdhani text-lg text-white">sabalkrpc2811@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neon-teal/20 border border-neon-teal/30 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-neon-teal" />
                  </div>
                </div>
                <div>
                  <div className="font-rajdhani text-sm text-gray-400">VOICE CHANNEL</div>
                  <div className="font-rajdhani text-lg text-white">+91 75948 80678</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-neon-purple/20 border border-neon-purple/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-neon-purple" />
                  </div>
                </div>
                <div>
                  <div className="font-rajdhani text-sm text-gray-400">PHYSICAL LOCATION</div>
                  <div className="font-rajdhani text-lg text-white">Trivandrum, Kerala, India</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-orbitron text-lg font-bold mb-4 text-neon-teal">
                SOCIAL NETWORKS
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/sabal-krishna-s-29b758298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 bg-blue-600/20 border border-blue-600/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600/30 group-hover:border-blue-600/50 group-hover:shadow-lg group-hover:shadow-blue-600/20">
                    <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  </div>
                </a>
                <a
                  href="https://github.com/SabalKR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 bg-gray-600/20 border border-gray-600/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-gray-600/30 group-hover:border-gray-600/50 group-hover:shadow-lg group-hover:shadow-gray-600/20">
                    <Github className="w-5 h-5 text-gray-300 group-hover:text-white" />
                  </div>
                </a>
                <a
                  href="https://create.fortnite.com/22e84a77-69cf-4d8c-b051-ecf41aff30c1/projects/c9906943-4a9b-6c1e-54a5-d8b7afdc9b9c/releases"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="w-12 h-12 bg-neon-red/20 border border-neon-red/30 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-neon-red/30 group-hover:border-neon-red/50 group-hover:shadow-lg group-hover:shadow-neon-red/20">
                    <UnrealLogo className="w-5 h-5 text-neon-red group-hover:text-white" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="cyber-input-group">
                  <label className="cyber-label">NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="cyber-input"
                    required
                  />
                </div>
                <div className="cyber-input-group">
                  <label className="cyber-label">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="cyber-input"
                    required
                  />
                </div>
              </div>

              <div className="cyber-input-group">
                <label className="cyber-label">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="cyber-input"
                  required
                />
              </div>

              <div className="cyber-input-group">
                <label className="cyber-label">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="cyber-input resize-none"
                  required
                ></textarea>
              </div>

              {submitStatus.type && (
                <div className={`p-4 rounded-lg border ${
                  submitStatus.type === 'success' 
                    ? 'bg-neon-teal/10 border-neon-teal/30 text-neon-teal' 
                    : 'bg-neon-red/10 border-neon-red/30 text-neon-red'
                }`}>
                  <p className="font-rajdhani text-sm">{submitStatus.message}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`cyber-button w-full group ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className={`w-5 h-5 mr-2 transition-transform ${
                  isSubmitting ? 'animate-pulse' : 'group-hover:scale-110'
                }`} />
                {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="font-rajdhani text-gray-400">
            © 2025 ALEX QUANTUM. ALL SYSTEMS OPERATIONAL.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;