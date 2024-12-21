import Header from "./sections/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

const App: React.FC = () => {
  useScrollAnimation();

  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default App;
