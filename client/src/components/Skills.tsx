import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skillsCategories } from "@/lib/data";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    { id: "frontend", title: "Frontend", color: "from-blue-500 to-indigo-500" },
    { id: "backend", title: "Backend", color: "from-green-500 to-emerald-500" },
    { id: "database", title: "Database", color: "from-orange-500 to-amber-500" },
    { id: "tools", title: "Tools & Others", color: "from-purple-500 to-violet-500" },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900/50 relative lg:container">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical toolkit is diverse, spanning from frontend frameworks to database management systems.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="mb-8"
            >
              <h3 className={`text-2xl font-bold font-poppins mb-6 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skillsCategories[category.id as keyof typeof skillsCategories].map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.05) }}
                    className="skill-bubble bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300`}>
                      <i className={`${skill.icon} text-gray-800 dark:text-white text-3xl font-bold transition-all duration-300 group-hover:scale-110`}></i>
                    </div>
                    <h3 className="font-bold font-poppins group-hover:text-primary transition-colors duration-300">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
