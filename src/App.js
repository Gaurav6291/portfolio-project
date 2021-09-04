import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
// import Particles from 'react-particles-js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <>
    {/* <Particles
          className="particles-canvas"
    params={
      {
        Particles: {
          number: {
            density:{
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "star",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }
    }
     /> */}
    <Router>
  
     <Navbar />
     <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contacts />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
     {/* <Header /> */}
          <Footer />
     </Router>
     </>
    </div>
  );
}

export default App;
