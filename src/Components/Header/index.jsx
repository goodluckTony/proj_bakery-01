import React from 'react';
import './index.scss';
// import '../../assets/style/index.scss';
// import '../../assets/style/icon.scss';
import Logo from  '../../assets/img/header/logo-icon.svg';

const Header = () => {
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
            <a className="icon icon--menu" href="#menu"></a>
          </div>
        </div>
      </header>
      <aside className="page__menu menu" id="menu" style={{ display: "none" }}>
        <div className="menu__container">
          <div className="menu__top">
            <a className="menu__logo" href="#">
              <img src="./images/icons/logo-icon.svg" alt="logo" />
            </a>
            <a className="icon icon--close" href="#"></a>
          </div>
          <div className="menu__content">
            <nav className="menu__list">
              <ul className="menu__items">
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