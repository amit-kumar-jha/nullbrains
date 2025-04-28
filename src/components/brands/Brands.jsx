import React from "react";

import "./Brands.css";

function Brands() {
  const data = ["1.svg", "2.png", "3.svg", "4.png", "5.png", "6.png"];

  return (
    <section className="brands-section">
      <div className="trusted-section">
        <p className="trusted-text">TRUSTED BY TOP-LEADING COMPANIES.</p>
        <div className="logo-container">
          {data.map((image) => (
            <img
              key={image}
              src={`/brands/${image}`}
              className="logo"
              alt="company logo"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      <section className="info-section">
        <div className="info-block">
          <div className="illustration">
            <img
              src="/brands/astro.png"
              alt="astronaut illustration"
              loading="lazy"
            />
          </div>
          <div className="details">
            <h2>Boost Productivity</h2>
            <p>
              Build an atmosphere that creates productivity in your organization
              and your company culture.
            </p>
            <ul className="list">
              <li>Maximize productivity and growth</li>
              <li>Speed past your competition</li>
              <li>Learn the top techniques</li>
            </ul>
          </div>
        </div>

        <div className="info-block reverse">
          <div className="illustration">
            <img
              src="/brands/robo.png"
              alt="robot illustration"
              loading="lazy"
            />
          </div>
          <div className="details">
            <h2>Automated Tasks</h2>
            <p>
              Save time and money with our revolutionary services. We are the
              leaders in the industry.
            </p>
            <ul className="list">
              <li>Automated task management workflow</li>
              <li>Detailed analytics for your data</li>
              <li>Some awesome integrations</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Brands;
