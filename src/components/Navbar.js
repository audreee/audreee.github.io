import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [collapse, setCollapse] = useState(false);

  let checkIsMobile = (e) => {
    if (isMobile) {
      setIsMobile(true)
    }
  }

//   let componentDidUpdate = (prevProps) =>{
//     if (prevProps.isMobile !== this.props.isMobile) {
//       this.handleLinkClick();
//     }
//   }

//   let componentDidMount = () => {
//     if (this.props.isMobile) {
//       this.setState({collapse: true})
//     }
//   }

  useEffect(() => {
    if (isMobile) {
        setCollapse(true)
    }
  }); 

  let renderLinks = () => {
    return(
      <div className="links">
        <li><a href="#about" onClick={checkIsMobile}>About</a></li>
        <li><a href="#skills" onClick={checkIsMobile}>Skills</a></li>
      </div>
    )
  }

    return (
        <div>
        <ul id="nav">
            <div className="nav-left">
            <li><a href="#" onClick={checkIsMobile}>Audree Steinberg</a></li>
            {!collapse && !isMobile ? renderLinks() : null}
            </div>
            <div className="nav-right">
            {isMobile ?
                <div className="burger">
                <FontAwesomeIcon icon={faBars} size="2x" onClick={setCollapse({ collapse: false})} style={{color: '#F8EFE4'}}/>
                </div>
                :
                renderLinks()
            }
            </div>
        </ul>
        </div>
    );
}

export default Navbar;