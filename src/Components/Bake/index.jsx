import React from 'react';
import ImageData from "./card.json";
import './index.scss';

const Bake = () => {

  return (
    <section className="bake" id="bake">
      <div className="bake__content">
        <h2 className="bake__title">What we bake</h2>
        <p className="bake__desc">We can customize our cookies right for your needs. Just imagine it</p>
        <div className='bake__section'>
        {ImageData.map((img) => (
          <article className='bake__card' key={img.id}>
            <img
              className="card__img"
              src={img.src}
              alt="product" loading="lazy"
            />
            <h3 className="card__title">{img.title}</h3>
            <p className="card__desc">{img.desc}</p>
            <a className="card__link" href="#contact"><span className="icon icon--arrow"></span>Order</a>
          </article>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Bake;