import React from 'react';
function NavBar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="navbar-brand"></div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/projects">Portfolio</a>
            <a className="nav-link" href="/contactInfo">Contact</a>
            <a className="nav-link" href="https://docs.google.com/document/d/19_8j402m4p8IEDOEZpv6RuhytvTNt7uwzL1mzieTZ-I/edit?usp=sharing">Resume</a>
        </ul>
      </div>
    </nav>
    )
}
export default NavBar;