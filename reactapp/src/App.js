import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import Projects from './pages/projects'

function App() {
  return (
    <div className="App">
      <Header />
      <body>
      <Home />
      <Projects/>
      </body>
      <Footer />
    </div>
  );
}

export default App;
