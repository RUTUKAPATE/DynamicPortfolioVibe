import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/lib/data";
import { useState } from "react";
import { Link } from "wouter";

type ProjectCategory = "all" | "frontend" | "backend" | "fullstack";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  // Only show a maximum of 3 projects on the home page
  const filteredProjects = activeCategory === "all" 
    ? projects.slice(0, 3) 
    : projects.filter(project => project.category === activeCategory).slice(0, 3);

  return (
    <section id="projects" ref={ref} className="py-20 relative lg:container">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work, showcasing my skills and expertise in web development.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center flex-wrap gap-4 mb-12"
        >
          <button 
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === "all" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setActiveCategory("frontend")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === "frontend" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Frontend
          </button>
          <button 
            onClick={() => setActiveCategory("backend")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === "backend" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Backend
          </button>
          <button 
            onClick={() => setActiveCategory("fullstack")}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeCategory === "fullstack" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            Full Stack
          </button>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-56 object-cover" 
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold font-poppins">{project.title}</h3>
                  <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors">
                    <i className="fas fa-link mr-1"></i> Live Demo
                  </a>
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-medium transition-colors">
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <i className="fas fa-search text-5xl text-gray-300 dark:text-gray-700 mb-4"></i>
            <p className="text-gray-600 dark:text-gray-400">No projects found in this category. Check back later!</p>
          </div>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/projects" className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-medium transition-all transform hover:-translate-y-1">
            View All Projects <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
