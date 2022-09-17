import Technology from './Technology';
import '../styles/Technologies.css';

let Technologies = () => {
    return (
        <div className="list">
            {technologies_list.map((technology, index) => <Technology key={index} technology={technology}/>)}
        </div>
      )
    }

const technologies_list = [
    "JavaScript (ES5/ES6)",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "C",
    "Python",
    "Docker",
    "AWS",
    "Jest",
    "Mocha/Chai",
    "Git",
    "Webpack",
    "Ruby",
    "Rails",
    "Docker"
    ]
export default Technologies;