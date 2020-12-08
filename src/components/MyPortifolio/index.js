import React from 'react';
import LanguageTexts from '../../LanguageTexts.json';

import { useLanguage } from '../../context/Language';

const MyPortifolio = () => {
  const { languageSelected } = useLanguage();

  let texts = {};
  languageSelected === 'English'
    ? (texts = LanguageTexts.English)
    : (texts = LanguageTexts.Portuguese);
  return (
    <div className="myPortifolio-container">
      <div className="Title-container">
        <div id="rightTitleLine" className="titleLine"></div>
        <div className="sectionTitle">
          <i>{texts.MyPortifolio.Title}</i>
        </div>
        <div className="titleLine"></div>
      </div>
      <div className="projects-container">
        <div className="projectBox">
          <div className="projectImage"></div>
          <div className="projectDescription-container"></div>
        </div>
        <div className="projectBox">
          <div className="projectImage"></div>
          <div className="projectDescription-container"></div>
        </div>
        <div className="projectBox">
          <div className="projectImage"></div>
          <div className="projectDescription-container"></div>
        </div>
      </div>
    </div>
  );
};

export default MyPortifolio;
