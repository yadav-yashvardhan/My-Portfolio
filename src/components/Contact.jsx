import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageSquare, Clock, CheckCircle, AlertTriangle, Heart, Sparkles, Zap } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsVisible(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Contact information with enhanced styling
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'yashvardhanrao8@gmail.com',
      link: 'mailto:yashvardhanrao8@gmail.com',
      description: 'Drop me a line anytime',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-500/10 to-purple-600/10'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+91 9412443804',
      link: 'tel:+91 9412443804',
      description: 'Available for calls',
      gradient: 'from-purple-400 to-purple-500',
      bgGradient: 'from-purple-400/10 to-purple-500/10'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Ghaziabad, Uttar Pradesh',
      link: '#contact',
      description: 'Open to remote work',
      gradient: 'from-purple-600 to-purple-700',
      bgGradient: 'from-purple-600/10 to-purple-700/10'
    }
  ];

  // Social media links with animations
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: 'GitHub',
      url: 'https://github.com/yadav-yashvardhan',
      color: 'hover:text-gray-300',
      bgColor: 'hover:bg-gray-600/20'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/yash-vardhan-yadav-0a1b7b301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"',
      color: 'hover:text-purple-400',
      bgColor: 'hover:bg-purple-600/20'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div className="relative min-h-screen bg-black py-20 px-4 overflow-hidden" id="contact">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Interactive Cursor Effect */}
      <div 
        className="fixed w-4 h-4 bg-purple-400/30 rounded-full blur-sm pointer-events-none z-50 transition-all duration-300"
        style={{ 
          left: mousePosition.x - 8, 
          top: mousePosition.y - 8,
          transform: `scale(${isVisible ? 1 : 0})`
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const icons = [
            <Sparkles key={i} className="w-4 h-4 text-purple-400/30" />,
            <Zap key={i} className="w-3 h-3 text-purple-400/30" />,
            <Heart key={i} className="w-3 h-3 text-purple-400/30" />
          ];
          
          return (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {icons[i % 3]}
            </div>
          );
        })}
      </div>

      <div className="relative z-10 container max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative inline-block mb-8">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-6 relative">
              Let's{' '}
              <span className="bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="w-40 h-2 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-white/30 transform -translate-x-full animate-pulse"></div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's create something extraordinary together
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-600/10 blur-xl rounded-3xl"></div>
              
              <div className="relative bg-gray-900/60 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Start a{' '}
                  <span className="text-purple-400">
                    Conversation
                  </span>
                </h3>
                
                <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                  I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your visions. Let's turn concepts into reality!
                </p>

                {/* Contact Cards */}
                <div className="space-y-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="group relative">
                      <div className="absolute -inset-1 bg-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                      
                      <a
                        href={info.link}
                        className="relative flex items-center gap-6 bg-gray-800/40 backdrop-blur-sm border border-purple-500/10 rounded-2xl p-6 hover:border-purple-400/30 transition-all duration-500 group-hover:scale-105"
                      >
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-purple-500/25`}>
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-purple-300 font-semibold mb-1 text-lg">
                            {info.value}
                          </p>
                          <p className="text-gray-400">
                            {info.description}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="border-t border-purple-500/20 pt-8">
                  <h4 className="text-xl font-bold text-white mb-6">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-14 h-14 bg-gray-800/60 border border-purple-500/20 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 hover:border-purple-400/40 ${social.color} ${social.bgColor}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-600/10 blur-xl rounded-3xl"></div>
              
              <div className="relative bg-gray-900/60 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Send a{' '}
                  <span className="text-purple-400">
                    Message
                  </span>
                </h3>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center gap-4 text-green-400">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-8 p-6 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center gap-4 text-red-400">
                    <AlertTriangle className="w-6 h-6" />
                    <span className="text-lg">Oops! Something went wrong. Please try again.</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-purple-300 mb-3">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl py-4 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg group-hover:border-purple-400/40"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative group">
                      <label className="block text-sm font-semibold text-purple-300 mb-3">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl py-4 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg group-hover:border-purple-400/40"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-purple-300 mb-3">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl py-4 px-6 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg group-hover:border-purple-400/40"
                      placeholder="Let's create something amazing!"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative group">
                    <label className="block text-sm font-semibold text-purple-300 mb-3">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-6 text-purple-400 w-5 h-5" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="6"
                        className="w-full bg-gray-800/50 border border-purple-500/20 rounded-xl py-4 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-lg resize-none group-hover:border-purple-400/40"
                        placeholder="Tell me about your project, ideas, or just say hello! I'm excited to hear from you..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-6 px-8 rounded-xl text-xl hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="relative flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <Clock className="animate-spin w-6 h-6" />
                          Sending Magic...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          Send Message
                        </>
                      )}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-purple-900/30 to-purple-800/30 backdrop-blur-xl border border-purple-500/20 rounded-full px-10 py-4">
            <Sparkles className="w-6 h-6 text-purple-400 mr-3 animate-pulse" />
            <span className="text-white font-semibold text-xl">
              Let's Build Something Amazing Together
            </span>
            <div className="ml-3 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Add smooth scrolling behavior */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Contact;