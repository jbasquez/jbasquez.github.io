import React from 'react';
import"../scss/style.css";
import selfie from "../img/selfie.png";
import ProjectCard from '../components/project';
import project from '../project.json';
import Footer from '../components/footer';
import SocialMediaIcons from '../components/icons';
function Home(){
        return(
          <div>
            <div className="container">
              <div id="main-bio">

                <h1 className="textColor">Joe Basquez</h1>
                <div className="row">

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 bg textColor bottom">
                    <img src={selfie} className="img-fluid space" alt="selfie of website creator"/>
                    <h3>Bio:</h3>
                    <p>Highly motivated, hard working individual, with a passsion for front end and back end development. Do a good deed and learn something new will make sure no day is wasted.</p>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mainHome textColor">
                  <h3 className="center">Social Media</h3>
                    <SocialMediaIcons />
                    <h3>Projects</h3>
                    <div class="tooLong bottom">
                      <ProjectCard
                        id={project[0].id}
                        name={project[0].name}
                        about={project[0].about}
                        image={project[0].image}
                        active={project[0].active}
                        repo={project[0].repo}
                      />
                      <ProjectCard
                        id={project[3].id}
                        name={project[3].name}
                        about={project[3].about}
                        image={project[3].image}
                        active={project[3].active}
                        repo={project[3].repo}
                      />
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer/>
          </div>
        );
    }
export default Home;