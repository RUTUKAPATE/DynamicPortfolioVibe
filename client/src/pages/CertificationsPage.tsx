import { useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "@/lib/data";

type CertificationType = "all" | "technical" | "professional";

const CertificationsPage = () => {
  const [activeType, setActiveType] = useState<CertificationType>("all");
  
  const filteredCertifications = activeType === "all"
    ? certifications
    : certifications.filter(certification => certification.type === activeType);

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional credentials and certifications I've earned throughout my career journey.
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
            All Certifications
          </button>
          <button 
            onClick={() => setActiveType("technical")}
            className={`px-5 py-2 rounded-full ${
              activeType === "technical" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            } transition-colors`}
          >
            Technical
          </button>
          <button 
            onClick={() => setActiveType("professional")}
            className={`px-5 py-2 rounded-full ${
              activeType === "professional" 
                ? "bg-primary text-white" 
                : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            } transition-colors`}
          >
            Professional
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((certification, index) => (
            <motion.div 
              key={certification.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="mb-4">
                <img 
                  src={certification.image || 'https://placehold.co/100x100?text=Cert'} 
                  alt={certification.title} 
                  className="w-20 h-20 object-contain mb-4" 
                />
                <span className={`px-3 py-1 rounded-full text-xs ${
                  certification.type === 'professional' 
                    ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400' 
                    : 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400'
                }`}>
                  {certification.type === 'professional' ? 'Professional' : 'Technical'}
                </span>
              </div>
              
              <h3 className="text-xl font-bold font-poppins mb-2">{certification.title}</h3>
              <p className="text-primary font-medium text-sm mb-2">{certification.issuer} • {certification.year}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{certification.description}</p>
              
              {certification.url && (
                <a 
                  href={certification.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center"
                >
                  View Credential <i className="fas fa-external-link-alt ml-2"></i>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertifications.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4 opacity-20">🏆</div>
            <h3 className="text-xl font-semibold mb-2">No certifications found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              No {activeType} certifications available at the moment.
            </p>
            <button 
              onClick={() => setActiveType("all")}
              className="mt-4 px-5 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            >
              View All Certifications
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationsPage;