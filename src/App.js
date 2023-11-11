import { React } from "react";
import Intro from "./pages/introPage"
import Skills from "./pages/skillsPage"
import About from "./pages/aboutPage"
import Hobbies from "./pages/hobbiesPage";
import Contact from "./pages/contactPage"
import "./styles/css/sass.css";

function App() {
  
  return (
    <div className="App">
      <Intro />
      <About />
      <Skills />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
