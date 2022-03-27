import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Patients from './pages/Patients';
import Profile from './pages/Profile';
import Registre from './pages/Registre';
import Technologies from './pages/Technologies';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/technologies' component={Technologies} />
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Registre} />
        <Route exact path='/patients' component={Patients} />
        <Route exact path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
