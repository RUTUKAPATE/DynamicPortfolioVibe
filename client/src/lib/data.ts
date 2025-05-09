import { z } from "zod";

// Skills data
export const skills = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React", icon: "fab fa-react" },
  { name: "React Native", icon: "fab fa-react" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "MySQL", icon: "fas fa-database" },
  { name: "Firebase", icon: "fas fa-fire" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "Tailwind CSS", icon: "fas fa-wind" },
  { name: "C/C++", icon: "fas fa-code" },
];

// Projects data
export const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online store with product management, cart system, and payment integration.",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity tool for organizing tasks with drag-and-drop functionality and reminders.",
    image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["React Native", "Firebase", "Redux"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Portfolio Website",
    description: "A 3D-inspired personal portfolio with interactive elements and smooth animations.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    technologies: ["Next.js", "Three.js", "Tailwind"],
    demoLink: "#",
    githubLink: "#",
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

// Certifications & Workshops
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
];

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
