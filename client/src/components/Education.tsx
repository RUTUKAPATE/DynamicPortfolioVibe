import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { education } from "@/lib/data";

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900/50 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Education</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div 
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="timeline-dot relative pl-8 pb-12 border-l-2 border-primary/30 dark:border-primary/20"
            >
              <div className="absolute -left-2.5 top-0 w-6 h-6 bg-primary rounded-full"></div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg ml-6 relative">
                <div className="absolute -left-3 top-6 w-6 h-6 bg-white dark:bg-gray-800 transform rotate-45 border-l border-b border-gray-200 dark:border-gray-700"></div>
                <h3 className="text-xl font-bold font-poppins">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.institution}</p>
                <p className="text-primary font-medium mt-1">{edu.location}</p>
                <p className="mt-2">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
