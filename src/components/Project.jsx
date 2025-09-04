import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaCode, FaRocket } from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiPostgresql, SiExpress, SiJavascript,
  SiHtml5, SiCss3
} from 'react-icons/si';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Project categories with icons
  const categories = [
    { id: 'all', label: 'All Projects', icon: '💎' },
    { id: 'fullstack', label: 'Full Stack', icon: '🚀' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' }
  ];

  // Tech stack icons mapping with colors
  const techIcons = {
    'React': { icon: <FaReact />, color: 'text-purple-400' },
    'Node.js': { icon: <FaNode />, color: 'text-purple-500' },
    'Express': { icon: <SiExpress />, color: 'text-purple-300' },
    'MongoDB': { icon: <SiMongodb />, color: 'text-purple-600' },
    'PostgreSQL': { icon: <SiPostgresql />, color: 'text-purple-400' },
    'Tailwind CSS': { icon: <SiTailwindcss />, color: 'text-purple-500' },
    'JavaScript': { icon: <SiJavascript />, color: 'text-purple-300' },
    'HTML': { icon: <SiHtml5 />, color: 'text-purple-400' },
    'CSS': { icon: <SiCss3 />, color: 'text-purple-500' }
  };

  // Projects data with enhanced properties
  const projects = [
    {
      id: 2,
      title: 'baskito',
      description: "A full-featured e-commerce platform with real-time inventory management, secure payment processing, and admin dashboard.",
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=baskito',
      category: 'fullstack',
      techStack: ['Node.js', 'Express', 'MongoDB', 'HTML','JavaScript'],
      liveUrl: '',
      githubUrl: 'https://github.com/yadav-yashvardhan/Baskito-Grocery-Project',
      featured: true,
      status: 'Completed'
    },
    {
      id: 3,
      title: 'RecipeFinder',
      description: 'A smart recipe suggestion app that recommends dishes, ingredients, and cooking instructions based on the ingredients you already have.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=RecipeFinder',
      category: 'fullstack',
      techStack: ['React', 'API', 'JavaScript','HTML','Tailwind CSS'],
      liveUrl: 'https://recipes-idea-project-0oxy.onrender.com',
      githubUrl: 'https://github.com/yadav-yashvardhan/Recipes-Idea-Project',
      featured: true,
      status: 'Completed'
    },
    {
      id: 4,
      title: 'ERAYA',
      description: 'A luxurious cosmetic e-commerce website with an elegant UI, smooth shopping flow, and rich product displays.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=ERAYA',
      category: 'fullstack',
      techStack: ['JavaScript', 'HTML', 'CSS','React'],
      liveUrl: 'https://eraya-cosmetic-project.onrender.com/',
      githubUrl: 'https://github.com/yadav-yashvardhan/ERAYA-Cosmetic-Project',
      featured: false,
      status: 'Developing'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations and modern design.',
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=Portfolio',
      category: 'frontend',
      techStack: ['React', 'Tailwind CSS', 'JavaScript'],
      liveUrl: '',
      githubUrl: 'https://github.com/yadav-yashvardhan/My-Portfolio',
      featured: false,
      status: 'Live'
    },
    {
      id: 1,
      title: 'SwiftLogistics',
      description: "A full-stack logistics management platform where users can add multiple pickup and drop locations with items simultaneously.",
      image: 'https://placehold.co/600x400/1a1a1a/9333ea?text=SwiftLogistics',
      category: 'fullstack',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'],
      liveUrl: 'https://swiftlogistics-d09a.onrender.com',
      githubUrl: 'https://github.com/yadav-yashvardhan/SwiftLogistics',
      featured: true,
      status: 'Completed'
    }
  ];

  // Filter and sort projects by ID in ascending order
  const filteredProjects = selectedFilter === 'all'
    ? projects.sort((a, b) => a.id - b.id)
    : projects.filter(project => project.category === selectedFilter).sort((a, b) => a.id - b.id);

  // Status color mapping
  const statusColors = {
    'Live': 'bg-green-500/20 text-green-400 border-green-400/30',
    'In Development': 'bg-purple-500/20 text-purple-400 border-purple-400/30',
    'Completed': 'bg-blue-500/20 text-blue-400 border-blue-400/30'
  };

  return (
    <section id="projects" className="bg-black relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 font-sans text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-purple-900/10"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(purple 1px, transparent 1px), linear-gradient(90deg, purple 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-64 h-48 sm:h-64 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-purple-700/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container max-w-7xl mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <div className="flex items-center gap-2 text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              <FaCode />
              <span>Featured Work</span>
              <FaCode />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">My</span>{' '}
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent to-purple-500 rounded-full"></div>
            <FaRocket className="text-purple-500 animate-bounce w-5 h-5 sm:w-6 sm:h-6" />
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-l from-transparent to-purple-500 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into powerful digital solutions
          </p>
        </div>

        {/* Filter Pills - New Design */}
        <div className="flex justify-center mb-8 sm:mb-12 md:mb-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20 p-1 sm:p-2">
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`relative px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-300 ${
                    selectedFilter === category.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {selectedFilter === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-1 sm:gap-2">
                    <span className="text-base sm:text-lg">{category.icon}</span>
                    {category.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid - Bento Box Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${project.featured ? 'sm:col-span-2 lg:col-span-2' : ''}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card Container */}
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-3xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:transform hover:scale-[1.02]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 via-purple-600/5 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Image Section */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center gap-1 sm:gap-2">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-md ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                    {project.featured && (
                      <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Number */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/10">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {project.techStack.map((tech, idx) => (
                      <div
                        key={idx}
                        className="group/tech flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-purple-900/20 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                      >
                        <span className={`text-base sm:text-lg ${techIcons[tech]?.color}`}>
                          {techIcons[tech]?.icon}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-300 group-hover/tech:text-white transition-colors">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-xs sm:text-sm hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                      >
                        <FaExternalLinkAlt size={14} className="sm:size-16" />
                        Live Demo
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center py-2 sm:py-3 bg-purple-900/20 text-purple-400 rounded-xl font-semibold text-xs sm:text-sm border border-purple-500/20">
                        Coming Soon
                      </div>
                    )}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 bg-white/5 text-white rounded-xl font-semibold text-xs sm:text-sm border border-purple-500/20 hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300"
                      >
                        <FaGithub size={16} className="sm:size-18" />
                        Source Code
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center py-2 sm:py-3 bg-white/5 text-gray-500 rounded-xl font-semibold text-xs sm:text-sm border border-gray-700">
                        Private Repo
                      </div>
                    )}
                  </div>
                </div>

                {/* Hover Gradient Overlay */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-shimmer"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View More Section */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <a
            href="https://github.com/yadav-yashvardhan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm sm:text-base rounded-2xl border border-purple-500/20 hover:bg-purple-600/10 hover:border-purple-500/40 transition-all duration-300 group"
          >
            <FaGithub size={20} className="sm:size-24 group-hover:rotate-12 transition-transform duration-300" />
            <span>Explore More Projects</span>
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </a>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center items-center gap-3 sm:gap-4">
          <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-transparent to-purple-500"></div>
          <div className="text-purple-400">
            <FaCode className="animate-spin-slow w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="h-px w-24 sm:w-32 bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;

