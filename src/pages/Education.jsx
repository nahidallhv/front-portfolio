import React from "react";
import "../styles/EducationStyle.css";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "Nakhchivan State University",
    year: "09/2022 - 05/2026",
  },
  {
    degree: "Full Stack Developer",
    institution: "Coders Azerbaijan",
    year: "02/2024 - 08/2024",
  },
];

function Education() {
  return (
    <section className="education-container">
      <h1 className="section-title">Education</h1>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-year">{edu.year}</div>
            <div className="education-details">
              <h2>{edu.degree}</h2>
              <h3>{edu.institution}</h3>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
