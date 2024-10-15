import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderStyle.css";

function Header() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header>
      <Link to="/" className="logo">
        Nahid
      </Link>

      <nav className={isNavActive ? "active" : ""}>
        <Link to="/" onClick={toggleNav}>
          Home
        </Link>
        <Link to="/skills" onClick={toggleNav}>
          Skills
        </Link>
        <Link to="/projects" onClick={toggleNav}>
          Projects
        </Link>
        <Link to="/education" onClick={toggleNav}>
          Education
        </Link>
        <Link to="/experience" onClick={toggleNav}>
          Experience
        </Link>
        <Link to="/contact" onClick={toggleNav}>
          Contact
        </Link>
      </nav>

      <div
        className={`hamburger ${isNavActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}

export default Header;
