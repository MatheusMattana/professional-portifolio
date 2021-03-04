import React from 'react';
import LanguageTexts from '../../LanguageTexts.json';

import { useLanguage } from '../../context/Language';

import NetflixCloneLogo from '../../assets/myPortifolio/NetflixCloneLogo.png';
import HealthyDevLogo from '../../assets/myPortifolio/HealthyDevLogofull.svg';
import WallpapersLogo from '../../assets/myPortifolio/WallpapersGhibli.png';

import GoToIcon from '../../assets/myPortifolio/goToIcon.svg';
import GitHubIcon from '../../assets/myPortifolio/GithubIcon.png';

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
        <div className="sectionTitle">{texts.MyPortifolio.Title}</div>
        <div className="titleLine"></div>
      </div>
      <div className="projects-container">
        <div className="projectBox">
          <img src={NetflixCloneLogo} alt="Netflix Clone Logo" />
          <div className="projectDescription-container">
            {texts.MyPortifolio.Netflix}
          </div>
          <div className="projectsButtons-container">
            <a
              href="https://netflix-clone-henna.vercel.app/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button type="button" title="Go to site">
                <img src={GoToIcon} alt="go to external site icon" />
              </button>
            </a>
            <button type="button" title="See on Github">
              <img src={GitHubIcon} alt="go to external site icon" />
            </button>
          </div>
        </div>
        <div className="projectBox">
          <img src={HealthyDevLogo} alt="Helthy Dev Logo" />
          <div className="projectDescription-container">
            {texts.MyPortifolio.Netflix}
          </div>
          <div className="projectsButtons-container">
            <button type="button">
              <img src={GoToIcon} alt="go to external site icon" />
            </button>
            <button type="button">
              <img src={GitHubIcon} alt="go to external site icon" />
            </button>
          </div>
        </div>
        <div className="projectBox">
          <img src={WallpapersLogo} alt="Project Logo" />
          <div className="projectDescription-container">
            {texts.MyPortifolio.Soon}
          </div>
          <div className="projectsButtons-container"></div>
        </div>
      </div>
      <div id="anchorToMyAboutMe"></div>
    </div>
  );
};

export default MyPortifolio;
