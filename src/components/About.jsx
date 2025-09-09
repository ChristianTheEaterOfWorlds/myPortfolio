import React from "react"
import "../styles/About.css"

function About() {
  return (
    <section id="about" className="about">
      <h2>ABOUT ME</h2>
      <p>
        I am a graduating IT student passionate about web development, 
        with hands-on experience in Node.js, and React.js etc. 
        I enjoy building dynamic and user-friendly web applications that 
        solve real-world problems and help businesses grow..
      </p>
      <div className="about-buttons">
        <a href="#hire" className="btn-primary">Hire Me Now</a>
        <a href="https://wa.me/yourNumber" className="btn-outline">Whatsapp</a>
      </div>
    </section>
  )
}

export default About
