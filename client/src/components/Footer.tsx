const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <a href="#" className="text-3xl font-bold font-poppins bg-gradient-text mb-4 inline-block">
              Rutuja<span className="hidden sm:inline">.dev</span>
            </a>
            <p className="max-w-md mt-4">
              A passionate web developer and electronics engineer creating unique digital experiences with modern technologies.
            </p>
            
            <div className="flex mt-6 space-x-5">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="mailto:rutuja16kapate@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="md:text-right">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#education" className="hover:text-primary transition-colors">Education</a>
              <a href="#awards" className="hover:text-primary transition-colors">Awards</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Rutuja Kapate. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed with <i className="fas fa-heart text-red-500"></i> and modern technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
