import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "wouter";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-2xl font-bold font-poppins mb-4">Who am I?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate web developer with a background in Electronics and Telecommunication Engineering. I create modern, accessible and user-friendly websites and web applications with a focus on clean code and stunning designs.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With experience as a Software Developer at FifthTry, I've developed expertise in frontend and backend technologies. I enjoy tackling complex problems and transforming ideas into functional digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="/src/assets/Rutuja Kapate Resume.pdf"
                download="Rutuja Kapate Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg shadow-primary/20 font-medium transition-all transform hover:-translate-y-1"
              >
                <i className="fas fa-download mr-2"></i> Download CV
              </a>
              
              <Link 
                href="/about" 
                className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-medium transition-all transform hover:-translate-y-1"
              >
                Know More <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="order-1 md:order-2 relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Creative Developer Workspace" 
              className="w-full rounded-2xl shadow-xl transform rotate-2"
            />
            
            <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 transform -rotate-3">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="font-medium">Currently available for work</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
