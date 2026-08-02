import Navbar from "./components/Navbar";
import Hero from "./features/hero/Hero";
import About from "./features/about/About";
import Skills from "./features/skills/Skills";
import Projects from "./features/projects/Projects";
import Experience from "./features/experience/Experience";
import Certifications from "./features/certifications/Certifications";
import Contact from "./features/contact/Contact";
import GitHub from "./features/github/GitHub";
import DevOpsLab from "./features/devopslab/DevOpsLab";
import DevOpsPipeline from "./features/pipeline/DevOpsPipeline";
import Footer from "./features/footer/Footer";

export default function App() {
  return (
    <>
      <div className="bg-grid" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevOpsLab />
        <DevOpsPipeline />
        <Experience />
        <Certifications />
        <GitHub />
        <Contact />
        <Footer />
      </main>
    </>
  );
}