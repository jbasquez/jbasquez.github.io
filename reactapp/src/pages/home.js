import React from 'react';
import"../scss/style.css";
import selfie from "../img/selfie.png";
import ProjectCard from '../components/project';
import project from '../project.json'
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
      <p>Highly motivated, hard working individual, with a passsion for front end and back end development</p>
    </div>

    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 mainHome">
      <h3>Activities</h3>
      <ul>
        <li>Rock climbing</li>
        <li>Software development</li>
        <li>MMA</li>
        <li>Stocks</li>
        <li>Motorcycles</li>
        <li>Video games</li>
      </ul>
      <h3>Projects</h3>
        <ProjectCard className="col-lg-6 col-md-6 col-sm-6 col-xs-12"
          id={project[0].id}
          name={project[0].name}
          about={project[0].about}
          image={project[0].image}
          active={project[0].active}
          repo={project[0].repo}
        />
          <div className="card">
            {/* <img src="css/img/travelBuddyImg.png" class="card-img-top" alt="project picture"/> */}
            <div className="card-body">
              <h5 className="card-title">Travel Buddy</h5>
              <p className="card-text">Helps the user find and book the cheapest flight and hotel to their chosen destination.</p>
            </div>
            <div className="card-body">
              <a href="https://kmh8827.github.io/project1-team2/" className="card-link">Click Here</a>
            </div>
          </div>
          <div className="card">
            {/* <img src="..." class="card-img-top" alt="project picture"/> */}
            <div className="card-body">
              <h5 className="card-title">Read Me Generator</h5>
              <p className="card-text">Creates a ReadMe file for project</p>
            </div>
            <div className="card-body">
              <a href="https://github.com/jbasquez/readMeGen" className="card-link">Click Here</a>
            </div>
          </div>
    </div>

  </div>
</section>
</div>
</div>
        );
    }
export default Home;