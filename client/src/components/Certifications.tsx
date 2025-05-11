import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certifications } from "@/lib/data";
import { Link } from "wouter";

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Only show 3 featured certifications on home page
  const featuredCertifications = certifications.slice(0, 3);

  return (
    <section id="certifications" ref={ref} className="py-20 relative lg:container">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Certifications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional credentials and certifications I've earned throughout my career journey.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCertifications.map((certification, index) => (
            <motion.div 
              key={certification.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{certification.description}</p>
              
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/certifications" className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-medium transition-all transform hover:-translate-y-1">
            View All Certifications <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;