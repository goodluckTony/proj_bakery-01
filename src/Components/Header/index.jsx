import React, { useState } from 'react';
import './index.scss';
import Logo from  '../../assets/img/header/logo-icon.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__content">
            <a className="header__logo" href="#">
              <img src={Logo} alt="logo" />
            </a>
            <div className="menu__content menu__content--header" style={{ display: "none" }}>
              <nav className="menu__list">
                <ul className="menu__items menu__items--header">
                  <li><a className="menu__link" href="#bake">Products</a></li>
                  <li><a className="menu__link" href="#about">About Us</a></li>
                  <li><a className="menu__link" href="#">Blog</a></li>
                </ul>
              </nav>
              <a className="menu__contact" href="tel:6295550129">
                <span className="icon icon--phone"></span>
                Contact us
              </a>
            </div>
            <a className="icon icon--menu" onClick={toggleMenu} href="#menu"></a>
          </div>
        </div>
      </header>
      <aside className={`page__menu ${isMenuOpen ? 'open' : ''}`} id="menu">
        <div className="menu__container">
          <div className="menu__top">
            <a className="menu__logo" href="#">
              <img src={Logo} alt="logo" />
            </a>
            <a className="icon icon--close" onClick={toggleMenu} href="#"></a>
          </div>
          <div className="menu__content">
            <nav className="menu__list">
              <ul className="menu__items" onClick={toggleMenu}>
                <li><a className="menu__link" href="#bake">Products</a></li>
                <li><a className="menu__link" href="#about">About Us</a></li>
                <li><a className="menu__link" href="#">Blog</a></li>
              </ul>
            </nav>
            <a className="menu__contact" href="tel:6295550129">
              <span className="icon icon--phone"></span>
              Contact us
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Header;