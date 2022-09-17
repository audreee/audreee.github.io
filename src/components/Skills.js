import '../styles/Skills.css';
import Technologies from './Technologies';

let Skills = () => {
    return (
      <div className="parent section-container">
        <div className="text-column row-container">
          <div className="column">
            <h1>I enjoy problem-solving</h1>
            <div>
              <p>I am language agnostic, and I have experience with a variety of languages, frameworks, and tools for front-end and back-end development.</p>
            </div>
          </div>
          <div className="skills column">
            <h1>Some of my skills</h1>
            <Technologies />
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;