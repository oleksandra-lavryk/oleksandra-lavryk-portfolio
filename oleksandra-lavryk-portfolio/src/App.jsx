import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectsSection />
      <Education />
      <Contacts />
    </div>
  );
}

export default App;
