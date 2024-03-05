import React from 'react';
import './index.scss';
import HeroImg from '../../assets/img/hero/cookie-bg.png';

const Hero = () => {
  return (
    <>
      <section className="hero">
          <div className="hero__content">
            <p className="hero__desc">We bake your fantasies — croissants, cakes, cookies, and cupcakes.</p>
            <h1 className="hero__title">Creative bakery</h1>
            <img
              className="hero__img"
              src={HeroImg}
              width="288"
              height="290"
              alt="Cookie"
            />
            <a className="hero__button" href="#bake">
              Learn more
            </a>
          </div>
        </section>
    </>
  )
}

export default Hero;