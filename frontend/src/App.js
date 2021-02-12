import CampusSection from './components/CampusSection/CampusSection';
import CertificationSection from './components/CertificationSection/CertificationSection';
import CourseSection from './components/CourseSection/CourseSection';
import HeroSection from './components/HeroSection/HeroSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Floxusfeature from './components/FloxusUSP/Floxusfeature';
import Toolbar from './components/ToolBar/Toolbar';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Toolbar />
            <HeroSection />
            <Floxusfeature />
            <CourseSection />
            <CampusSection />
          </Route>
          <Route path="/course">
            <CertificationSection />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
