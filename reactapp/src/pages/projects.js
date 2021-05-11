import ProjectCard from '../components/project';
import project from '../project.json';


function Projects() {
    return (
      <div className="projects col-lg-6 col-md-6 col-sm-6 col-xs-12">
        <ProjectCard 
          id={project[0].id}
          name={project[0].name}
          about={project[0].about}
          image={project[2].image}
          active={project[0].active}
          repo={project[0].repo}
        />
      </div>
    );
  }
  
  export default Projects;
  