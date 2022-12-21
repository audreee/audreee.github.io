import Technology from './Technology';
import '../styles/technologies.css';

let Technologies = () => {
    return (
        <div className="list">
            {technologies_list.map((technology, index) => <Technology key={index} technology={technology}/>)}
        </div>
      )
    }

const technologies_list = [
    "JavaScript (ES5/ES6)",
    "Ruby",
    "Rails",
    "React",
    "Node.js",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "C",
    "Python",
    "rSpec",
    "Jest",
    "Mocha/Chai",
    "Git",
    "Webpack",
    "Docker",
    "HTML",
    "CSS"
    ]
export default Technologies;