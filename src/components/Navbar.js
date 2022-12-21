import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
import useWindowSize from '../hooks/getWindowDimensions';

const Navbar = props => {
  const { width } = useWindowSize();
  const [collapseMenu, setCollapseMenu] = useState(true);

  let renderLinks = () => {
    return(
      <div className="links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
      </div>
    );
  };

  let handleClick = () => {
    setCollapseMenu(false);
  }

    let leftSide;
    if (width < 769) { 
      if (collapseMenu === true) {
        leftSide = (
          <div className="burger">
            <FontAwesomeIcon icon={faBars} size="2x" onClick={handleClick} style={{color: '#F8EFE4'}}/>
          </div>
        )
      } else {
        leftSide = renderLinks();
      } 
    } else {
      leftSide = (
        <a href="#">
          <FontAwesomeIcon icon={faHouse} style={{color: '#F8EFE4'}} />
        </a>
      )
    }

  return (
    <div className="nav-bar">
      <div className="nav-left">
        {leftSide}
      </div>
      <div className="nav-right">
      {width >= 769 ?
        renderLinks() 
        :
        null
      }
    </div>
  </div>
  )
};


export default Navbar;