import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
