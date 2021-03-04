import React from 'react';

import LanguageTexts from '../../LanguageTexts.json';

import { useLanguage } from '../../context/Language';

const MainSection = () => {
  const { languageSelected } = useLanguage();
  let texts = {};
  languageSelected === 'English'
    ? (texts = LanguageTexts.English)
    : (texts = LanguageTexts.Portuguese);

  function getTimeOfDay() {
    let date = new Date();
    let hours = date.getHours();
    let timeOfDay;

    hours < 12 && hours > 5 && languageSelected === 'English'
      ? (timeOfDay = 'Good morning!')
      : hours < 12 && hours > 5 && languageSelected === 'Portuguese'
      ? (timeOfDay = 'Bom dia!')
      : hours >= 12 && hours < 18 && languageSelected === 'English'
      ? (timeOfDay = 'Good afternoon!')
      : hours >= 12 && hours < 18 && languageSelected === 'Portuguese'
      ? (timeOfDay = 'Boa tarde!')
      : languageSelected === 'English'
      ? (timeOfDay = 'Good night!')
      : languageSelected === 'Portuguese'
      ? (timeOfDay = 'Boa noite!')
      : (timeOfDay = 'Boa noite!');
    console.log(timeOfDay);
    return timeOfDay;
  }

  return (
    <div className="mainSection-container">
      <div className="fade"></div>
      <div className="mainSection-presentationTextContainer">
        <h3>{getTimeOfDay()}</h3>
        <h1>{texts.PresentationText.ImMatheus}</h1>
        <p>{texts.PresentationText.IBuildInterfaces}</p>
        <a className="actionButton" href="#anchorToWhatIdo">
          {texts.PresentationText.actionButton}
        </a>
      </div>
      <div id="anchorToWhatIdo"></div>
    </div>
  );
};

export default MainSection;
