import React from "react"
import "../styles/Header.css"
function Header() {
  return (
    <nav className="header">
      <div className="logo">Christian Roqu<a href="https://github.com" target ="_blank">e</a></div> 
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#mywork">My Work</a></li>
      </ul>
      <div className="nav-buttons">
        <a href="#resume" className="btn-outline">My Resume</a>
        <a href= "https://www.facebook.com/share/p/1Aj8SSNKsS/"  className="btn-primary" target="_blank">Hire Me Now</a>
      </div>
    </nav>
  )
}

export default Header
