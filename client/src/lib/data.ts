import { z } from "zod";

// Categorized Skills data
export const skillsCategories = {
  frontend: [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "React Native", icon: "fab fa-react" },
    { name: "Tailwind CSS", icon: "fas fa-wind" },
  ],
  backend: [
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "Express", icon: "fab fa-node" },
    { name: "Next.js", icon: "fab fa-react" },
    { name: "Strapi", icon: "fas fa-server" },
  ],
  database: [
    { name: "MySQL", icon: "fas fa-database" },
    { name: "Firebase", icon: "fas fa-fire" },
  ],
  tools: [
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "Postman", icon: "fas fa-paper-plane" },
    { name: "VS Code", icon: "fas fa-code" },
    { name: "C/C++", icon: "fas fa-code" },
    { name: "Embedded C", icon: "fas fa-microchip" },
  ],
};

// All skills in a flat array for use in Skills component
export const skills = [
  ...skillsCategories.frontend,
  ...skillsCategories.backend,
  ...skillsCategories.database,
  ...skillsCategories.tools,
];

// Services data
export const services = [
  {
    title: "Web Development",
    description: "Custom website development using modern technologies and frameworks to create responsive, user-friendly sites optimized for performance.",
    icon: "fas fa-laptop-code",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile application development using React Native, delivering native-like experiences for both iOS and Android platforms.",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive, accessible, and visually appealing user interfaces with a focus on user experience and modern design principles.",
    icon: "fas fa-palette",
  },
  {
    title: "Technical Workshops",
    description: "Educational workshops on web development, electronics, and programming fundamentals for students and professionals.",
    icon: "fas fa-chalkboard-teacher",
  },
];

// Projects data with categories
export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product management, cart system, and payment integration.",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
    category: "fullstack",
  },
  {
    title: "Task Management App",
    description: "A productivity tool for organizing tasks with drag-and-drop functionality and reminders.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React Native", "Firebase", "Redux"],
    demoLink: "#",
    githubLink: "#",
    category: "frontend",
  },
  {
    title: "Portfolio Website",
    description: "A 3D-inspired personal portfolio with interactive elements and smooth animations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["Next.js", "Three.js", "Tailwind"],
    demoLink: "#",
    githubLink: "#",
    category: "frontend",
  },
  {
    title: "Blog API",
    description: "A RESTful API for a blog platform with authentication, authorization, and content management.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["Node.js", "Express", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
    category: "backend",
  },
  {
    title: "Weather Dashboard",
    description: "A real-time weather dashboard with location tracking, forecasts, and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React", "Weather API", "Chart.js"],
    demoLink: "#",
    githubLink: "#",
    category: "frontend",
  },
  {
    title: "Social Network",
    description: "A full-featured social network with user profiles, real-time chat, news feed, and notifications.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
    category: "fullstack",
  },
];

// Education data
export const education = [
  {
    degree: "B.Tech in Electronics and Telecommunication Engineering",
    institution: "St. Vincent Pallotti College of Engineering and Technology",
    location: "Nagpur, Maharashtra, India",
    score: "CGPA: 8.23/10",
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "St. Paul Public School & Junior College",
    location: "Nagpur, Maharashtra, India",
    score: "Percentage: 92.67/100",
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "St. Joseph's Convent Girl's High School",
    location: "Nagpur, Maharashtra, India",
    score: "Percentage: 86.40/100",
  },
];

// Awards & Community Experience
export const awards = [
  {
    title: "fastn Ambassador",
    description: "Conducted college workshops, online webinars, quizzes, and competitions, promoting fastn and guiding students in building projects using the language, while distributing swags.",
    icon: "fas fa-award",
  },
  {
    title: "Coordinator at Hack-A-Thon 2024",
    description: "Successfully managed the event at SVPCET, ensuring smooth operations and connecting with amazing individuals, while learning about their innovative projects and fostering a collaborative environment.",
    icon: "fas fa-users",
  },
  {
    title: "NSS Member",
    description: "Actively participated in community service projects, promoting social welfare, and contributing to various awareness campaigns and events.",
    icon: "fas fa-hands-helping",
  },
];

// Extended Certifications & Workshops with more entries
export const certifications = [
  {
    title: "Web Development Bootcamp",
    issuer: "Udemy",
    year: "2023",
    description: "Comprehensive course covering HTML, CSS, JavaScript, React and Node.js.",
    type: "certification",
  },
  {
    title: "React Native Fundamentals",
    issuer: "Coursera",
    year: "2023",
    description: "Mobile app development with React Native and cross-platform integration.",
    type: "certification",
  },
  {
    title: "Advanced JavaScript",
    issuer: "Coursera",
    year: "2022",
    description: "Deep dive into JavaScript concepts, asynchronous programming, and ES6+ features.",
    type: "certification",
  },
  {
    title: "Frontend Web Development",
    issuer: "freeCodeCamp",
    year: "2022",
    description: "Responsive web design, JavaScript algorithms, and front-end libraries.",
    type: "certification",
  },
  {
    title: "UI/UX Design Workshop",
    issuer: "Google Developer Group",
    year: "2022",
    description: "Workshop on creating user-centered designs and effective interfaces.",
    type: "workshop",
  },
  {
    title: "Embedded Systems Workshop",
    issuer: "IEEE Student Branch",
    year: "2022",
    description: "Hands-on workshop on microcontrollers and embedded programming.",
    type: "workshop",
  },
  {
    title: "Cloud Computing Workshop",
    issuer: "AWS Community",
    year: "2023",
    description: "Introduction to AWS services, cloud architecture, and deployment strategies.",
    type: "workshop",
  },
  {
    title: "Mobile UX Design",
    issuer: "Interaction Design Foundation",
    year: "2023",
    description: "Mobile-specific user experience design principles and best practices.",
    type: "workshop",
  },
];

// Workshops and events data
export const workshops = [
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

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
