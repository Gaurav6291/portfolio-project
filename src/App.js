import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
function App() {
  return (
    <div className="App">
    <>
    <Particles
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
     />
     <Navbar />
     <Header />
     </>
    </div>
  );
}

export default App;
