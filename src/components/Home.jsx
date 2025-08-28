import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ProfileImage from '../assets/portfolioimg.png';

const Home = () => {
  return (
    // Main container with gradient background
    <section id="home" className="relative bg-black pt-12 px-4 font-sans text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/20 animate-gradient-shift"></div>
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative bg-transparent min-h-screen flex items-center justify-center font-sans text-white p-4 pt-0">
        
        {/* Container to control max-width and center the content */}
        <div className="container max-w-7xl mt-0 mx-auto">
          
          {/* Flex container for the two-column layout */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">

            {/* Left Column: Text Content */}
            <div className="md:w-1/2 text-center md:text-left max-[995px]:mt-24 z-10">

              
              {/* Main Heading with gradient text */}
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
                <span className="text-white">Hi, I am</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                  Yash Vardhan Yadav
                </span>
              </h1>
              
              {/* Animated role text */}
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-500/50 rounded-full text-purple-300 font-medium backdrop-blur-sm">
                  MERN Stack Developer
                </span>
              </div>
              
              {/* Subheading/Tagline with glass effect */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 mb-10 border border-purple-500/20 shadow-2xl">
                <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                  A passionate developer with hands-on experience in building and deploying end-to-end web applications. 
                  I craft intuitive interfaces with <span className="text-purple-400 font-semibold">React</span>, 
                  build robust APIs with <span className="text-purple-400 font-semibold">Node.js & Express</span>, 
                  and manage data with <span className="text-purple-400 font-semibold">MongoDB</span>. 
                  My problem-solving prowess is proven by solving <span className="text-purple-400 font-bold">150+ LeetCode</span> challenges.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                <a 
                  href="#projects" 
                  className="group relative inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg 
                            hover:from-purple-700 hover:to-purple-800 transition-all duration-300 ease-in-out 
                            transform hover:scale-105 shadow-2xl shadow-purple-600/50 overflow-hidden"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
                
                <a 
                  href="#contact" 
                  className="inline-block bg-transparent border-2 border-purple-500 text-purple-400 font-bold py-4 px-8 rounded-full text-lg 
                            hover:bg-purple-500 hover:text-white transition-all duration-300 ease-in-out 
                            transform hover:scale-105"
                >
                  Get In Touch
                </a>
              </div>

              {/* Social Media Links with hover effects */}
              <div className="flex justify-center md:justify-start space-x-6">
                <a
                  href="https://github.com/yadav-yashvardhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group relative p-3 bg-white/10 rounded-full backdrop-blur-sm border border-purple-500/30
                           hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <FaGithub size={28} className="text-gray-300 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/yash-vardhan-yadav-0a1b7b301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group relative p-3 bg-white/10 rounded-full backdrop-blur-sm border border-purple-500/30
                           hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <FaLinkedin size={28} className="text-gray-300 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://leetcode.com/u/yadav-yashvardhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode"
                  className="group relative p-3 bg-white/10 rounded-full backdrop-blur-sm border border-purple-500/30
                           hover:bg-purple-600 hover:border-purple-400 transition-all duration-300 transform hover:scale-110"
                >
                  <img
                    src="https://assets.leetcode.com/users/leetcode/avatar_1568224780.png"
                    alt="LeetCode Avatar"
                    className="w-7 h-7 rounded-full group-hover:brightness-110 transition-all"
                  />
                </a>
              </div>
            </div>

            {/* Right Column: Image with effects */}
            <div className="md:w-1/2 flex justify-center relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              
              {/* Image container with border animation */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-purple-400 to-purple-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
                <img 
                  src={ProfileImage} 
                  alt="Profile" 
                  className="relative rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-black shadow-2xl transform transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
            </div>

          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add custom animations in your CSS file */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(30px) translateY(-30px);
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(10px);
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Home;