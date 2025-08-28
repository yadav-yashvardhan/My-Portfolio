import React from 'react';
import { FaCode, FaLightbulb, FaRocket, FaHeart, FaServer, FaDatabase, FaPalette, FaGlobe } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from 'react-icons/si';
import IMG from '../assets/young-man.png';

const About = () => {
  const skills = [
    { icon: <SiReact className="text-3xl" />, name: "React", color: "from-purple-400 to-purple-600" },
    { icon: <SiNodedotjs className="text-3xl" />, name: "Node.js", color: "from-purple-500 to-purple-700" },
    { icon: <SiMongodb className="text-3xl" />, name: "MongoDB", color: "from-purple-600 to-purple-800" },
    { icon: <SiExpress className="text-3xl" />, name: "Express", color: "from-purple-400 to-purple-600" },
  ];

  const highlights = [
    { icon: <FaCode />, text: "Clean Code Architecture", delay: "0ms" },
    { icon: <FaRocket />, text: "Performance Optimization", delay: "100ms" },
    { icon: <FaPalette />, text: "Modern UI/UX Design", delay: "200ms" },
    { icon: <FaGlobe />, text: "Scalable Solutions", delay: "300ms" },
  ];

  return (
    <section id="about" className="bg-black relative py-20 px-4 font-sans text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-purple-900/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">About</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
            <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column: Enhanced Image */}
          <div className="hidden lg:flex lg:w-1/2 justify-center">
            <div className="relative group">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 rounded-3xl blur-md group-hover:blur-lg transition-all duration-300 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative bg-black p-1 rounded-3xl">
                <img
                  src={IMG}
                  alt="About me"
                  className="rounded-3xl w-80 h-96 md:w-96 md:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 via-transparent to-transparent rounded-3xl"></div>
              </div>

              {/* Floating skill badges */}
              <div className="absolute -top-6 -right-6 bg-black/80 backdrop-blur-sm p-3 rounded-2xl border border-purple-500/30 shadow-xl shadow-purple-500/20">
                <FaCode className="text-2xl text-purple-400" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur-sm p-3 rounded-2xl border border-purple-500/30 shadow-xl shadow-purple-500/20">
                <FaDatabase className="text-2xl text-purple-400" />
              </div>
            </div>
          </div>

          {/* Right Column: Enhanced Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Title with gradient */}
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Full-Stack MERN Developer
              </span>
            </h3>

            {/* Description with better styling */}
            <div className="space-y-6 mb-10">
              <p className="text-lg text-gray-300 leading-relaxed">
                I am a MERN Stack Developer with a passion for building complete, end-to-end web applications. 
                I specialize in leveraging <span className="text-purple-400 font-semibold">React</span> to craft dynamic, 
                responsive, and intuitive front-end interfaces that deliver a seamless user experience.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                On the server-side, I utilize <span className="text-purple-400 font-semibold">Node.js</span> and 
                <span className="text-purple-400 font-semibold"> Express.js</span> to architect and build robust, 
                scalable RESTful APIs. I am skilled in managing the application's data layer with 
                <span className="text-purple-400 font-semibold"> MongoDB</span>, ensuring efficient and reliable database performance.
              </p>
            </div>

            {/* Tech Stack Icons */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold mb-4 text-purple-300">Tech Stack</h4>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group relative bg-black/50 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                    <div className="relative z-10 flex flex-col items-center gap-2">
                      <div className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-purple-900/10 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                  style={{ animationDelay: highlight.delay }}
                >
                  <div className="text-purple-400">
                    {highlight.icon}
                  </div>
                  <span className="text-sm text-gray-300">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '400ms' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;