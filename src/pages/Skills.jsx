import React from "react";
import "../styles/SkillsStyle.css";




          

function Skills() {
  const skills = [
    { icon: "devicon-html5-plain", title: "HTML", desc: "Markup language for web." },
    { icon: "devicon-css3-plain", title: "CSS", desc: "Style sheet language for styling." },
    { icon: "devicon-javascript-plain", title: "JavaScript", desc: "Programming language for web." },
    { icon: "devicon-react-plain", title: "React", desc: "Component-based frontend library." },
    { icon: "devicon-redux-plain", title: "Redux", desc: "State management library." },
    { icon: "devicon-typescript-plain", title: "TypeScript", desc: "Typed superset of JavaScript." },
    { icon: "fa-solid fa-cloud", title: "REST API", desc: "Communication between systems." },
    { icon: "devicon-tailwindcss-plain", title: "Tailwind CSS", desc: "Utility-first CSS framework." },
    { icon: "devicon-python-plain", title: "Python", desc: "High-level programming language." },
    { icon: "devicon-django-plain", title: "Django", desc: "Python-based web framework." },
    { icon: "fa-brands fa-npm", title: "NPM", desc: "JavaScript package manager." },
    { icon: "devicon-git-plain", title: "Git", desc: "Version control system." },
    { icon: "fa-brands fa-github", title: "GitHub", desc: "Code hosting platform." },
  ];;

  return (
    <section className="skills">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <i className={skill.icon}></i>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
