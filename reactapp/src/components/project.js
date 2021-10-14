import React from 'react';
import"../scss/style.css";

function ProjectCard(props) {
    return(
      <div className="card height disc textColor">
        <div className="img-container">
          <a href={props.active}><img className="projectImage min" alt={props.name} src={props.image} /></a>
        </div>
        <div className="content">
          <ul className="noBullet">
            <li>
              <strong className="bl">Name:</strong> {props.name}
            </li>
            <li>
              <strong className="bl">About:</strong> {props.about}
            </li>
            <li>
              <strong className="bl">Skills:</strong> {props.skills}
            </li>
              <a className="btn PrimaryBtn contact" href={props.active} target="_blank" rel="noopener noreferrer">Demo</a>
              <a className="btn PrimaryBtn contact btnSpace" href={props.repo} target="_blank" rel="noopener noreferrer">Repo</a>
          </ul>
        </div>
      </div>
    );
}
export default ProjectCard;