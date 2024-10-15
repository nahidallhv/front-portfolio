import React from "react";
import "../styles/ProjectsStyle.css";
import oldPortfolio from "../assets/oldportfolio.png";
import gameDice from "../assets/gamedice.png";
import optimalG from "../assets/optimal.png"

const projects = [
    {
      title: "Registiration Frontend",
      description: "A one-page web site where students can view the entire programme linked to the frontend course and the applicant can fill out the form and become a member",
      imageUrl: optimalG, 
      link: "https://optimal-grub-frontend-1908076905b8.herokuapp.com/"
    },
  {
    title: "My Portfolio",
    description:
      "This portfolio site, created to showcase web development skills, includes my projects and works. I developed projects by using modern technologies such as React.js, prioritizing user experience. You can contact me by reviewing my portfolio!",
    imageUrl: oldPortfolio,
    link: "https://nahidallhv.vercel.app",
  },
  {
    title: "Dice Game",
    description:
      "A simple game developed with React Technology. How to play dice game : Select any number; Click on dice image; after click on dice if selected number is equal to dice number you will get same point as dice; if you get wrong guess then 2 point will be dedcuted.",
    imageUrl: gameDice,
    link: "https://dicegamee.vercel.app"
  },
  {
    title: "Project 3",
    description: "Description for project 3.",
    imageUrl: "path/to/image3.jpg", 
  },
 
];

function Projects() {
  return (
    <section className="project-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <a href={project.link}>
            <img src={project.imageUrl} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
