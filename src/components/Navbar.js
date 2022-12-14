import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';
import useWindowSize from '../hooks/getWindowDimensions';

const Navbar = props => {
  const { width } = useWindowSize();
  const [collapseMenu, setCollapseMenu] = useState(true);

  let renderLinks = () => {
    return(
      <div className="links">
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#connect" onClick={handleLinkClick}>Connect</a>
      </div>
    );
  };

  let handleLinkClick = () => {
    setCollapseMenu(true);
  }

  let handleBurgerClick = () => {
    setCollapseMenu(false)
  }

    let leftSide;
    if (width < 769) { 
      if (collapseMenu) {
        leftSide = (
          <div className="burger">
            <FontAwesomeIcon icon={faBars} size="2x" onClick={handleBurgerClick} style={{color: '#F8EFE4'}}/>
          </div>
        )
      } else {
        leftSide = (  
          renderLinks()
        )
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