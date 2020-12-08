import React from 'react';

import EmailIcon from '../../assets/footer/EmailIcon.png';
import LinkedinIcon from '../../assets/footer/LinkedinIcon.png';
import WhatsIcon from '../../assets/footer/WhatsIcon.png';
import GithubIcon from '../../assets/footer/GithubIcon.png';

const Footer = () => {
  return (
    <div class="footer-container">
      <div className="links-container">
        <div className="link-container">
          <a href="mailto:matheusmattana@hotmail.com">
            <img src={EmailIcon} alt="" />
          </a>
        </div>
        <div className="link-container">
          <a
            href="https://linkedin.com/in/matheus-mattana-17abb9129"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="" />
          </a>
        </div>
        <div className="link-container">
          <a
            href="https://wa.me/5554991468813"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={WhatsIcon} alt="" />
          </a>
        </div>
        <div className="link-container">
          <a
            href="https://github.com/MatheusMattana"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
