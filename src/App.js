import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Banner from './components/Banner';
import Contact from './components/Contact';


function App() {
  return (
    <div className="app">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
