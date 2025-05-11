import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { workshops } from "@/lib/data";
import { Link } from "wouter";

const Workshops = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Only show 3 featured workshops on home page
  const featuredWorkshops = workshops.slice(0, 3);

  return (
    <section id="workshops" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900/50 relative lg:container">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Workshops & Events</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Workshops and events I've conducted and participated in to expand my knowledge and contribute to the tech community.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredWorkshops.map((workshop, index) => (
            <motion.div 
              key={workshop.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
                  <h3 className="text-xl font-bold font-poppins">{workshop.title}</h3>
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
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{workshop.description}</p>
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
          <Link href="/workshops" className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-medium transition-all transform hover:-translate-y-1">
            View All Workshops & Events <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Workshops;