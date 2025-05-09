import { motion } from "framer-motion";
import { education, awards } from "@/lib/data";

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Rutuja Kapate</h2>
            <h3 className="text-xl text-primary mb-4">Web Developer & Electronics Engineer</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm an Electronics and Telecommunication Engineering graduate with a passion for web development
              and creating engaging digital experiences. With expertise in both frontend and backend technologies,
              I enjoy building modern, responsive, and user-friendly applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My journey in tech began during my engineering studies where I developed a strong foundation in 
              programming principles. Over time, I've expanded my skills to encompass the full web development 
              stack, focusing on creating intuitive and performant applications.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I believe in continuous learning and staying updated with the latest technologies and best practices
              in the rapidly evolving tech landscape. When I'm not coding, I enjoy sharing knowledge through workshops
              and contributing to the tech community.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
            <div className="space-y-4">
              <div className="flex">
                <div className="w-32 font-medium">Name:</div>
                <div>Rutuja Kapate</div>
              </div>
              <div className="flex">
                <div className="w-32 font-medium">Age:</div>
                <div>24</div>
              </div>
              <div className="flex">
                <div className="w-32 font-medium">Email:</div>
                <div>
                  <a href="mailto:rutuja16kapate@gmail.com" className="text-primary hover:underline">
                    rutuja16kapate@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex">
                <div className="w-32 font-medium">Location:</div>
                <div>Pune, Maharashtra, India</div>
              </div>
              <div className="flex">
                <div className="w-32 font-medium">Experience:</div>
                <div>2+ Years</div>
              </div>
              <div className="flex">
                <div className="w-32 font-medium">Degree:</div>
                <div>B.E. Electronics and Telecommunication</div>
              </div>
              <div className="flex">
                <div className="w-32 font-medium">Languages:</div>
                <div>English, Hindi, Marathi</div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/rutujakapate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a 
                  href="https://linkedin.com/in/rutujakapate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a 
                  href="https://twitter.com/rutujakapate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a 
                  href="https://instagram.com/rutujakapate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="space-y-8">
            {education.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">{item.degree}</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {item.duration}
                  </span>
                </div>
                <p className="text-primary mb-2">{item.institution}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                {item.achievements && (
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Achievements:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {award.year}
                  </span>
                  <h3 className="text-xl font-bold">{award.title}</h3>
                </div>
                <p className="text-primary mb-2">{award.organization}</p>
                <p className="text-gray-600 dark:text-gray-400">{award.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;