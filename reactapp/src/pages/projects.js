import ProjectCard from '../components/project';
import project from '../project.json';


function Projects() {
    return (
      <div className="projects">
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
  