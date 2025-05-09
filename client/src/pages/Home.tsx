import { useEffect } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Workshops from "@/components/Workshops";
import Certifications from "@/components/Certifications";

const Home = () => {
  useEffect(() => {
    // Add fonts to the document
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap";
    document.head.appendChild(link);

    // Add Font Awesome
    const fontAwesome = document.createElement("link");
    fontAwesome.rel = "stylesheet";
    fontAwesome.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(fontAwesome);

    // Set page title and meta description
    document.title = "Rutuja Kapate | Portfolio";
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Portfolio website for Rutuja Kapate, a web developer and electronics engineer creating engaging digital experiences with modern technologies.";
    document.head.appendChild(metaDescription);

    // Open Graph tags
    const ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    ogTitle.content = "Rutuja Kapate | Web Developer";
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement("meta");
    ogDescription.setAttribute("property", "og:description");
    ogDescription.content =
      "Check out Rutuja Kapate's portfolio showcasing web development projects and professional experience.";
    document.head.appendChild(ogDescription);

    const ogType = document.createElement("meta");
    ogType.setAttribute("property", "og:type");
    ogType.content = "website";
    document.head.appendChild(ogType);

    // Smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(fontAwesome);
      document.head.removeChild(metaDescription);
      document.head.removeChild(ogTitle);
      document.head.removeChild(ogDescription);
      document.head.removeChild(ogType);
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Services />
      <Skills />
      <Projects />
      <Education />
      <Workshops />
      <Certifications />
      <Contact />
    </>
  );
};

export default Home;
