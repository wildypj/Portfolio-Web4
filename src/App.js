import { NavBar } from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Banner from "./Components/Banner";
import { Skills } from './Components/Skills';
import { Footer } from './Components/Footer';

import { Contact } from './Components/Contact';
import Project from './Components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

