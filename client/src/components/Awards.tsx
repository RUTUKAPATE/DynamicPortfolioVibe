import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { awards, certifications } from "@/lib/data";

const Awards = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="awards" ref={ref} className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Awards & Community Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <motion.div 
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <i className={`${award.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold font-poppins mb-2">{award.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold font-poppins mb-6 text-center">Certifications & Workshops</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg flex items-start"
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className={`${cert.type === 'certification' ? 'fas fa-certificate' : 'fas fa-chalkboard-teacher'} text-primary`}></i>
                </div>
                <div>
                  <h4 className="font-bold font-poppins mb-1">{cert.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer} • {cert.year}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
