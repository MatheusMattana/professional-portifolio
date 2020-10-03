import React, { useState } from 'react';
import '../../AppContainer.css';
import '../../hamburgers.css';
import LanguageTexts from '../../LanguageTexts.json';

import { useLanguage } from '../../context/Language';

import logoWhite from '../../assets/navBar/logoWhite.png';

const NavBar = (props) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const { languageSelected, setLanguageSelected } = useLanguage();

  let texts = {};
  languageSelected === 'English'
    ? (texts = LanguageTexts.English)
    : (texts = LanguageTexts.Portuguese);

  window.onscroll = function (event) {
    this.scrollY > 100 ? setIsScrollDown(true) : setIsScrollDown(false);
  };

  const changeLanguage = () => {
    languageSelected === 'English'
      ? setLanguageSelected('Portuguese')
      : setLanguageSelected('English');
  };
  return (
    <>
      <nav
        className={`navBar-container ${
          isScrollDown ? '' : 'transparentNavBar'
        }`}
      >
        <div className="navBar-items-container">
          <div className="navBar-logo-container">
            <img src={logoWhite} alt="web site logo" />
          </div>
          <nav className="stroke">
            <ul className="navBar-navLinks-container">
              <li>
                <a href="/">{texts.NavBar.WhatIDo}</a>
              </li>
              <li>
                <a href="/">{texts.NavBar.AboutMe}</a>
              </li>
              <li>
                <a href="/">{texts.NavBar.MyPortifolio}</a>
              </li>
            </ul>
          </nav>
          <div className="blankSpace">
            <span className="language eng">ENG</span>
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => changeLanguage()}
                checked={languageSelected === 'English' ? false : true}
              />
              <span className="slider"></span>
            </label>
            <span className="language pt">PT</span>
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
              <a href="/">{texts.NavBar.WhatIDo}</a>
            </li>
            <li>
              <a href="/">{texts.NavBar.AboutMe}</a>
            </li>
            <li>
              <a href="/">{texts.NavBar.MyPortifolio}</a>
            </li>
          </ul>
        </nav>
        <div className="mobile-blankSpace">
          <span className="language eng">ENG</span>
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => changeLanguage()}
              checked={languageSelected === 'English' ? false : true}
            />
            <span className="slider"></span>
          </label>
          <span className="language pt">PT</span>
        </div>
      </nav>
      {isNavActive && (
        <div
          className="backgroundBlur"
          onClick={() => setIsNavActive(!isNavActive)}
        ></div>
      )}
    </>
  );
};

export default NavBar;
