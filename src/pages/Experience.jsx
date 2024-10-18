import React from "react";
import "../styles/ExperienceStyle.css";

const experienceData = [
  {
    position: "Frontend developer",
    company: "MyMentor İnternship and Development Agency",
    year: "10/2024 - Present",
    description:
      "Ability to work with a team and individually in a 40-day marathon with real projects and a real work environment.",
  },
  {
    position: "Frontend Instructor",
    company: "Optimal Grup MMC",
    year: "10/2024 - Present",
    description:
      "Instructor guiding students in frontend development, preparing lessons with modern web technologies and supporting practice-based learning process. Focusing on helping students gain practical skills with technologies such as HTML, CSS, JavaScript and React. Mentoring students to learn both theoretical and practical knowledge. To prepare comprehensive curricula and train the software developers of the future with hands-on training.",
  },
  {
    position: "Frontend Developer",
    company: "Buta Grup",
    year: "10/2024 - Present",
    description:
      "Teamwork skills and experience in a real working environment in the virtual experience program “VTP10”. Experience in real projects by solving different tasks related to frontend, backend and database. Online meetings with Zoom program, doing class work with Google Classroom program. Experience with ClickUp task management system and other programs such as Odoo, Bitrix24(CRM)",
  },
  {
    position: "Full Stack Developer(Intern)",
    company: "KiberKod MMC",
    year: "09/2024 - 10/2024",
    description:
      "Working properly as a team in a real project, Working with micro-service architecture, Using github as a team, Working with frontend and backend technologies, Able to work with large volumes of data,  About server, hosting, domain and subdomains",
  },
  {
    position: "Junior Frontend Developer ",
    company: "Self-Employed",
    year: "07/2024 - 09/2024",
    description:
      "A possionate Frontend Developer with strong foundations in HTML, CSS, JavaScript, and React, focused on creating user-centered and modern web interfaces. Experienced in developing mobile-responsive and SEO-friendly web solutions to enhance user experience A quick learner with strong problem-solving skills, adaptable to the ever- evolving weh technologies.",
  },
];

function Experience() {
  return (
    <section className="experience-container">
      <h1 className="section-title">Experience</h1>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-details">
              <h2>{exp.position}</h2>
              <h3>{exp.company}</h3>
              <div className="experience-year">{exp.year}</div>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
