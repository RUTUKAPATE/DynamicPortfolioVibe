import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

type ProjectCategory = "all" | "frontend" | "backend" | "fullstack";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  
  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in web development, user interface design, and problem-solving.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2 rounded-full ${
              activeCategory === "all" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            } transition-colors`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setActiveCategory("frontend")}
            className={`px-5 py-2 rounded-full ${
              activeCategory === "frontend" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            } transition-colors`}
          >
            Frontend
          </button>
          <button 
            onClick={() => setActiveCategory("backend")}
            className={`px-5 py-2 rounded-full ${
              activeCategory === "backend" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            } transition-colors`}
          >
            Backend
          </button>
          <button 
            onClick={() => setActiveCategory("fullstack")}
            className={`px-5 py-2 rounded-full ${
              activeCategory === "fullstack" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            } transition-colors`}
          >
            Full Stack
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className={`px-3 py-1 rounded-full text-xs text-white ${
                    project.category === "frontend" 
                      ? "bg-blue-500" 
                      : project.category === "backend" 
                        ? "bg-green-500" 
                        : "bg-purple-500"
                  }`}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center"
                    >
                      Live Demo <i className="fas fa-external-link-alt ml-1"></i>
                    </a>
                  )}
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-medium transition-colors flex items-center"
                    >
                      Code <i className="fab fa-github ml-1"></i>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4 opacity-20">👩‍💻</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No projects available in the {activeCategory} category at the moment.
            </p>
            <button 
              onClick={() => setActiveCategory("all")}
              className="mt-4 px-5 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;