import React from 'react';
function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">Welcome</div>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/">Portfolio</a>
            <a className="nav-link" href="/">Contact</a>
            <a className="nav-link" href="/">Resume</a>
        </ul>
      </div>
    </nav>
    )
}
export default NavBar;