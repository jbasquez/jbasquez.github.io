import React, { useEffect } from 'react';
import"../scss/style.css";
import selfie from "../img/selfie.png";
import ProjectCard from '../components/project';
import project from '../project.json';
import Footer from '../components/footer';
import SocialMediaIcons from '../components/icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home(){
      useEffect(() => {
        Aos.init({duration: 3000});
      }, []);
        return(
          <div>
            <div className="container">
              <div id="main-bio">

                <h1 data-aos="fade-down" className="textColor name">Joe Basquez</h1>
                <div className="row">

                  <div data-aos="fade-right" className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bg textColor bottom">
                    <img src={selfie} className="img-fluid space" alt="selfie of website creator"/>
                    <h3 className="headers">Bio:</h3>
                    <p className="textColor">Highly motivated, hard working individual, with a passsion for Software Development. I enjoy agile working environments, see every challenge as an opportunity to learn, great at reading and understanding documentation, and have many skills such as photo and video editing.</p>
                  </div>
                  <div data-aos="fade-right" className="col-lg-6 col-md-6 col-sm-12 col-xs-12 bg textColor bottom">
                    <h2>Random office quote</h2>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mainHome textColor">
                  <div data-aos="fade-left">
                  <h3 className="center headers">Social Media</h3>
                    <SocialMediaIcons />
                  </div>
                  <div data-aos="fade-left">
                    <h3 className="headers">Projects</h3>
                    <div className="tooLong bottom">
                      <ProjectCard
                        id={project[0].id}
                        name={project[0].name}
                        about={project[0].about}
                        skills={project[0].skills}
                        image={project[0].image}
                        active={project[0].active}
                        repo={project[0].repo}
                      />
                      <ProjectCard
                        id={project[3].id}
                        name={project[3].name}
                        about={project[3].about}
                        skills={project[0].skills}
                        image={project[3].image}
                        active={project[3].active}
                        repo={project[3].repo}
                      />
                    </div>
                    </div> 
                  </div>
                  <Footer/>
                </div>
              </div>
            </div>
          </div>
        );
    }
export default Home;