import React from "react";

import "./FeatureCard.css";

function FeatureCard({ details }) {
  const { heading, text, Icon } = details;
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Icon className="icon" />
      </div>
      <div className="feature-heading">{heading}</div>
      <p className="feature-text">{text}</p>
    </div>
  );
}
export default FeatureCard;
