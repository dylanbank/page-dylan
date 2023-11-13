import { React } from "react";
import Intro from "./pages/introPage"
import Skills from "./pages/skillsPage"
import About from "./pages/aboutPage"
import Hobbies from "./pages/hobbiesPage";
import Contact from "./pages/contactPage"
import "./styles/css/sass.css";

function App() {
  
  const ScrollToView = (id) => {
    const page = document.getElementById(id);

    if(page){
      page.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="App">
      <Intro ScrollToView={ScrollToView} />
      <div id="about" />
      <About />
      <div id="skills" />
      <Skills />
      <div id="hobbies" />
      <Hobbies />
      <div id="contact" />
      <Contact />
    </div>
  );
}

export default App;
