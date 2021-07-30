import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand col-lg-1 col-md-1 col-sm-12 col-xs-12" href="/">Home</a>
        <Link to="/projects" className="navbar-brand col-lg-1 col-md-1 col-sm-12 col-xs-12">Portfolio</Link>
        <Link to="/contactInfo" className="navbar-brand col-lg-1 col-md-1 col-sm-12 col-xs-12">Contact</Link>
        <a class="navbar-brand col-lg-1 col-md-1 col-sm-12 col-xs-12" href="https://docs.google.com/document/d/1JRJTE-A6u941O3F4mi2I1YtNntQPzBcEoe0PJGPR8Yo/edit?usp=sharing">Resume</a>
      </nav>
    )
}
export default NavBar;