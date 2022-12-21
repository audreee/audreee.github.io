import '../styles/skills.css';
import Technologies from './Technologies';

let Skills = () => {
    return (
      <div className="parent section-container">
        <div className="text-column row-container skills-container">
          <div className="column">
            <h2 className="sub-title">I enjoy problem-solving</h2>
            <div>
              <p>I am language agnostic, and I have experience with a variety of languages, frameworks, and tools for front-end and back-end development.</p>
            </div>
          </div>
          <div className="skills column">
            <h2 className="sub-title">Some of my skills</h2>
            <Technologies />
          </div>
        </div>
      </div>
    )
  }
  
  export default Skills;