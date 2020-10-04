import React from 'react';
import LanguageTexts from '../../LanguageTexts.json';

import IconCss from '../../assets/skillsIcons/CSSicon.png';
import IconHtml from '../../assets/skillsIcons/HTMLicon.png';
import IconJavascript from '../../assets/skillsIcons/JSicon.png';
import IconReact from '../../assets/skillsIcons/REACTicon.png';
import IconGit from '../../assets/skillsIcons/GITicon.png';

import { useLanguage } from '../../context/Language';

const WhatIDo = () => {
  const { languageSelected } = useLanguage();

  let texts = {};
  languageSelected === 'English'
    ? (texts = LanguageTexts.English)
    : (texts = LanguageTexts.Portuguese);

  return (
    <div className="whatIDo-container">
      <div className="whatIDoTitle-container">
        <div id="rightTitleLine" className="titleLine"></div>
        <div id="whatIDoTitle" className="sectionTitle">
          <i>{texts.WhatIDo.Title}</i>
        </div>
        <div className="titleLine"></div>
      </div>
      <div className="mySkills-container">
        <div className="myDeveloperSkills-container">
          <p>{texts.WhatIDo.FrontEnd}</p>
          <div className="skill-container">
            <img src={IconHtml} className="skillIcon" />
            <p className="skillDescription">HTML</p>
          </div>
        </div>
        <div className="myDesignerSkills-container"></div>
      </div>
    </div>
  );
};

export default WhatIDo;
