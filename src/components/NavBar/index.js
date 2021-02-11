import React, { useState } from 'react';
import '../../AppContainer.css';
import '../../hamburgers.css';
import LanguageTexts from '../../LanguageTexts.json';

import { useLanguage } from '../../context/Language';

import logoWhite from '../../assets/navBar/logoWhite.png';

const NavBar = () => {
  const [isNavActive, setIsNavActive] = useState(false);

  const { languageSelected, setLanguageSelected } = useLanguage();

  let texts = {};
  languageSelected === 'English'
    ? (texts = LanguageTexts.English)
    : (texts = LanguageTexts.Portuguese);

  const changeLanguage = () => {
    if (languageSelected === 'English') {
      setLanguageSelected('Portuguese');
      window.localStorage.setItem('local-language', 'Portuguese');
    } else {
      setLanguageSelected('English');
      window.localStorage.setItem('local-language', 'English');
    }
  };

  return (
    <>
      <nav className="navBar-container">
        <div className="navBar-items-container">
          <img src={logoWhite} alt="web site logo" />
          <nav className="stroke">
            <ul className="navBar-navLinks-container">
              <li>
                <a href="#whatIDo">{texts.NavBar.WhatIDo}</a>
              </li>
              <li>
                <a href="/">{texts.NavBar.AboutMe}</a>
              </li>
              <li>
                <a href="/">{texts.NavBar.MyPortifolio}</a>
              </li>
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
            </ul>
          </nav>
        </div>
      </nav>

      <nav className={`mobile-container ${isNavActive ? 'isActive' : ''}`}>
        <nav className="stroke">
          <ul className="mobile-navLinks-container">
            <li>
              <a
                href="#whatIDo"
                onClick={() =>
                  isNavActive ? setIsNavActive(!isNavActive) : ''
                }
              >
                {texts.NavBar.WhatIDo}
              </a>
            </li>
            <li>
              <a
                href="#aboutMe"
                onClick={() =>
                  isNavActive ? setIsNavActive(!isNavActive) : ''
                }
              >
                {texts.NavBar.AboutMe}
              </a>
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
