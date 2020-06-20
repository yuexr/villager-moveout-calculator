import React from 'react';

import './Footer.scss'
import footerImage from '../../img/footer.png';
import twitterImage from '../../img/tw.png';
import instagramImage from '../../img/ig.png';
import KofiWidget from '../KofiWidget/KofiWidget';

const Footer = () => (
  <div className="Footer">
    <img className="Footer__image" src={footerImage} alt="footer banner"/>
    <div className="Footer__content">
      <div className="Footer__links">
        <a href="https://twitter.com/yuecrossing" className="Footer__icon"
          target="_blank" rel="noopener noreferrer">
          <img src={twitterImage} alt="twitter link"/>
        </a>
        <a href="https://www.instagram.com/yuecrossing/" className="Footer__icon"
          target="_blank" rel="noopener noreferrer">
          <img src={instagramImage} alt="instagram link"/>
        </a>
        <KofiWidget />
      </div>
      <p>Made with love by Xiyuue (Yuecrossing).</p>
      <p>If you remove credits from my guides or modify my guides without permission, I will hunt you down and feed your flesh to my villagers. Thanks for understanding.</p>
    </div>
  </div>
);

export default Footer;