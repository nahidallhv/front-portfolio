import React from "react";
import "../styles/HomeStyle.css";
import homeImg from "../assets/main.png";
import { Link } from "react-router-dom";
import myCv from "../assets/nahidallhvvCV.pdf";

function Home() {
  return (
    <div>
      <section className="home">
        <div className="home-img">
          <img src={homeImg} alt="nahid-img" />
        </div>
        <div className="home-content">
          <h1>
            Hi, It's <span>Nahid</span>
          </h1>
          <h3 className="typing-text">
            I'm a <span></span>
          </h3>
          <p>
            I am a passionate and open to learning frontend developer, I love to
            develop creative projects. Team-oriented, problem-solving and
            determined to take on challenges. I have experience in React and
            JavaScript and design user-friendly, responsive interfaces. My goal
            is to continuously improve myself and take part in innovative
            projects.
          </p>
          <div className="social-icons">
            <a href="https://linkedin.com/in/nahidallhv">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/nahidallhv">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://instagram.com/nahidallhv">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <a href={myCv} download>
            <button className="btn">Resume</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
