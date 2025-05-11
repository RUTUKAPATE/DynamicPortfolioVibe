const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 py-16 lg:container">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <a href="/" className="group">
            <div className="relative w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg shadow-xl transform group-hover:rotate-6 transition-transform">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl">
                R
              </span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-foreground/50 rounded-full"></div>  
            </div>
            </a>
            <p className="text-gray-400 max-w-md">
              A passionate web developer and electronics engineer creating
              unique digital experiences with modern technologies.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/RUTUKAPATE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-all transform hover:-translate-y-1"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/rutuja-kapate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-all transform hover:-translate-y-1"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="https://x.com/KapateRutuja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-all transform hover:-translate-y-1"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="mailto:rutuja16kapate@gmail.com"
                className="text-gray-400 hover:text-primary transition-all transform hover:-translate-y-1"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4 text-white">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href="/#about"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="/#experience"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a
                href="/#skills"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a
                href="/#project"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="/#education"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Education
              </a>
              <a
                href="/#workshops"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Workshops & Events
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4 text-white">Services</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="/#services"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Web Development
              </a>
              <a
                href="/#services"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                UI/UX Design
              </a>
              <a
                href="/#services"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Mobile Development
              </a>
              <a
                href="/#services"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Technical Workshops
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <p className="text-gray-400">Nagpur, Maharashtra, India</p>
              <p>
              <a
                href="mailto:rutuja16kapate@gmail.com"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                rutuja16kapate@gmail.com
              </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Rutuja Kapate. All rights reserved.
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">
            Made with <i className="fas fa-heart text-red-500 mx-1"></i> using
            modern technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
