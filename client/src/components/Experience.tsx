import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Experience data
const experiences = [
  {
    company: "FifthTry",
    position: "Software Developer",
    period: "Jan 2023 - Jul 2023",
    description: "Worked on developing web applications using modern frontend technologies. Implemented responsive UI components and collaborated with cross-functional teams to deliver high-quality software solutions.",
    responsibilities: [
      "Developed responsive UI components using React and Tailwind CSS",
      "Implemented new features and fixed bugs in existing applications",
      "Collaborated with design and backend teams to implement user requirements",
      "Participated in code reviews and technical discussions"
    ],
    logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    company: "Intern at TechSolutions",
    position: "Web Development Intern",
    period: "May 2022 - Aug 2022",
    description: "Gained hands-on experience in web development by assisting the development team with various tasks and learning from experienced developers.",
    responsibilities: [
      "Assisted senior developers in implementing frontend components",
      "Learned and applied modern web development practices",
      "Created documentation for existing codebase",
      "Tested applications for bugs and usability issues"
    ],
    logo: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    company: "College Project",
    position: "Team Lead",
    period: "Sep 2021 - Apr 2022",
    description: "Led a team of 4 students in developing a home automation system as part of the final year project. Integrated sensors and controllers with a mobile application interface.",
    responsibilities: [
      "Managed project timeline and team coordination",
      "Developed the mobile application interface using React Native",
      "Integrated IoT devices and sensors with the application",
      "Presented the project at college technical symposium"
    ],
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900/50 relative">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and work experience in the tech industry.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot - only visible on medium screens and up */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
                
                <div className={`md:w-5/12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                }`}>
                  <div className="flex items-center mb-4">
                    <img 
                      src={exp.logo} 
                      alt={exp.company} 
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;