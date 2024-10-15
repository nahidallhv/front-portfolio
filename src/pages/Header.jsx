import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeaderStyle.css";

function Header() {
  return (
    <div>
      <header>
        <Link to={"/"} className="logo">Nahid</Link>

        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/skills"}>Skills</Link>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/education"}>Education</Link>
          <Link to={"/experience"}>Experience</Link>
          <Link to={"/contact"}>Contact</Link>
        </nav>
      </header>
    </div>
  );
}

export default Header;
