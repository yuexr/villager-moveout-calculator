import React from 'react';

import './Header.scss'
import headerImage from '../../img/header.png';

const Header = () => (
  <div className="Header">
    <img className="Header__image" src={headerImage} alt="banner"/>
    <div className="Header__navbar"></div>
  </div>
);

export default Header;