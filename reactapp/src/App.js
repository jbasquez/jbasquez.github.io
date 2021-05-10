import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import Projects from './pages/projects'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path={["/"]} component={Home} />
            <Route exact path={["/projects"]} component={Projects} />
            <Route exact path={["/error"]} component={Error} />
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
