import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

const Navbar = props => {
  const [isMobile, setIsMobile] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [collapseMenu, setCollapseMenu] = useState(false);

  // let toggleMobile = () => {
  //   if (windowWidth < 769) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };

  let updateWidth = () => {
    // setWindowWidth(window.innerWidth);
    if (window.innerWidth < 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  let handleClick = () => {
    if (isMobile) {
      setCollapseMenu(true);
    }
  };

  let renderLinks = () => {
    return(
      <div className="links">
        <li><a href="#about" onClick={handleClick}>About</a></li>
        <li><a href="#skills" onClick={handleClick}>Skills</a></li>
      </div>
    );
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
    }, []);

  return (
    <div>
      <ul id="nav">
        <div className="nav-left">
          <li><a href="#welcome" onClick={handleClick}>Audree Steinberg</a></li>
          {!collapseMenu && !isMobile ? renderLinks() : null}
        </div>
        <div className="nav-right">
          {isMobile ?
            <div className="burger">
              <FontAwesomeIcon icon={faBars} size="2x" onClick={setCollapseMenu(false)} style={{ color: '#F8EFE4' }}/>
            </div>
            :
            renderLinks()
          }
        </div>
      </ul>
    </div>
  )
};

export default Navbar;