import React from 'react';
import './index.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__content">
        <h2 className="about__title">Few words About us</h2>
        <p className="about__desc">Like many design teams, Onfido made the transition from Abstract + Sketch, to Figma in the last couple of years. One of the common resistance points internally before making that switch, was Figma’s lack of Git-style branching that Abstract enabled. The design team had come to rely on branching and had built a lot of our processes around it.</p>
        <div className="about__numbers">
          <div className="numbers__number">
            <p className="numbers__year">2015</p>
            <p className="numbers__achievement ">Foundation year</p>
          </div>
          <div className="numbers__number">
            <p className="numbers__year">23</p>
            <p className="numbers__achievement ">Stores</p>
          </div>
          <div className="numbers__number">
            <p className="numbers__year">155</p>
            <p className="numbers__achievement ">Companies</p>
          </div>
          <div className="numbers__number">
            <p className="numbers__year">10k+</p>
            <p className="numbers__achievement ">Clients</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
