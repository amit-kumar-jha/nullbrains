import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          nullBrains<span className="dot">.</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a
                href="#home"
                onClick={() => handleLinkClick("#home")}
                className={activeLink === "#home" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={() => handleLinkClick("#features")}
                className={activeLink === "#features" ? "active" : ""}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#blog"
                onClick={() => handleLinkClick("#blog")}
                className={activeLink === "#blog" ? "active" : ""}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleLinkClick("#contact")}
                className={activeLink === "#contact" ? "active" : ""}
              >
                Contact
              </a>
            </li>

            <li className="search-icon-li">
              <FaSearch className="search-icon" />
            </li>
          </ul>
          <div className="border" />
          <div className="mobile-header-actions">
            <div className="align-center">
              <a
                href="#signin"
                className="signin"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </a>
            </div>
            <a
              href="#signup"
              className="signup align-center"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </nav>

        {/* Desktop Header Actions */}
        <div className="header-actions">
          <a href="#signin" className="signin">
            Sign In
          </a>
          <a href="#signup" className="signup">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
