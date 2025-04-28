import React from "react";

import "./TeamCard.css"; // Import the CSS
import TeamCard from "./TeamCard";

function Team() {
  const data1 = [
    {
      id: "001",
      name: "Freddy_Smith",
      title: "CEO and Founder",
      bg: "rgba(209, 250, 229, 1)",
    },
    {
      id: "002",
      name: "Carl_Jones",
      title: "CTO and Co-Founder",
      bg: "rgba(219, 234, 254, 1)",
    },
    {
      id: "003",
      name: "Susan_Peterson",
      title: "Marketing Director",
      bg: "rgba(254, 226, 226, 1)",
    },
    {
      id: "004",
      name: "Tommy_Barnes",
      title: "Designer",
      bg: "rgba(224, 231, 255, 1)",
    },
    {
      id: "001",
      name: "Ron_Jenson",
      title: "Senior Developer",
      bg: "rgba(224, 231, 255, 1)",
    },
    {
      id: "002",
      name: "Pete_Tompkins",
      title: "Web Developer",
      bg: "rgba(254, 226, 226, 1)",
    },
    {
      id: "003",
      name: "Kelly_Richards",
      title: "Sales Manager",
      bg: "rgba(219, 234, 254, 1)",
    },
    {
      id: "004",
      name: "Alexis_Jordan",
      title: "Affiliate Manager",
      bg: "rgba(209, 250, 229, 1)",
    },
  ];

  return (
    <section className="team-section">
      <div className="title-background" />
      <p className="team-intro">OUR TEAM</p>
      <div className="team-heading">
        An incredible team of <br className="hidden-break" /> amazing
        individuals
      </div>
      <div className="team-cards-container">
        {data1.map((i) => (
          <div className="team-card-wrapper" key={i.id}>
            <TeamCard details={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
