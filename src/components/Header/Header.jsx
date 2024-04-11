import React from 'react'
import "./header.css";
import svg from "../img/let's go.svg";
import headerImage from "../img/Frame 25.png";

const Header = () => {
  return (
    <div className='header'>
    <div className="header__block">
      <div className="header__content">
        <div className="header__title">Winter Vacation Trips</div>
        <div className="header__text">Enjoy your winter vacations with warmth
and amazing sightseeing on the mountains.
Enjoy the best experience with us!</div>
        <img src={svg} alt="let's go.svg" className="header__button" />
      </div>
      <img src={headerImage} alt="big-image" className="header__img" />
      </div>  
    </div>
  )
}

export default Header
