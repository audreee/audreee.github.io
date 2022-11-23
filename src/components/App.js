import '../styles/App.css';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';
import Navbar from './Navbar';
import AppBar from './Appbar';

function App() {
  return (
    <div className="App parent">
      <div className="sections">
        <AppBar />
        <Welcome id="welcome" />
        <About id="about" />
        <Skills id="skills"/>
      </div>
    </div>
  );
}

export default App;
