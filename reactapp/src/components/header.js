import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(){
    return(
      <nav data-aos="fade-down" className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand col-lg-1 col-md-1 col-sm-2 col-xs-12" href="/">Home</a>
        <Link to="/projects" className="navbar-brand col-lg-1 col-md-1 col-sm-3 col-xs-12">Portfolio</Link>
        <Link to="/contactInfo" className="navbar-brand col-lg-1 col-md-1 col-sm-3 col-xs-12">Contact</Link>
        <a className="navbar-brand col-lg-1 col-md-1 col-sm-3 col-xs-12" href="https://docs.google.com/document/d/1038_sdzmqFadOf_M20GMJyJ3LrQY_zHgHVfo0ud0V20/edit?usp=sharing">Resume</a>
      </nav>
    )
}
export default NavBar;