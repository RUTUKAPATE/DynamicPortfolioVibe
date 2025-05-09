import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

// Workshop data
const workshops = [
  {
    title: "fastn Language Workshop",
    role: "Presenter",
    organization: "College Tech Symposium",
    date: "March 2024",
    description: "Led a hands-on workshop introducing students to the fastn programming language, focusing on building simple web applications with practical exercises.",
    skills: ["fastn", "Web Development", "Instruction"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "conducted"
  },
  {
    title: "Web Development Bootcamp",
    role: "Coordinator",
    organization: "Department of Computer Science",
    date: "January 2024",
    description: "Organized a two-day bootcamp on modern web development practices, coordinating speakers, managing logistics, and providing technical assistance to participants.",
    skills: ["Event Management", "React", "Node.js"],
    image: "https://images.unsplash.com/photo-1559223607-a43f990c095d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "conducted"
  },
  {
    title: "Hackathon 2024",
    role: "Coordinator",
    organization: "SVPCET",
    date: "February 2024",
    description: "Managed technical aspects and provided support to participants during the 24-hour coding competition. Evaluated projects and facilitated networking between students and industry mentors.",
    skills: ["Project Evaluation", "Technical Support", "Event Management"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "conducted"
  },
  {
    title: "React Native Workshop",
    role: "Participant",
    organization: "Google Developer Group",
    date: "November 2023",
    description: "Participated in an intensive workshop on building cross-platform mobile applications with React Native, learning best practices and advanced techniques for mobile development.",
    skills: ["React Native", "Mobile Development", "JavaScript"],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "attended"
  },
  {
    title: "UI/UX Design Workshop",
    role: "Participant",
    organization: "Adobe Design Circle",
    date: "October 2023",
    description: "Attended a comprehensive workshop on modern UI/UX design principles, user research methodologies, and prototyping techniques using industry-standard tools.",
    skills: ["UI/UX Design", "Figma", "User Research"],
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "attended"
  },
  {
    title: "Embedded Systems Workshop",
    role: "Participant",
    organization: "IEEE Student Branch",
    date: "September 2023",
    description: "Engaged in a practical workshop on embedded system design and programming, working with microcontrollers to build simple IoT applications.",
    skills: ["Embedded C", "Microcontrollers", "IoT"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "attended"
  }
];

// Define workshop types
type WorkshopType = "all" | "conducted" | "attended";

const WorkshopsPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeType, setActiveType] = useState<WorkshopType>("all");

  // Filter workshops based on active type
  const filteredWorkshops = activeType === "all" 
    ? workshops 
    : workshops.filter(workshop => workshop.type === activeType);

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
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Workshops & Events</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Workshops and events I've conducted and participated in to expand my knowledge and contribute to the tech community.
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
              onClick={() => setActiveType("conducted")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeType === "conducted" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Conducted
            </button>
            <button 
              onClick={() => setActiveType("attended")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeType === "attended" 
                  ? "bg-primary text-white" 
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Attended
            </button>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop, index) => (
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
                  className="w-full h-56 object-cover" 
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
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{workshop.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {workshop.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredWorkshops.length === 0 && (
            <div className="text-center py-16">
              <i className="fas fa-calendar-alt text-5xl text-gray-300 dark:text-gray-700 mb-4"></i>
              <p className="text-gray-600 dark:text-gray-400">No workshops or events found in this category.</p>
            </div>
          )}
          
        </div>
      </section>
    </div>
  );
};

export default WorkshopsPage;