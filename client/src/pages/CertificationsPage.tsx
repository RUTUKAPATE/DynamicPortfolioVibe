import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { certifications } from "@/lib/data";

// Define certification types
type CertificationType = "all" | "certification" | "workshop";

const CertificationsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeType, setActiveType] = useState<CertificationType>("all");

  // Filter certifications based on active type
  const filteredCertifications = activeType === "all" 
    ? certifications 
    : certifications.filter(cert => cert.type === activeType);

  return (
    <div className="pt-20">
      <section ref={ref} className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Certifications</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and workshop completions that have enhanced my skills and knowledge.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center flex-wrap gap-4 mb-12"
          >
            <button 
              onClick={() => setActiveType("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeType === "all" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveType("certification")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeType === "certification" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Certifications
            </button>
            <button 
              onClick={() => setActiveType("workshop")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeType === "workshop" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Workshops
            </button>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <motion.div 
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-16 bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center">
                  <i className={`${cert.type === 'certification' ? 'fas fa-certificate' : 'fas fa-chalkboard-teacher'} text-4xl ${cert.type === 'certification' ? 'text-primary' : 'text-secondary'}`}></i>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-poppins">{cert.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      cert.type === 'certification' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-secondary/10 text-secondary'
                    }`}>
                      {cert.type === 'certification' ? 'Certification' : 'Workshop'}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.issuer} • {cert.year}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {cert.description}
                  </p>
                  
                  <div className="flex items-center justify-end">
                    {/* Placeholder for view certificate button */}
                    <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors flex items-center">
                      <i className="fas fa-external-link-alt mr-1"></i> View Certificate
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredCertifications.length === 0 && (
            <div className="text-center py-16">
              <i className="fas fa-award text-5xl text-gray-300 dark:text-gray-700 mb-4"></i>
              <p className="text-gray-600 dark:text-gray-400">No certifications found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CertificationsPage;