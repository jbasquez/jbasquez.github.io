import React from 'react';
import"../scss/style.css";

function ProjectCard(props) {
    return(
      <div className="card height">
        <div className="img-container">
          <a href={props.active}><img className="projectImage min" alt={props.name} src={props.image} /></a>
        </div>
        <div className="content">
          <ul className="noBullet">
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>About:</strong> {props.about}
            </li>
            <li>
              <strong>Active Link:</strong> <a className="contact" href={props.active}>Click Here</a>
              <a class="btn PrimaryBtn" href={props.active} target="_blank" rel="noopener noreferrer">Demo</a>
            </li>
            <li>
              <strong>Repo:</strong> <a className="contact" href={props.repo}>Click Here</a>
            </li>
          </ul>
        </div>
      </div>
    );
}
export default ProjectCard;