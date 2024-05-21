import About from "src/components/About";
import Header from "src/components/Header";
import Lines from "src/components/Lines";
import Projects from "src/components/Projects";
import "./App.css";
import SkillsAndContact from "./components/SkillsAndContact";

function App() {
  return (
    <div className="main-container">
      <Lines />
      <Header />
      <About />
      <Projects />
      <SkillsAndContact />
    </div>
  );
}

export default App;
