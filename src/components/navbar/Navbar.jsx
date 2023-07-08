import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-logo">
          <p className="navbar-logo_name">Khwaab</p>
      </div>
      <div className="navbar-links">
        <div className="navbar-links_container">
            <p><a className="active" href="#home">Home</a></p>
            <p><a href="#experience">About</a></p>
            <p><a href="#project">Projects</a></p>
            <p><a href="#education">Education</a></p>
            <p><a href="#contact">Contact</a></p>
        </div>
        <div className="navbar-sign">
            <button type="button">Sign up</button>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
            <p><a className="active" href="#home">Home</a></p>
            <p><a href="#experience">About</a></p>
            <p><a href="#project">Projects</a></p>
            <p><a href="#education">Education</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
          <div className="navbar-menu_container-links-sign">
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
