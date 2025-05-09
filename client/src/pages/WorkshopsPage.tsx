import { useState } from "react";
import { motion } from "framer-motion";
import { workshops } from "@/lib/data";

type WorkshopType = "all" | "conducted" | "attended";

const WorkshopsPage = () => {
  const [activeType, setActiveType] = useState<WorkshopType>("all");
  
  const filteredWorkshops = activeType === "all"
    ? workshops
    : workshops.filter(workshop => workshop.type === activeType);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Workshops & Events</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Workshops and events I've conducted and participated in to expand my knowledge and contribute to the tech community.
          </p>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveType("all")}
            className={`px-5 py-2 rounded-full ${
              activeType === "all" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            } transition-colors`}
          >
            All Events
          </button>
          <button 
            onClick={() => setActiveType("conducted")}
            className={`px-5 py-2 rounded-full ${
              activeType === "conducted" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            } transition-colors`}
          >
            Conducted
          </button>
          <button 
            onClick={() => setActiveType("attended")}
            className={`px-5 py-2 rounded-full ${
              activeType === "attended" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            } transition-colors`}
          >
            Attended
          </button>
        </div>

        {/* Workshops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.map((workshop, index) => (
            <motion.div 
              key={workshop.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <img 
                src={workshop.image} 
                alt={workshop.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{workshop.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    workshop.type === 'conducted' 
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                      : 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                  }`}>
                    {workshop.type === 'conducted' ? 'Conducted' : 'Attended'}
                  </span>
                </div>
                <p className="text-primary font-medium text-sm mb-2">{workshop.role} • {workshop.date}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{workshop.organization}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{workshop.description}</p>
                
                {workshop.certificateUrl && (
                  <a 
                    href={workshop.certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center"
                  >
                    View Certificate <i className="fas fa-certificate ml-2"></i>
                  </a>
                )}
                
                {workshop.slidesUrl && (
                  <a 
                    href={workshop.slidesUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center mt-2"
                  >
                    View Slides <i className="fas fa-presentation ml-2"></i>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorkshops.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4 opacity-20">🎓</div>
            <h3 className="text-xl font-semibold mb-2">No workshops found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No {activeType} workshops or events available at the moment.
            </p>
            <button 
              onClick={() => setActiveType("all")}
              className="mt-4 px-5 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              View All Workshops
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkshopsPage;