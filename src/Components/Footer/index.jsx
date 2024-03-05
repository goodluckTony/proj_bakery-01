import React from 'react';
import './index.scss';
import '../../assets/style/index.scss';
import '../../assets/style/icon.scss';
import FooterLogo from "../../assets/img/footer/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__content">
          <div className="menu__content menu__content--footer">
            <a className="footer__logo" href="#"><img src={FooterLogo} alt="logo" /></a>
            <h3 className="footer__desc">Menu</h3>
            <nav className="menu__list menu__list--footer">
              <ul className="menu__items menu__items--footer">
                <li><a className="menu__link menu__link--footer" href="#bake">Products</a></li>
                <li><a className="menu__link menu__link--footer" href="#about">About Us</a></li>
                <li><a className="menu__link menu__link--footer" href="#">Blog</a></li>
                <li><a className="menu__link menu__link--footer" href="#">Terms & Privacy</a></li>
              </ul>
            </nav>
          </div>
          <div className="footer__contacts">
            <h2 className="footer__title">Contact us</h2>
            <div className="footer__contact">
              <div className="footer__contact--lists">
                <h3 className="footer__desc">Call us</h3>
                <a className="footer__link" href="tel:6015550123">(601) 555-0123</a>
                <a className="footer__link" href="tel:6025550124">(602) 555-0124</a>
                <a className="footer__link" href="tel:6035550125">(603) 555-0125</a>
              </div>
              <div className="footer__mail">
                <h3 className="footer__desc">Email us</h3>
                <a className="footer__link" href="mailto:bakerlab@example.com">bakerlab@example.com</a>
              </div>
            </div>
          </div>
          <div className="footer__social">
            <a className="footer__social--link" href="https://www.facebook.com/" target="_blank">
              <span className="icon icon--facebook"></span>
            </a>
            <a className="footer__social--link" href="https://www.instagram.com/" target="_blank">
              <span className="icon icon--instagram"></span>
            </a>
            <a className="footer__social--link" href="https://twitter.com/" target="_blank">
              <span className="icon icon--twitter"></span>
            </a>
          </div>
          <p className="footer__privacy">© Bakerlab 2023</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;