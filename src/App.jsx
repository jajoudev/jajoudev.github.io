import Header from "./components/Header";
import Hero from "./components/Hero";
import TechWrapper from "./components/TechWrapper";
import Skills from "./components/Skills";
import ProjectsWrapper from "./components/ProjectsWrapper";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

import AdamImg from "/images/adam.png";

function App() {
  return (
    <>
      <Header css="py-8" />
      <main className="px-4">
        <Hero img={AdamImg} />
        <hr className="mb-10 h-1 bg-white" />
        <TechWrapper>
          <Skills />
        </TechWrapper>
        <hr className="mb-20 h-1 bg-white" />
        <ProjectsWrapper>
          <Projects />
        </ProjectsWrapper>
      </main>
      <Footer />
    </>
  );
}

export default App;
