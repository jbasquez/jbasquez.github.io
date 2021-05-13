import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="navbar-brand"></div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <Link to="/projects" className="nav-link">Portfolio</Link>
            <Link to="/contactInfo" className="nav-link">Contact</Link>
            <a className="nav-link" href="https://docs.google.com/document/d/19_8j402m4p8IEDOEZpv6RuhytvTNt7uwzL1mzieTZ-I/edit?usp=sharing">Resume</a>
        </ul>
      </div>
    </nav>
    )
}
export default NavBar;