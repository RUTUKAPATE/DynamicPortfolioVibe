import { Model3D } from "@/components/ui/3d-model";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen pt-20 flex items-center relative overflow-hidden lg:container">
      <motion.div style={{ opacity }} className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-1/2 z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg md:text-xl font-medium text-primary mb-2"
          >
            Hello, I'm
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-poppins bg-gradient-text mb-4"
          >
            Rutuja Kapate
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-6"
          >
            Web Developer & Electronics Engineer
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-700 dark:text-gray-300 mb-8 max-w-lg"
          >
            Crafting engaging digital experiences with modern technologies.
            Final year student passionate about creating intuitive and performant web applications.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg shadow-primary/20 font-medium transition-all transform hover:-translate-y-1">
              Contact Me
            </a>
            <a href="#projects" className="px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-medium transition-all transform hover:-translate-y-1">
              View Projects
            </a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex mt-8 gap-6"
          >
            <a href="https://github.com/RUTUKAPATE/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/rutuja-kapate" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="https://x.com/KapateRutuja" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="mailto:rutuja16kapate@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 flex justify-center z-10"
        >
          <div className="w-full max-w-md rounded-full bg-gray-100 dark:bg-gray-800 p-2 shadow-2xl animate-float">
            <Model3D />
          </div>
        </motion.div>
      </motion.div>
      
      {/* Background elements */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
