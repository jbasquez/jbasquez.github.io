import React from "react";
import '../scss/style.css';

function Footer() {
    return(
        <div>
          <footer>
            <section className="contact-info bg textColor">
              <ul className="noBullet">
                <li><strong>Email: </strong> <a className="contact textColor" href="mailto:jybasquez@yahoo.com">jybasquez@yahoo.com</a></li>
                <li><strong>Github: </strong> <a className="contact textColor" href="https://github.com/jbasquez">jbasquez</a></li>
                <li><strong>Portfolio: </strong> <a className="contact textColor" href="portfolio.html">Click Here</a></li>
                <li><strong>LinkedIn: </strong> <a className="contact textColor" href="https://www.linkedin.com/in/joseph-basquez-a1ab6a1b5/">Click Here</a></li>
                <li><strong>Phone Number: </strong> <a className="contact textColor" href="https://www.linkedin.com/in/joseph-basquez-a1ab6a1b5/">910-322-0946</a></li>
              </ul>
            </section>
          </footer>
        </div>
    );
}

export default Footer;