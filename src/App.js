import "./app.css";
import AboutMe from "./views/AboutMe/AboutMe";
import Experience from "./views/Experience/Experience";
import SkillsAndLanguages from "./views/SkillsAndLanguages/SkillsAndLanguages";
import ContactMe from "./views/ContactMe/ContactMe";

const App = () => {
  return (
    <div>
      <AboutMe />
      <Experience />
      <SkillsAndLanguages />
      <ContactMe />
    </div>
  );
};

export default App;
