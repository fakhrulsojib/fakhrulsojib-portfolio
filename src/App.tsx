import Header from "./assets/sections/Header";
import Hero from "./assets/sections/Hero";
import About from "./assets/sections/About";
import Projects from "./assets/sections/Projects";
import Skills from "./assets/sections/Skills";
import Contact from "./assets/sections/Contact";
import Footer from "./assets/sections/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
