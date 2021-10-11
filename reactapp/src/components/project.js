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
              <a class="btn PrimaryBtn contact" href={props.active} target="_blank" rel="noopener noreferrer">Demo</a>
              <a class="btn PrimaryBtn contact btnSpace" href={props.repo} target="_blank" rel="noopener noreferrer">Repo</a>
          </ul>
        </div>
      </div>
    );
}
export default ProjectCard;