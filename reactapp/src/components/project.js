import React from 'react';
import"../scss/style.css";

function ProjectCard(props) {
    return(
    <div className="card">
      <div className="img-container">
        <img className="projectImage" alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>About:</strong> {props.about}
          </li>
          <li>
            <strong>Active Link:</strong> {props.active}
          </li>
          <li>
            <strong>Repo:</strong> {props.repo}
          </li>
        </ul>
      </div>
    </div>
    );
}
export default ProjectCard;