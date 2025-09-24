import React from "react"
import "../styles/Work.css"

// Card data (you can add more here later)
const projects = [
  {
    id: 1,
    title: "Flutter Project",
    description: "A BMI calculator app that displays accurate BMI based on the inputs.",
    image: "/src/assets/mrbmi.jpg",
  },
  {
    id: 2,
    title: "Todo App",
    description: "A simple task manager using Node.js and MongoDB.",
    image: "/src/assets/portfoliopic.png",
  },
  {
    id: 3,
    title: "Business Landing Page",
    description: "Landing page for a small business with modern UI design.",
    image: "/src/assets/manFace.png",
  },
]

// Reusable Card component
const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

// Work Section
const Work = () => {
  return (
    <section className="work-section">
      <h2>MY WORK</h2>
      <p>Here are some projects I’ve worked on recently</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}

export default Work

