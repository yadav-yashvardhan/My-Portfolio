import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// All links
const navLinks = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "About" },
  { href: "#skills", title: "Skills" },
  { href: "#projects", title: "Projects" },
  { href: "#education", title: "Education" },
  { href: "#contact", title: "Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Responsive link logic
  let visibleLinks = [];
  if (windowWidth > 800) {
    visibleLinks = navLinks; // All links
  } else if (windowWidth > 700) {
    visibleLinks = navLinks.filter((link) =>
      ["#home", "#about", "#skills", "#projects", "#education"].includes(link.href)
    );
  } else if (windowWidth > 500) {
    visibleLinks = navLinks.filter((link) =>
      ["#home", "#about", "#skills", "#projects"].includes(link.href)
    );
  } else if (windowWidth > 480) {
    visibleLinks = navLinks.filter((link) =>
      ["#home", "#about", "#skills"].includes(link.href)
    );
  } else if (windowWidth > 398) {
    visibleLinks = navLinks.filter((link) =>
      ["#home", "#about", "#skills"].includes(link.href)
    );
  } else {
    visibleLinks = navLinks.filter((link) => ["#home", "#about"].includes(link.href));
  }

  // Jo visible nahi hain wo hamburger me jayenge
  const hiddenLinks = navLinks.filter((link) => !visibleLinks.includes(link));

  const renderNavLinks = (links, isMobile = false) =>
    links.map((link) => (
      <div key={link.href} className={`relative group ${isMobile ? "w-full" : ""}`}>
        <a
          href={link.href}
          className={`text-white/90 hover:text-white font-medium transition-all duration-300 z-10 relative ${
            isMobile
              ? "text-xl py-4 px-8 rounded-2xl w-full text-center block hover:bg-purple-600/20 backdrop-blur-sm"
              : "text-base px-5 py-2.5 rounded-xl hover:bg-purple-600/10"
          }`}
          onClick={isMobile ? toggleMobileMenu : undefined}
        >
          {link.title}
        </a>
        {!isMobile && (
          <>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-purple-600 group-hover:w-3/4 transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/10 to-purple-600/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </>
        )}
      </div>
    ));

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "py-2" : "py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`bg-black/40 backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
          scrolled 
            ? "border-purple-500/20 shadow-2xl shadow-purple-500/10" 
            : "border-white/10 shadow-xl shadow-purple-500/5"
        }`}>
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo/Brand (optional) */}
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {renderNavLinks(visibleLinks)}
            </div>

            {/* Resume Button & Hamburger */}
            <div className="flex items-center space-x-4">
              {windowWidth > 805 && (
                <a
                  href="https://drive.google.com/file/d/1ZMDYApkWpsQILJ--0aM1AzjRh2ba9ZWx/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-2.5 px-6 rounded-xl text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden"
                >
                  <span className="relative z-10">Resume</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              )}

              {/* Hamburger Menu Button */}
              {(hiddenLinks.length > 0 || windowWidth <= 805) && (
                <button
                  onClick={toggleMobileMenu}
                  className="relative text-white hover:text-purple-400 transition-colors duration-300 p-2.5 rounded-xl hover:bg-purple-600/10 group"
                  aria-label="Toggle mobile menu"
                >
                  <div className="relative z-10">
                    {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                  </div>
                  <div className="absolute inset-0 bg-purple-600/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out mt-3 ${
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/60 backdrop-blur-2xl rounded-2xl border border-purple-500/20 shadow-2xl shadow-purple-500/10">
            <div className="flex flex-col items-center space-y-2 py-6 px-4">
              {renderNavLinks(hiddenLinks, true)}

              {/* Resume Button in Mobile Menu */}
              {windowWidth <= 805 && (
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs text-center bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl text-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20 mt-4"
                  onClick={toggleMobileMenu}
                >
                  Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient line at bottom */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div> */}
    </nav>
  );
};

export default Navbar;








