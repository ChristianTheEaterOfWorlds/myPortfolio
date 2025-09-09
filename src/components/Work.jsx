import React from "react"
import "../styles/Work.css"
import mrbmi from "../assets/mrbmi.jpg";
import portfoliopic from "../assets/portfoliopic.png";
import placeholder from "../assets/manFace.png";

function Work() {
    return (
        <section id="mywork" className="work-section">
            <h2 className="work-title">MY WORK</h2>
            <p className="work-subtitle">
                Here are some projects I’ve worked on recently
            </p>
            <div className="projects">
                <div className="project-card">
                    <img src={mrbmi} alt="Portfolio Website" />
                    <h3>Flutter Project</h3>
                    <p>A BMI caclulator app that displays accurate BMI based on the inputs.</p>
                </div>
                <div className="project-card">
                    <img src={portfoliopic} alt="Todo App" />
                    <h3>My Portfolio</h3>
                    <p>A responsive portfolio site built with React and CSS.</p>
                </div>
                <div className="project-card">
                    <img src={placeholder} alt="placeholder" />
                    <h3>Place Holder</h3>
                    <p>Nothing to see here.</p>
                </div>
            </div>
        </section>
    )
}

export default Work
