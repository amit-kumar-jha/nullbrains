import React from "react";

import "./Blogs.css";

function Blogs() {
  const data = [
    {
      heading: "Best Workstations of the Year",
      text: "Check out these inspiring workstations to get ideas on how to level-up your workstation.",
      badge: "INSPIRATION",
      color: "indigo",
      id: "4",
    },
    {
      heading: "Eating for productivity",
      text: "Learn how to be more disciplined in your diet and how you can eat to maximize productivity.",
      badge: "FOOD",
      color: "red",
      id: "5",
    },
    {
      heading: "A Design Mind-set",
      text: "What does it mean to have a design mind-set? Learn how to improve your eye for design.",
      badge: "RESOURCES",
      color: "purple",
      id: "6",
    },
  ];

  return (
    <section>
      <div className="blogs-container">
        <div className="blogs-heading">The Project Blog</div>
        <div className="blogs-subheading">
          Designs and layouts to help you with your app.
        </div>
        <section className="blogs-main-cards">
          <div className="blog_lg_card">
            <div className="blog_card_img">
              <img
                src="/blog/1.jpg"
                alt="cup on purple background"
                loading="lazy"
              />
            </div>
            <div
              className="blog-card-details"
              style={{ background: "#e508c3" }}
            >
              <div className="blog_details">
                <span className="blog-badge" style={{ color: "#ff5fe7" }}>
                  RESOURCES
                </span>
                <div className="blog_title">Refreshing Designs</div>
                <div className="blog_text">
                  Quench satisfying designs to help you stir up emotion and tell
                  a story.
                </div>
              </div>
            </div>
          </div>
          <div className="blog_lg_card">
            <div className="blog_card_img2">
              <img
                src="/blog/2.jpg"
                alt="cup on purple background"
                loading="lazy"
              />
            </div>
            <div
              className="blog-card2-details"
              style={{ background: "#6e82fe" }}
            >
              <div className="blog_details">
                <span className="blog-badge" style={{ color: "#1c3d8f" }}>
                  LIFESTYLE
                </span>
                <div className="blog_title">Healthier Lifestyle</div>
                <div className="blog_text">
                  Living a healthier lifestyle will help with your productivity
                  and your mind-set.
                </div>
              </div>
            </div>
          </div>
          <div className="blog_lg_card">
            <div className="blog_card_img">
              <img
                src="/blog/3.jpg"
                alt="cup on purple background"
                loading="lazy"
              />
            </div>
            <div
              className="blog-card-details"
              style={{ background: "#f9e05d" }}
            >
              <div className="blog_details">
                <span className="blog-badge" style={{ color: "#8b7d00" }}>
                  ENTERTAINMENT
                </span>
                <div className="blog_title">Gaming Evolution</div>
                <div className="blog_text">
                  Learn about the evolution of gaming and how it started a
                  revolution.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blogs-flex-cards">
          {data.map(({ id, heading, text, color, badge }) => (
            <div className="blog-card" key={id}>
              <img
                src={`/blog/${id}.jpg`}
                className="blog-image"
                alt=""
                loading="lazy"
              />
              <div className="blog_card_content">
                <span className={`blog-badge-card blog-badge-${color}`}>
                  {badge}
                </span>
                <div className="blog-card-title">{heading}</div>
                <div className="blog-card-text">{text}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Blogs;
