import { z } from "zod";

// Categorized Skills data
export const skillsCategories = {
  frontend: [
    { name: "HTML5", icon: "fab fa-html5", category: "frontend" },
    { name: "CSS3", icon: "fab fa-css3-alt", category: "frontend" },
    { name: "JavaScript", icon: "fab fa-js", category: "frontend" },
    { name: "React", icon: "fab fa-react", category: "frontend" },
    { name: "React Native", icon: "fab fa-react", category: "frontend" },
    { name: "Tailwind CSS", icon: "fas fa-wind", category: "frontend" },
  ],
  backend: [
    { name: "Node.js", icon: "fab fa-node-js", category: "backend" },
    { name: "Express", icon: "fab fa-node", category: "backend" },
    { name: "Next.js", icon: "fab fa-react", category: "backend" },
    { name: "Strapi", icon: "fas fa-server", category: "backend" },
  ],
  database: [
    { name: "MySQL", icon: "fas fa-database", category: "database" },
    { name: "Firebase", icon: "fas fa-fire", category: "database" },
  ],
  tools: [
    { name: "Git", icon: "fab fa-git-alt", category: "tools" },
    { name: "Figma", icon: "fab fa-figma", category: "tools" },
    { name: "Postman", icon: "fas fa-paper-plane", category: "tools" },
    { name: "VS Code", icon: "fas fa-code", category: "tools" },
    { name: "C/C++", icon: "fas fa-code", category: "tools" },
    { name: "Embedded C", icon: "fas fa-microchip", category: "tools" },
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
    title: "SkillLaunch - AI Carrer Guide",
    description: "An AI-driven career guide that provides users with career insights, interview preparation tools, AI-powered resume building, and interactive onboarding experiences.",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "Next.js API routes", "Prisma ORM", "NeonDB" ,"Clerk", "Gemini API", "Inngest"],
    liveUrl: "https://skilllaunch.vercel.app/",
    codeUrl: "https://github.com/RUTUKAPATE/skilllaunch",
    category: "fullstack",
  },
  {
    title: "AI Resume Builder",
    description: "An AI-powered resume builder that helps users create professional resumes effortlessly.",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React", "Next.js", "Tailwind CSS", "DaisyUI", "Prisma", "PostgreSQL", "Clerk", "Google Generative AI"],
    liveUrl: "https://ai-resume-builder-remix-bot.vercel.app/",
    codeUrl: "https://github.com/RUTUKAPATE/ai-resume-builder",
    category: "fullstack",
  },
  {
    title: "Donezo - Task Manager",
    description: "A full-featured web application designed to streamline team task management.",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React(Vite)", "Node.js", "Express.js", "Redux", "HeadlessUI", "Tailwind CSS", "MongoDB"],
    // liveUrl: "https://ecommerce-demo.com",
    codeUrl: "https://github.com/RUTUKAPATE/Donezo",
    category: "fullstack",
  },
  {
    title: "AI-Chatbot",
    description: "An AI-driven Chatbot with text-to-speech functionality and an enhanced UI using expo-speech and react-native-vector-icons.",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React Native", "Next.js", "Expo", "React Native Vector Icons", "Expo Speech", "Gemini API"],
    codeUrl: "https://github.com/RUTUKAPATE/geminiChatApp",
    category: "frontend",
  },
  {
    title: "Todo App",
    description: "This is a simple Todo app built with React, allowing users to manage their tasks efficiently.",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React","HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/RUTUKAPATE/todo-app",
    category: "frontend",
  },
  // {
  //   title: "E-commerce Platform",
  //   description: "A full-featured online store with product management, cart system, and payment integration.",
  //   image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   technologies: ["React", "Node.js", "MongoDB"],
  //   liveUrl: "https://ecommerce-demo.com",
  //   codeUrl: "https://github.com/rutujakapate/ecommerce",
  //   category: "fullstack",
  // },
  // {
  //   title: "Task Management App",
  //   description: "A productivity tool for organizing tasks with drag-and-drop functionality and reminders.",
  //   image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   technologies: ["React Native", "Firebase", "Redux"],
  //   liveUrl: "https://taskapp-demo.com",
  //   codeUrl: "https://github.com/rutujakapate/taskapp",
  //   category: "frontend",
  // },
  // {
  //   title: "Portfolio Website",
  //   description: "A 3D-inspired personal portfolio with interactive elements and smooth animations.",
  //   image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   technologies: ["Next.js", "Three.js", "Tailwind"],
  //   liveUrl: "https://rutujakapate.com",
  //   codeUrl: "https://github.com/rutujakapate/portfolio",
  //   category: "frontend",
  // },
  // {
  //   title: "Blog API",
  //   description: "A RESTful API for a blog platform with authentication, authorization, and content management.",
  //   image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   technologies: ["Node.js", "Express", "MongoDB"],
  //   liveUrl: "https://blog-api-demo.com",
  //   codeUrl: "https://github.com/rutujakapate/blog-api",
  //   category: "backend",
  // },
  // {
  //   title: "Weather Dashboard",
  //   description: "A real-time weather dashboard with location tracking, forecasts, and interactive maps.",
  //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   technologies: ["React", "Weather API", "Chart.js"],
  //   liveUrl: "https://weather-demo.com",
  //   codeUrl: "https://github.com/rutujakapate/weather-app",
  //   category: "frontend",
  // },
  // {
  //   title: "Social Network",
  //   description: "A full-featured social network with user profiles, real-time chat, news feed, and notifications.",
  //   image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
  //   liveUrl: "https://social-demo.com",
  //   codeUrl: "https://github.com/rutujakapate/social-network",
  //   category: "fullstack",
  // },
];

// Education data
export const education = [
  {
    degree: "B.Tech in Electronics & Telecom Engineering",
    institution: "St. Vincent Pallotti College of Engineering and Technology",
    location: "Nagpur, Maharashtra, India",
    score: "CGPA: 8.23/10",
    duration: "2021-2025",
    description: "Four-year undergraduate program focused on electronics, telecommunication systems, and embedded programming. Developed strong analytical and problem-solving skills through practical projects and laboratory work.",
    achievements: [
    "Consistently ranked in the top 5 of the department in all semesters except the 5th, 6th, and 7th",
    "Represented college in the national Robocon competition and qualified for the 2nd round",
    "Member of the college technical club"
    ],

    certificates: [
      // {
      //   title: "Degree Certificate",
      //   url: "/assets/btech-degree.pdf"
      // },
      {
        title: "All Marksheet",
        url: "/src/assets/btech-marksheet.pdf"
      }
    ]
  },
  {
    degree: "HSC (Higher Secondary Certificate)",
    institution: "St. Paul Public School & Junior College",
    location: "Nagpur, Maharashtra, India",
    score: "Percentage: 92.67/100",
    duration: "2019-2021",
    description: "Science stream with focus on Physics, Chemistry, and Mathematics.",
    achievements: [
      "School prefect"
    ],
    certificates: [
      {
        title: "HSC Certificate",
        url: "/src/assets/hsc-certificate.pdf"
      },
      {
        title: "HSC Marksheet",
        url: "/src/assets/hsc-marksheet.pdf"
      }
    ]
  },
  {
    degree: "SSC (Secondary School Certificate)",
    institution: "St. Joseph's Convent Girl's High School",
    location: "Nagpur, Maharashtra, India",
    score: "Percentage: 86.40/100",
    duration: "2019",
    description: "Completed secondary education with distinction. Active participant in cultural and extra-curricular activities.",
    achievements: [
      "School topper in Mathematics",
      "Winner of inter-school debate competition"
    ],
    certificates: [
      {
        title: "SSC Certificate",
        url: "/src/assets/ssc-certificate.pdf"
      },
      {
        title: "SSC Marksheet",
        url: "/src/assets/ssc-marksheet.pdf"
      }
    ]
  },
];

// Awards & Community Experience
export const awards = [
  {
    title: "fastn Ambassador",
    description: "Conducted college workshops, online webinars, quizzes, and competitions, promoting fastn and guiding students in building projects using the language, while distributing swags.",
    icon: "fas fa-award",
    year: "2023",
    organization: "FifthTry"
  },
  {
    title: "Coordinator at Hack-A-Thon 2024",
    description: "Successfully managed the event at SVPCET, ensuring smooth operations and connecting with amazing individuals, while learning about their innovative projects and fostering a collaborative environment.",
    icon: "fas fa-users",
    year: "2024",
    organization: "SVPCET"
  },
  {
    title: "NSS Member",
    description: "Actively participated in community service projects, promoting social welfare, and contributing to various awareness campaigns and events.",
    icon: "fas fa-hands-helping",
    year: "2021-2023",
    organization: "National Service Scheme"
  },
];

// Extended Certifications & Workshops with more entries
export const certifications = [
  // {
  //   title: "Web Development Bootcamp",
  //   issuer: "Udemy",
  //   year: "2023",
  //   description: "Comprehensive course covering HTML, CSS, JavaScript, React and Node.js.",
  //   type: "technical",
  //   image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   url: "https://udemy.com/certificate/123456"
  // },
  // {
  //   title: "React Native Fundamentals",
  //   issuer: "Coursera",
  //   year: "2023",
  //   description: "Mobile app development with React Native and cross-platform integration.",
  //   type: "technical",
  //   image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   url: "https://coursera.org/verify/123456"
  // },
  // {
  //   title: "Advanced JavaScript",
  //   issuer: "Coursera",
  //   year: "2022",
  //   description: "Deep dive into JavaScript concepts, asynchronous programming, and ES6+ features.",
  //   type: "technical",
  //   image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   url: "https://coursera.org/verify/234567"
  // },
  // {
  //   title: "Frontend Web Development",
  //   issuer: "freeCodeCamp",
  //   year: "2022",
  //   description: "Responsive web design, JavaScript algorithms, and front-end libraries.",
  //   type: "technical",
  //   image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   url: "https://freecodecamp.org/certification/123456"
  // },
  // {
  //   title: "Project Management",
  //   issuer: "Google",
  //   year: "2023",
  //   description: "Professional certification covering project planning, execution, and team management.",
  //   type: "professional",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   url: "https://google.com/certification/123456"
  // },
  // {
  //   title: "UI/UX Design Principles",
  //   issuer: "Interaction Design Foundation",
  //   year: "2022",
  //   description: "Professional certification in user interface design and user experience methodologies.",
  //   type: "professional",
  //   image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   url: "https://interaction-design.org/certificate/123456"
  // },
  // {
  //   title: "Agile Development",
  //   issuer: "Scrum.org",
  //   year: "2023",
  //   description: "Professional Scrum Master certification for agile project management.",
  //   type: "professional",
  //   image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   url: "https://scrum.org/certificates/123456"
  // },
  // {
  //   title: "Cloud Architect",
  //   issuer: "AWS",
  //   year: "2023",
  //   description: "Professional certification in cloud architecture and AWS services.",
  //   type: "professional",
  //   image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   url: "https://aws.amazon.com/certification/verify/123456"
  // },
];

// Workshops and events data
export const workshops = [
  {
    title: "fastn Language Workshop",
    role: "Presenter",
    organization: "College Tech Symposium",
    date: "Feb 2024",
    description: "Led a hands-on workshop introducing students to the fastn programming language, focusing on building simple web applications with practical exercises.",
    skills: ["fastn", "Web Development", "Instruction"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    type: "conducted",
    certificateUrl: null,
    slidesUrl: "https://slides.com/rutuja/fastn-workshop"
  },
  // {
  //   title: "Web Development Bootcamp",
  //   role: "Coordinator",
  //   organization: "Department of Computer Science",
  //   date: "January 2024",
  //   description: "Organized a two-day bootcamp on modern web development practices, coordinating speakers, managing logistics, and providing technical assistance to participants.",
  //   skills: ["Event Management", "React", "Node.js"],
  //   image: "https://images.unsplash.com/photo-1559223607-a43f990c095d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   type: "conducted",
  //   certificateUrl: null,
  //   slidesUrl: "https://slides.com/rutuja/web-dev-bootcamp"
  // },
  // {
  //   title: "Hackathon 2024",
  //   role: "Coordinator",
  //   organization: "SVPCET",
  //   date: "February 2024",
  //   description: "Managed technical aspects and provided support to participants during the 24-hour coding competition. Evaluated projects and facilitated networking between students and industry mentors.",
  //   skills: ["Project Evaluation", "Technical Support", "Event Management"],
  //   image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   type: "conducted",
  //   certificateUrl: "https://certify.com/hackathon-2024",
  //   slidesUrl: null
  // },
  // {
  //   title: "React Native Workshop",
  //   role: "Participant",
  //   organization: "Google Developer Group",
  //   date: "November 2023",
  //   description: "Participated in an intensive workshop on building cross-platform mobile applications with React Native, learning best practices and advanced techniques for mobile development.",
  //   skills: ["React Native", "Mobile Development", "JavaScript"],
  //   image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   type: "attended",
  //   certificateUrl: "https://gdg.community.dev/certificates/123456",
  //   slidesUrl: null
  // },
  // {
  //   title: "UI/UX Design Workshop",
  //   role: "Participant",
  //   organization: "Adobe Design Circle",
  //   date: "October 2023",
  //   description: "Attended a comprehensive workshop on modern UI/UX design principles, user research methodologies, and prototyping techniques using industry-standard tools.",
  //   skills: ["UI/UX Design", "Figma", "User Research"],
  //   image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   type: "attended",
  //   certificateUrl: "https://adobe.com/certificates/123456",
  //   slidesUrl: null
  // },
  // {
  //   title: "Embedded Systems Workshop",
  //   role: "Participant",
  //   organization: "IEEE Student Branch",
  //   date: "September 2023",
  //   description: "Engaged in a practical workshop on embedded system design and programming, working with microcontrollers to build simple IoT applications.",
  //   skills: ["Embedded C", "Microcontrollers", "IoT"],
  //   image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  //   type: "attended",
  //   certificateUrl: "https://ieee.org/certificates/123456",
  //   slidesUrl: null
  // }
];

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
