// src/App.js
<link
  rel="stylesheet"
  href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
/>;

import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <main className="container my-5">
        <section id="projects" className="my-5">
          <Projects />
        </section>
        <section id="skills" className="my-5">
          <Skills />
        </section>
        <section id="contact" className="my-5">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
