import ProjectCard from '../components/project';
import project from '../project.json';
import "../scss/style.css";

function Projects() {
    return (
      <div>
        <div className="card col-md-4 col-sm-12 col-xs-12 container-fluid">
          <div>
        <ProjectCard 
          id={project[0].id}
          name={project[0].name}
          about={project[0].about}
          image={project[2].image}
          active={project[0].active}
          repo={project[0].repo}
        />
  </div>
  <div>
        <ProjectCard 
          id={project[0].id}
          name={project[0].name}
          about={project[0].about}
          image={project[2].image}
          active={project[0].active}
          repo={project[0].repo}
        />
        </div>
        </div>
        <div className="card col-md-4 col-sm-12 col-xs-12 container-fluid">
        <ProjectCard 
          id={project[0].id}
          name={project[0].name}
          about={project[0].about}
          image={project[2].image}
          active={project[0].active}
          repo={project[0].repo}
        />
        </div>
        <div className="card col-md-4 col-sm-12 col-xs-12 container-fluid">
        <ProjectCard 
          id={project[0].id}
          name={project[0].name}
          about={project[0].about}
          image={project[2].image}
          active={project[0].active}
          repo={project[0].repo}
        />
        </div>
      </div>
    );
  }
  
  export default Projects;
  