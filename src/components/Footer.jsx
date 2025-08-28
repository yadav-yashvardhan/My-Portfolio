import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Code, Sparkles, Star, Zap, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { 
      icon: <Github className="w-6 h-6" />, 
      name: 'GitHub', 
      url: 'https://github.com/yadav-yashvardhan',
    },
    { 
      icon: <Linkedin className="w-6 h-6" />, 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/yash-vardhan-yadav-0a1b7b301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black py-16 px-4 overflow-hidden">
      {/* Animated gradient background matching Home.jsx */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/20"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Brand Section */}
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent">
                Yash vardhan Yadav
              </span>
            </h3>
            
            <div className="flex justify-center mb-6">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Crafting digital experiences with passion and precision
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-purple-500/30 rounded-full text-gray-300 hover:text-white hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links Section */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-center text-white mb-8">
              Let's{' '}
              <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h4>
            
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 bg-white/10 rounded-full backdrop-blur-sm border border-purple-500/30 hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <div className="text-gray-300 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mb-8">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-gray-400 text-lg">
              © {currentYear} All rights reserved
            </div>

            {/* Tech Stack Badge */}
            <div className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-full">
              <Code className="w-4 h-4 text-purple-400" />
              <span className="text-gray-300 font-medium">React • Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - New Design */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            {/* Outer ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            
            {/* Button */}
            <div className="relative bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-2xl shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-purple-600/50">
              <ChevronUp className="w-6 h-6" strokeWidth={3} />
            </div>
          </div>
        </button>
      )}

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-purple-600/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;