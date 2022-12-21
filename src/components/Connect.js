import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/connect.css';

const Connect = () => {
    return (
      <div className="section-container parent">
        <div className="text-column">
          <div className="row-icons">
          <a href={'http://github.com/audreee'} target="_blank"><FontAwesomeIcon icon={faGithub} className="contact-icon"/></a>
          <a href={'http://linkedin.com/in/audreesteinberg'} target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="contact-icon"/></a>
          <a href={'mailto:audreecodes@gmail.com'} target="_blank"><FontAwesomeIcon icon={faEnvelope} className="contact-icon"/></a>
        </div>
        </div>
      </div>
    )
  }
  
  export default Connect;