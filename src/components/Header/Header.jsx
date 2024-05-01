import React from 'react'
import "./header.css";
import svg from "../../assets/Arrow-next.svg";
import headerImage from "../../assets/Frame 25.png";

const Header = () => {
  return (
    <header className='header'>
    <div className="header__block">
      <div className="header__content">
        <div className="header__title">Winter Vacation Trips</div>
        <div className="header__text">Enjoy your winter vacations with warmth
and amazing sightseeing on the mountains.
Enjoy the best experience with us!</div>
        <a href="#discover" className="header__button">
          <span>Let’s Go!</span>
          <img src={svg} alt="icon"  />
        </a>
      </div>
      <img src={headerImage} alt="big-image" className="header__img" />
      </div>  
    </header>
  )
}

export default Header
