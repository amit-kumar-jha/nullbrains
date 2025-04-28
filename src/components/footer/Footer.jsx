import React from "react";
import { SiDribbble, SiFacebook, SiGithub, SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";

import "./Footer.css";

function Footer() {
  return (
    <section className="footer" id="contact">
      <ul className="footer-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#blogs">Blog</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#terms">Terms</a>
        </li>
      </ul>
      <ul className="footer-social-icons">
        <li>
          <SiFacebook />
        </li>
        <li>
          <SiGithub />
        </li>
        <li>
          <SlSocialTwitter />
        </li>
        <li>
          <SiInstagram />
        </li>
        <li>
          <SiDribbble />
        </li>
      </ul>
      <p className="footer-copy">
        &copy; 2025 SomeCompany, Inc. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
