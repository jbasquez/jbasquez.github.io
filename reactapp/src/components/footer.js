import React from "react";
import '../scss/style.css';

function Footer() {
    return(
        <div>
        <footer className="new">
    <section className="contact-info">
      <h2>Contact Info</h2>
      <ul className="noBullet">
        <li><strong>Email: </strong> <a className="contact" href="contact.html">jybasquez@yahoo.com</a></li>
        <li><strong>Github: </strong> <a className="contact" href="https://github.com/jbasquez">jbasquez</a></li>
        <li><strong>Portfolio: </strong> <a className="contact" href="portfolio.html">Click Here</a></li>
        <li><strong>LinkedIn: </strong> <a className="contact" href="https://www.linkedin.com/in/joseph-basquez-a1ab6a1b5/">Click Here</a></li>
        <li><strong>Phone Number: </strong> <a className="contact" href="https://www.linkedin.com/in/joseph-basquez-a1ab6a1b5/">910-322-0946</a></li>
      </ul>
    </section>
        </footer>
        </div>
    );
}

export default Footer;