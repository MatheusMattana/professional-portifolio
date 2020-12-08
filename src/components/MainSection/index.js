import React from 'react';

import LanguageTexts from '../../LanguageTexts.json';

import { useLanguage } from '../../context/Language';

import goodMorning from '../../assets/mainSection/goodMorning.png';
import goodAfternoon from '../../assets/mainSection/goodAfternoon.png';
import goodNight from '../../assets/mainSection/goodNight.png';
import bomDia from '../../assets/mainSection/bomDia.png';
import boaTarde from '../../assets/mainSection/boaTarde.png';
import boaNoite from '../../assets/mainSection/boaNoite.png';
import downArrow from '../../assets/mainSection/down-arrow.png';

const MainSection = () => {
  const { languageSelected } = useLanguage();

  let texts = {};
  languageSelected === 'English'
    ? (texts = LanguageTexts.English)
    : (texts = LanguageTexts.Portuguese);

  const getTimeOfDay = () => {
    let date = new Date();
    let hours = date.getHours();
    let timeOfDay;

    hours < 12 && languageSelected === 'English'
      ? (timeOfDay = goodMorning)
      : hours < 12 && languageSelected === 'Portuguese'
      ? (timeOfDay = bomDia)
      : hours >= 12 && hours < 18 && languageSelected === 'English'
      ? (timeOfDay = goodAfternoon)
      : hours >= 12 && hours < 18 && languageSelected === 'Portuguese'
      ? (timeOfDay = boaTarde)
      : languageSelected === 'English'
      ? (timeOfDay = goodNight)
      : languageSelected === 'Portuguese'
      ? (timeOfDay = boaNoite)
      : (timeOfDay = boaNoite);

    return timeOfDay;
  };

  return (
    <div className="mainSection-container">
      <div className="mainSection-presentationTextContainer">
        <img src={getTimeOfDay()} alt="responsive greetings" />
        <h1>{texts.PresentationText.ImMatheus}</h1>
        <p>{texts.PresentationText.IBuildInterfaces}</p>
      </div>
      <div
        id="whatIDo"
        onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
        className="learnMore-container"
      >
        <p>{texts.PresentationText.LearnMore}</p>
        <img src={downArrow} alt="down arrow" />
      </div>
    </div>
  );
};

export default MainSection;
