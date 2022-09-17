import '../styles/App.css';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';

function App() {
  return (
    <div className="App parent">
      <div className="sections">
        <Welcome />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
