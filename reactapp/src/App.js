import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import ContactCard from './pages/contactInfo';
import Header from './components/header';
import Home from './pages/home';
import Projects from './pages/projects'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path={["/"]} component={Home} />
            <Route exact path={["/projects"]} component={Projects} />
            <Route exact path={["/contactInfo"]}  component={ContactCard} />
            <Route exact path={["/error"]} component={Error} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
