import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">About Me</h1>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-3xl font-bold font-poppins mb-6">My Journey</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm a final year Electronics and Telecommunication Engineering student with a passion for web development. My journey in technology has led me to explore the intersection of hardware and software, giving me a unique perspective on creating digital solutions.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                With 6 months of internship experience at FifthTry as a Software Developer, I've honed my skills in modern web technologies and collaborative development workflows. I'm particularly interested in creating accessible, performant, and visually appealing web applications.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                My background in electronics engineering provides me with a strong foundation in problem-solving and analytical thinking, which I apply to my web development projects. I enjoy the creative aspects of frontend development as well as the logical challenges of backend work.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="order-1 md:order-2 relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Creative Developer Workspace" 
                className="w-full rounded-2xl shadow-xl transform rotate-2"
              />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-poppins mb-6">Professional Background</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3">Educational Foundation</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  As a student of Electronics and Telecommunication Engineering at St. Vincent Pallotti College of Engineering and Technology, I've built a strong foundation in technical concepts, mathematical thinking, and systematic problem-solving. My academic background has provided me with the ability to approach complex challenges methodically.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3">Professional Experience</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  During my 6-month internship at FifthTry, I gained practical experience in software development, working with modern frameworks and tools. I contributed to real-world projects, collaborating with experienced developers and learning industry best practices in code organization, version control, and agile development processes.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold font-poppins mb-6">Personal Interests</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-laptop-code text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Coding Challenges</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I enjoy participating in coding challenges and hackathons to sharpen my problem-solving skills and learn new technologies in a competitive environment.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-book text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I'm passionate about continuous learning and regularly take online courses and read technical books to stay updated with the latest developments in web technologies.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <i className="fas fa-users text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Community Involvement</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I actively participate in tech communities and events, both as an attendee and as a volunteer. I believe in the power of knowledge sharing and community building.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold font-poppins mb-6">My Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              I aim to create meaningful digital experiences that combine technical excellence with user-centered design. My goal is to continue growing as a developer while contributing to projects that make a positive impact on people's lives through technology.
            </p>
            
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg shadow-primary/20 font-medium transition-all transform hover:-translate-y-1"
            >
              <i className="fas fa-paper-plane mr-2"></i> Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;