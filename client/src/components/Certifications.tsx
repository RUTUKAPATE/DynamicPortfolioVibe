import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { certifications } from "@/lib/data";
import { Link } from "wouter";

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Only show 4 certifications on the home page
  const featuredCertifications = certifications.slice(0, 4);

  return (
    <section id="certifications" ref={ref} className="py-20 relative">
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
            Professional certifications and workshop completions that have enhanced my skills and knowledge.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCertifications.map((cert, index) => (
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
                  <h3 className="text-lg font-bold font-poppins">{cert.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    cert.type === 'certification' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-secondary/10 text-secondary'
                  }`}>
                    {cert.type === 'certification' ? 'Cert' : 'Workshop'}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.issuer} • {cert.year}</p>
              </div>
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