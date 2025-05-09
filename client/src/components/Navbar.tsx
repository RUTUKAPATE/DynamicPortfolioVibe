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
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 flex items-center justify-center bg-primary rounded-lg shadow-lg transform group-hover:rotate-6 transition-transform">
            <span className="text-white font-bold text-xl">R</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-foreground/50 rounded-full"></div>
          </div>
          
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            <>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </>
          ) : (
            <>
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className={`hover:text-primary transition-colors ${location === "/about" ? "text-primary font-medium" : ""}`}>About</Link>
              <Link href="/projects" className={`hover:text-primary transition-colors ${location === "/projects" ? "text-primary font-medium" : ""}`}>Projects</Link>
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
              <a href="#experience" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Experience</a>
              <a href="#projects" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Projects</a>
              <a href="#certifications" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Certifications</a>
              <a href="#contact" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Contact</a>
            </>
          ) : (
            <>
              <Link href="/" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Home</Link>
              <Link href="/about" className={`py-2 hover:text-primary transition-colors ${location === "/about" ? "text-primary font-medium" : ""}`} onClick={closeMenu}>About</Link>
              <Link href="/projects" className={`py-2 hover:text-primary transition-colors ${location === "/projects" ? "text-primary font-medium" : ""}`} onClick={closeMenu}>Projects</Link>
              <Link href="/#contact" className="py-2 hover:text-primary transition-colors" onClick={closeMenu}>Contact</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
