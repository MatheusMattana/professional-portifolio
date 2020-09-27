import React from 'react';
import '../../AppContainer.css';

import logoWhite from '../../assets/navBar/logoWhite.png';

const NavBar = () => {
  return (
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
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
          </label>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
