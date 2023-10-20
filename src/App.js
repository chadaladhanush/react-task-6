import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {Education} from "./components/Education";
import {Project} from "./components/Project";
import {Contact} from "./components/Contact";
import './App.css';

function App() {
  return (
    <div>
      
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
