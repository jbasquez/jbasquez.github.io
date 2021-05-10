import logo from './logo.svg';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import ProjectCard from './components/project';
import project from './project.json';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Header />
      <body>
        <Home />
      <ProjectCard 
        id={project[0].id}
        name={project[0].name}
        about={project[0].about}
        image={project[2].image}
        active={project[0].active}
        repo={project[0].repo}
      />
      </body>
      <Footer />
    </div>
  );
}

export default App;
