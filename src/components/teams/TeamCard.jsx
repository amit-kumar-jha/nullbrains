import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";

import "./TeamCard.css";

function TeamCard({ details }) {
  const { name, title, bg } = details;
  return (
    <div className="team-card">
      <div className="team-image-wrapper" style={{ background: bg }}>
        <img
          src={`teams/${name}.png`}
          className="team-image"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="team-name">{name.split("_").join(" ")}</div>
      <div className="team-title">{title}</div>
      <div className="social-links">
        <FaTwitter className="social-icon" />
        <FaGithub className="social-icon" />
      </div>
    </div>
  );
}

export default TeamCard;
