import React, { useState } from 'react';
import '../../AppContainer.css';
import '../../hamburgers.css';

import logoWhite from '../../assets/navBar/logoWhite.png';

const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <>
      <nav className="navBar-container">
        <div className="navBar-items-container">
          <div className="navBar-logo-container">
            <img src={logoWhite} alt="web site logo" />
          </div>
          <nav className="stroke">
            <ul className="navBar-navLinks-container">
              <li>
                <a href="/">What I do?</a>
              </li>
              <li>
                <a href="/">About me</a>
              </li>
              <li>
                <a href="/">My portifolio</a>
              </li>
            </ul>
          </nav>
          <div className="blankSpace">
            <span className="language pt">PT</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
            <span className="language eng">EN</span>
          </div>
          <button
            className={`hamburger hamburger--collapse ${
              isNavActive ? 'is-active' : ''
            }`}
            id="hamburger"
            type="button"
            onClick={() => setIsNavActive(!isNavActive)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </nav>

      <nav className={`mobile-container ${isNavActive ? 'isActive' : ''}`}>
        <nav className="stroke">
          <ul className="mobile-navLinks-container">
            <li>
              <a href="/">What I do?</a>
            </li>
            <li>
              <a href="/">About me</a>
            </li>
            <li>
              <a href="/">My portifolio</a>
            </li>
          </ul>
        </nav>
        <div className="mobile-blankSpace">
          <span className="language pt">PT</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
          <span className="language eng">EN</span>
        </div>
      </nav>
      {isNavActive && <div className="backgroundBlur"></div>}
    </>
  );
};

export default NavBar;
