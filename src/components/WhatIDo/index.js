import React from 'react';
import LanguageTexts from '../../LanguageTexts.json';

import IconReact from '../../assets/skillsIcons/Reacticon.svg';
import IconGit from '../../assets/skillsIcons/Giticon.svg';

import IconFigma from '../../assets/skillsIcons/Figmaicon.svg';
import IconPs from '../../assets/skillsIcons/Photoshopicon.svg';
import IconAi from '../../assets/skillsIcons/Illustratoricon.svg';

import { useLanguage } from '../../context/Language';

const WhatIDo = () => {
  const { languageSelected } = useLanguage();

  let texts = {};
  languageSelected === 'Portuguese'
    ? (texts = LanguageTexts.Portuguese)
    : (texts = LanguageTexts.English);

  return (
    <div className="whatIDo-container">
      <div className="sectionTitle">{texts.WhatIDo.Title}</div>
      <p className="description notCentralizedText">
        {texts.WhatIDo.SetOfTools}
      </p>
      <div className="mySkills-container notCentralizedText">
        <ul className="myDeveloperSkills-container">
          <li className="skill-container">
            <div className="iconContainer">
              <p>&lt;/&gt;</p>
            </div>
            <p className="skillDescription">HTML</p>
          </li>
          <li className="skill-container">
            <div className="iconContainer">
              <p>&#123;&#59;&#125;</p>
            </div>
            <p className="skillDescription">{texts.WhatIDo.Sass}</p>
          </li>
          <li className="skill-container">
            <div className="iconContainer">
              <p>JS</p>
            </div>
            <p className="skillDescription">Javascript</p>
          </li>
          <li className="skill-container">
            <div className="iconContainer">
              <img src={IconReact} className="skillIcon" alt="react icon" />
            </div>
            <p className="skillDescription">React</p>
          </li>
        </ul>
        <ul className="myDeveloperSkills-container">
          <li className="skill-container">
            <div className="iconContainer">
              <img src={IconGit} className="skillIcon" alt="git icon" />
            </div>
            <p className="skillDescription">{texts.WhatIDo.Git}</p>
          </li>
          <li className="skill-container">
            <div className="iconContainer">
              <img src={IconFigma} className="skillIcon" alt="figma icon" />
            </div>
            <p className="skillDescription">{texts.WhatIDo.Figma}</p>
          </li>
          <li className="skill-container">
            <div className="iconContainer">
              <img src={IconPs} className="skillIcon" alt="photoshop icon" />
            </div>
            <p className="skillDescription">{texts.WhatIDo.Photoshop}</p>
          </li>
          <li className="skill-container">
            <div className="iconContainer">
              <img src={IconAi} className="skillIcon" alt="illustrator icon" />
            </div>
            <p className="skillDescription">{texts.WhatIDo.Illustrator}</p>
          </li>
        </ul>
      </div>
      <div id="anchorToMyPortifolio"></div>
    </div>
  );
};

export default WhatIDo;
