import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "wouter";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50 transition-colors duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-poppins bg-gradient-text">
          Rutuja<span className="hidden sm:inline">.dev</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            <>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#education" className="hover:text-primary transition-colors">Education</a>
              <a href="#workshops" className="hover:text-primary transition-colors">Workshops</a>
              <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </>
          ) : (
            <>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className={`hover:text-primary transition-colors ${location === "/about" ? "text-primary font-medium" : ""}`}>About</Link>
              <Link href="/projects" className={`hover:text-primary transition-colors ${location === "/projects" ? "text-primary font-medium" : ""}`}>Projects</Link>
              <Link href="/workshops" className={`hover:text-primary transition-colors ${location === "/workshops" ? "text-primary font-medium" : ""}`}>Workshops</Link>
              <Link href="/certifications" className={`hover:text-primary transition-colors ${location === "/certifications" ? "text-primary font-medium" : ""}`}>Certifications</Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
            </>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          <button 
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {isHomePage ? (
            <>
              <a href="#about" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>About</a>
              <a href="#services" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Services</a>
              <a href="#skills" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Skills</a>
              <a href="#projects" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Projects</a>
              <a href="#education" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Education</a>
              <a href="#workshops" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Workshops</a>
              <a href="#certifications" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Certifications</a>
              <a href="#contact" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Contact</a>
            </>
          ) : (
            <>
              <Link href="/" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Home</Link>
              <Link href="/about" className={`py-2 hover:text-primary transition-colors ${location === "/about" ? "text-primary font-medium" : ""}`} onClick={closeMenu}>About</Link>
              <Link href="/projects" className={`py-2 hover:text-primary transition-colors ${location === "/projects" ? "text-primary font-medium" : ""}`} onClick={closeMenu}>Projects</Link>
              <Link href="/workshops" className={`py-2 hover:text-primary transition-colors ${location === "/workshops" ? "text-primary font-medium" : ""}`} onClick={closeMenu}>Workshops</Link>
              <Link href="/certifications" className={`py-2 hover:text-primary transition-colors ${location === "/certifications" ? "text-primary font-medium" : ""}`} onClick={closeMenu}>Certifications</Link>
              <Link href="/#contact" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Contact</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
