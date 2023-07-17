import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
// import About from './components/About';
import About from './components/portfolio/About';
import New from './components/New';
import Contact from './components/Contect';
import Coding from './components/Coding';
import Projects from './components/Projects';
function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <About/>
      {/* <Projects/> */}
      <New/>
      <Coding/>
      <Contact/>
    </div>
  );
}

export default App;
