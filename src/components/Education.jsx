import React, { useState, useEffect } from 'react';
import { GraduationCap, Star, Trophy, Award, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('.education-item').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "I.M.S Engineering College",
      duration: "2023 - 2027",
      location: "Ghaziabad, Uttar-Pradesh",
      grade: "8.5 SGPA",
      description: "Developed deep understanding of software engineering principles, advanced algorithms, and system design with focus on practical applications.",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-purple-600 to-purple-700"
    },
    {
      id: 2,
      degree: 'Intermediate in Science',
      institution: 'Diamond Public School',
      duration: '2022 - 2023',
      location: 'Moradabad, Uttar Pradesh',
      grade: "70%",
      description: "Built strong academic foundation in core scientific principles with emphasis on Physics, Chemistry, and Mathematics.",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      degree: 'High School (Science Stream)',
      institution: 'Spring Fields College',
      duration: '2020 - 2021',
      location: 'Moradabad, Uttar Pradesh',
      grade: "78%",
      description: "Focused on Physics, Chemistry, and Mathematics, building analytical thinking and problem-solving skills.",
      icon: <Star className="w-6 h-6" />,
      color: "from-purple-400 to-purple-500"
    }
  ];

  return (
    <section id="education" className="relative min-h-screen bg-black py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 container max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 relative">
              My{' '}
              <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-white/30 translate-x-[-100%] animate-pulse"></div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Journey through academic excellence and continuous learning
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-16">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              id={`education-${edu.id}`}
              className={`education-item transition-all duration-1000 ${
                visibleItems.has(`education-${edu.id}`)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                
                {/* Card Content */}
                <div className="flex-1 relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  
                  <div className="relative bg-gray-900/80 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-br ${edu.color} rounded-2xl shadow-lg`}>
                        {edu.icon}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center justify-end text-purple-300 mb-1">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-semibold">{edu.duration}</span>
                        </div>
                        <div className="flex items-center justify-end text-gray-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <h4 className="text-xl font-semibold text-purple-400 mb-4">
                      {edu.institution}
                    </h4>

                    {/* Grade Badge */}
                    <div className="inline-flex items-center bg-purple-600/20 border border-purple-500/30 rounded-full px-6 py-2 mb-4">
                      <Trophy className="w-4 h-4 text-purple-400 mr-2" />
                      <span className="text-white font-bold text-lg">{edu.grade}</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-purple-600/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-600/10 rounded-full blur-xl"></div>
                  </div>
                </div>

                {/* Connecting Element */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full p-1 shadow-2xl">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <GraduationCap className="w-10 h-10 text-purple-400" />
                      </div>
                    </div>
                    
                    {/* Connecting Line */}
                    {index < education.length - 1 && (
                      <div className="absolute top-20 left-1/2 transform -translate-x-0.5 w-1 h-16 bg-gradient-to-b from-purple-500 to-transparent"></div>
                    )}
                  </div>
                </div>

                {/* Spacer for layout balance */}
                <div className="flex-1 lg:block hidden"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-xl border border-purple-500/20 rounded-full px-8 py-4">
            <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
            <span className="text-white font-semibold text-lg">
              Academic Excellence Journey
            </span>
            <div className="ml-3 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Add smooth scrolling behavior */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
};

export default Education;