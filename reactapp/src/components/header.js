import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
    //   <nav className="navbar navbar-expand-sm navbar-light bg-light">
    //   <div className="navbar-brand"></div>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav">
    //         <Link to="/" className="nav-link">Home</Link>
    //         <Link to="/projects" className="nav-link">Portfolio</Link>
    //         <Link to="/contactInfo" className="nav-link">Contact</Link>
    //         <a className="nav-link" href="https://docs.google.com/document/d/1JRJTE-A6u941O3F4mi2I1YtNntQPzBcEoe0PJGPR8Yo/edit?usp=sharing">Resume</a>
    //     </ul>
    //   </div>
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Home</a>
  <a class="navbar-brand" href="/projects">Portfolio</a>
  <a class="navbar-brand" href="/contactInfo">Contact</a>
  <a class="navbar-brand" href="#">Navbar</a>
</nav>
    )
}
export default NavBar;