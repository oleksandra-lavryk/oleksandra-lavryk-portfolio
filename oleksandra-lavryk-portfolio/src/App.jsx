import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectsSection />
      <Experience />
      <Education />
      <Contacts />
    </div>
  );
}

export default App;
