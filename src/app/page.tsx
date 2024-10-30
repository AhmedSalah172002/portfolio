import { Box } from "@mui/material";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
     <Box sx={{display:'flex',flexDirection:"column",gap:'3rem'}}>
     <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
      <Footer />
     </Box>
    </>
  );
}
