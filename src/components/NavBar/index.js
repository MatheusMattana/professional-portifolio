import React, { useState } from 'react';
import '../../AppContainer.css';
import LanguageTexts from '../../LanguageTexts.json';

import { useLanguage } from '../../context/Language';

import logoWhite from '../../assets/navBar/logoWhite.png';

const NavBar = () => {
  const [isScrollDown, setIsScrollDown] = useState(false);
  const { languageSelected, setLanguageSelected } = useLanguage();

  let texts = {};
  languageSelected === 'Portuguese'
    ? (texts = LanguageTexts.Portuguese)
    : (texts = LanguageTexts.English);

  const changeLanguage = () => {
    if (languageSelected === 'English') {
      setLanguageSelected('Portuguese');
      window.localStorage.setItem('local-language', 'Portuguese');
    } else {
      setLanguageSelected('English');
      window.localStorage.setItem('local-language', 'English');
    }
  };

  window.onscroll = function (event) {
    this.scrollY > 350 ? setIsScrollDown(true) : setIsScrollDown(false);
  };

  return (
    <>
      <nav className="navBar-container">
        <div className="navBar-items-container">
          <a href="#anchorToMainSection">
            <img src={logoWhite} alt="web site logo" />
          </a>
          <nav className="stroke">
            <ul className="navBar-navLinks-container">
              <li>
                <a href="#anchorToWhatIdo">{texts.NavBar.WhatIDo}</a>
              </li>
              <li>
                <a href="#anchorToMyPortifolio">{texts.NavBar.MyPortifolio}</a>
              </li>
              <li>
                <a href="#anchorToAboutMe">{texts.NavBar.AboutMe}</a>
              </li>
              <div className="blankSpace">
                <span className="language eng">ENG</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={languageSelected === 'Portuguese' ? true : false}
                    onChange={() => changeLanguage()}
                  />
                  <span
                    className={isScrollDown ? 'slider' : 'sliderGold slider'}
                  ></span>
                </label>
                <span className="language pt">PT</span>
              </div>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
