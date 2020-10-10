import React from 'react';
import LanguageTexts from '../../LanguageTexts.json';

import IconCss from '../../assets/skillsIcons/CSSicon.png';
import IconHtml from '../../assets/skillsIcons/HTMLicon.png';
import IconJavascript from '../../assets/skillsIcons/JSicon.png';
import IconReact from '../../assets/skillsIcons/REACTicon.png';
import IconGit from '../../assets/skillsIcons/GITicon.png';

import IconFigma from '../../assets/skillsIcons/FIGMAicon.png';
import IconPs from '../../assets/skillsIcons/PSicon.png';
import IconAi from '../../assets/skillsIcons/AIicon.png';
import IconPenAndPaper from '../../assets/skillsIcons/PENANDPAPERicon.png';
import IconReferences from '../../assets/skillsIcons/REFERENCESicon.png';

import { useLanguage } from '../../context/Language';

const WhatIDo = () => {
  const { languageSelected } = useLanguage();

  let texts = {};
  languageSelected === 'English'
    ? (texts = LanguageTexts.English)
    : (texts = LanguageTexts.Portuguese);

  return (
    <div className="whatIDo-container">
      <div id="whatIDo" className="whatIDoTitle-container">
        <div id="rightTitleLine" className="titleLine"></div>
        <div className="sectionTitle">
          <i>{texts.WhatIDo.Title}</i>
        </div>
        <div className="titleLine"></div>
      </div>
      <div className="mySkills-container">
        <div className="myDeveloperSkills-container">
          <p>
            <i>{texts.WhatIDo.FrontEnd}</i>
          </p>
          <div className="skill-container">
            <img src={IconHtml} className="skillIcon" />
            <p className="skillDescription">HTML</p>
          </div>
          <div className="skill-container">
            <img src={IconCss} className="skillIcon" />
            <p className="skillDescription">CSS</p>
          </div>
          <div className="skill-container">
            <img src={IconJavascript} className="skillIcon" />
            <p className="skillDescription">Javascript</p>
          </div>
          <div className="skill-container">
            <img src={IconReact} className="skillIcon" />
            <p className="skillDescription">React</p>
          </div>
          <div className="skill-container">
            <img src={IconGit} className="skillIcon" />
            <p className="skillDescription">Git</p>
          </div>
        </div>
        <div className="myDeveloperSkills-container">
          <p>
            <i>{texts.WhatIDo.Designer}</i>
          </p>
          <div className="skill-container">
            <img src={IconFigma} className="skillIcon" />
            <p className="skillDescription">Figma</p>
          </div>
          <div className="skill-container">
            <img src={IconPs} className="skillIcon" />
            <p className="skillDescription">Photoshop</p>
          </div>
          <div className="skill-container">
            <img src={IconAi} className="skillIcon" />
            <p className="skillDescription">Illustrator</p>
          </div>
          <div className="skill-container">
            <img src={IconPenAndPaper} className="skillIcon" />
            <p className="skillDescription">{texts.WhatIDo.PencilAndPaper}</p>
          </div>
          <div className="skill-container">
            <img src={IconReferences} className="skillIcon" />
            <p className="skillDescription">{texts.WhatIDo.References}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
