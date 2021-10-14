import ProjectCard from '../components/project';
import project from '../project.json';
import "../scss/style.css";
import Footer from '../components/footer';
function Projects() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ProjectCard 
              id={project[0].id}
              name={project[0].name}
              about={project[0].about}
              skills={project[0].skills}
              image={project[0].image}
              active={project[0].active}
              repo={project[0].repo}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ProjectCard 
              id={project[1].id}
              name={project[1].name}
              about={project[1].about}
              skills={project[1].skills}
              image={project[1].image}
              active={project[1].active}
              repo={project[1].repo}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ProjectCard 
              id={project[2].id}
              name={project[2].name}
              about={project[2].about}
              skills={project[2].skills}
              image={project[2].image}
              active={project[2].active}
              repo={project[2].repo}
            />
          </div>
        </div>
          <div className="row bottom">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <ProjectCard 
                id={project[3].id}
                name={project[3].name}
                about={project[3].about}
                image={project[3].image}
                active={project[3].active}
                repo={project[3].repo}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <ProjectCard 
                id={project[4].id}
                name={project[4].name}
                about={project[4].about}
                image={project[4].image}
                active={project[4].active}
                repo={project[4].repo}
              />
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <ProjectCard 
                id={project[5].id}
                name={project[5].name}
                about={project[5].about}
                image={project[5].image}
                active={project[5].active}
                repo={project[5].repo}
              />
            </div>
          </div>
        <Footer />
      </div>
    );
  }
  
  export default Projects;
  