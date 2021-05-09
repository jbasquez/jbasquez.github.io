import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import ProjectCard from './components/project';
import project from './project.json';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ProjectCard 
        id={project[0].id}
        name={project[0].name}
        about={project[0].about}
        image={project[0].image}
        active={project[0].active}
        repo={project[0].repo}
      />
      <Footer />
    </div>
  );
}

export default App;
