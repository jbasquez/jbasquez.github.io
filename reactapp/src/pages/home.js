import React from 'react';
import"../scss/style.css";
import selfie from "../img/selfie.png";
import ProjectCard from '../components/project';
import project from '../project.json';
import Footer from '../components/footer';
function Home(){
        return(
<div>
<div className="container">
<section id="main-bio">

  <h2>Joe Basquez</h2>
  <div className="row">

    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
      <img src={selfie} className="img-fluid" alt="Responsive image"/>
      <h3>Bio:</h3>
      <p>Highly motivated, hard working individual, with a passsion for front end and back end development. Do a good deed and learn something new will make sure no day is wasted.</p>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mainHome">
      <h3>Activities</h3>
      <ul className="noBullet">
        <li>Rock climbing</li>
        <li>Software development</li>
        <li>MMA</li>
        <li>Stocks</li>
        <li>Motorcycles</li>
        <li>Video games</li>
      </ul>
      <h3>Projects</h3>
      <div class="tooLong">
        <ProjectCard
          id={project[0].id}
          name={project[0].name}
          about={project[0].about}
          image={project[0].image}
          active={project[0].active}
          repo={project[0].repo}
        />
        <ProjectCard
          id={project[1].id}
          name={project[1].name}
          about={project[1].about}
          image={project[1].image}
          active={project[1].active}
          repo={project[1].repo}
        />
        </div>
    </div>

  </div>
</section>
</div>
          <Footer/>
</div>
        );
    }
export default Home;