
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from './components/Education';
import WorkExperience  from './components/WorkExperience';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      {/* <WorkExperience />
      <Projects /> */}
      <Skills />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
