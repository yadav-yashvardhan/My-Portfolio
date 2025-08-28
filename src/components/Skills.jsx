import React, { useState, useEffect } from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiExpress,
  SiVercel,
  SiMysql,
} from 'react-icons/si';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [animatedBars, setAnimatedBars] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Skill categories with purple theme
  const skillCategories = {
    frontend: {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', icon: <FaReact />, level: 90, description: 'Building interactive UIs' },
        { name: 'JavaScript', icon: <FaJs />, level: 95, description: 'Core programming language' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90, description: 'Utility-first CSS framework' },
        { name: 'HTML5', icon: <FaHtml5 />, level: 98, description: 'Markup language' },
        { name: 'CSS3', icon: <FaCss3Alt />, level: 92, description: 'Styling and animations' }
      ]
    },
    backend: {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: <FaNode />, level: 88, description: 'JavaScript runtime' },
        { name: 'Express.js', icon: <SiExpress />, level: 85, description: 'Web application framework' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 90, description: 'NoSQL database' },
        { name: 'MySQL', icon: <SiMysql />, level: 80, description: 'Relational database' }
       ]
    },
    tools: {
      title: 'Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, level: 90, description: 'Version control' },
        { name: 'GitHub', icon: <FaGithub />, level: 90, description: 'Code collaboration' },
        { name: 'Vercel', icon: <SiVercel />, level: 85, description: 'Deployment platform' }
      ]
    }
  };

  // Animate progress bars when component mounts or category changes
  useEffect(() => {
    setAnimatedBars({});
    const timer = setTimeout(() => {
      const newAnimatedBars = {};
      skillCategories[selectedCategory].skills.forEach((skill, index) => {
        setTimeout(() => {
          newAnimatedBars[`${selectedCategory}-${index}`] = true;
          setAnimatedBars({...newAnimatedBars});
        }, index * 100);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="bg-black relative py-20 px-4 font-sans text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-black to-purple-900/5"></div>
      <div className="absolute top-40 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">My</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
            <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Crafting digital experiences with modern technologies and tools
          </p>
        </div>

        {/* Category Tabs - Enhanced Design */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-2">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {selectedCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-xl">{skillCategories[category].icon}</span>
                    {skillCategories[category].title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Display - Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[selectedCategory].skills.map((skill, index) => (
            <div 
              key={`${selectedCategory}-${index}`}
              className="group relative"
              onMouseEnter={() => setHoveredSkill(`${selectedCategory}-${index}`)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card content */}
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-6 hover:border-purple-500/40 transition-all duration-300">
                {/* Skill Icon and Name */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-600/20 rounded-xl blur-md"></div>
                      <div className="relative bg-black/50 p-3 rounded-xl border border-purple-500/30">
                        <div className="text-2xl text-purple-400">
                          {skill.icon}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                      <p className="text-sm text-gray-400">{skill.description}</p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar - Circular Style */}
                <div className="relative mt-6">
                  <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
                    <div 
                      className="relative h-full bg-gradient-to-r from-purple-500 to-purple-700 rounded-full transition-all duration-1500 ease-out"
                      style={{
                        width: animatedBars[`${selectedCategory}-${index}`] ? `${skill.level}%` : '0%'
                      }}
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer"></div>
                    </div>
                  </div>
                  
                  {/* Progress dots */}
                  <div className="absolute -top-1 left-0 w-4 h-4 bg-purple-600 rounded-full border-2 border-black"></div>
                  <div 
                    className="absolute -top-1 w-4 h-4 bg-purple-400 rounded-full border-2 border-black transition-all duration-1500"
                    style={{
                      left: animatedBars[`${selectedCategory}-${index}`] ? `calc(${skill.level}% - 8px)` : '0'
                    }}
                  ></div>
                </div>

                {/* Hover effect overlay */}
                {hoveredSkill === `${selectedCategory}-${index}` && (
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-700/5 rounded-2xl pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="text-purple-400 text-sm">Constantly learning</div>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div 
                  key={i}
                  className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;