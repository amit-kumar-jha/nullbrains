import React from "react";

import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero-container">
      <div className="hero-text">
        Start Crafting Your <br />
        <span className="highlighted-text">Next Great Idea</span>
      </div>
      <div className="description-text">
        Simplifying the creation of landing pages, blog pages, <br />
        application pages and so much more!
      </div>
      <div className="button-container">
        <span className="price-tag">only $15/mo</span>
        <button className="btn-primary">Purchase Now</button>
      </div>
      <div className="learn-more-container">
        <a href="#learn" className="learn-more">
          Learn More
        </a>
      </div>
    </section>
  );
}

export default Hero;
