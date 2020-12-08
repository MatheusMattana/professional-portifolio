import React from 'react';
import LanguageTexts from '../../LanguageTexts.json';

import { useLanguage } from '../../context/Language';

const AboutMe = () => {
  const { languageSelected } = useLanguage();

  let texts = {};
  languageSelected === 'English'
    ? (texts = LanguageTexts.English)
    : (texts = LanguageTexts.Portuguese);

  return (
    <div className="AboutMe-container">
      <div className="Title-container">
        <div id="rightTitleLine" className="titleLine"></div>
        <div className="sectionTitle">
          <i>{texts.AboutMe.Title}</i>
        </div>
        <div className="titleLine"></div>
      </div>
      <div className="aboutMeItems-container">
        <div className="aboutMe-photo"></div>
        <div className="aboutMe-presentationText">
          <p>{texts.AboutMe.MyDescription}</p>
          <br />
          <p>{texts.AboutMe.MyDescription1}</p>
          <br />
          <p>{texts.AboutMe.MyDescription2}</p>
          <br />
          <p>{texts.AboutMe.MyDescription3}</p>
          <br />
          <p>{texts.AboutMe.MyDescription4}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;