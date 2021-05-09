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
        id={1}
        name={project.name}
        about={project.about}
        image={project.image}
        active={project.active}
        repo={project.repo}
      />
      <Footer />
    </div>
  );
}

export default App;
