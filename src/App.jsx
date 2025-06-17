import Header from "./components/Header";
import Hero from "./components/Hero";
import TechWrapper from "./components/TechWrapper";
import Tech from "./components/Tech"

import AdamImg from "/images/adam.png";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero img={AdamImg} />
        <hr className="mb-10 h-1 bg-white"/>
        <TechWrapper>
          <Tech tech="HTML" content="4 Years Experience"/>
          <Tech tech="CSS" content="4 Years Experience"/>
          <Tech tech="Javascript" content="4 Years Experience"/>
          <Tech tech="Accessibility" content="4 Years Experience"/>
          <Tech tech="React" content="3 Years Experience"/>
          <Tech tech="Sass" content="3 Years Experience"/>
        </TechWrapper>
        <hr className="mb-10 h-1 bg-white"/>
      </main>
    </>
  );
}

export default App;
