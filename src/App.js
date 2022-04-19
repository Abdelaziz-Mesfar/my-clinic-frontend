import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalLoading from './components/global loading/GlobalLoading';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Patients from './pages/Patients';
import Profile from './pages/Profile';
import Register from './pages/Register';
import { login } from './redux/actions/userActionCreators';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  if (token && user) {
    dispatch(login(JSON.parse(user), token))
  }
  return (
    <>
      <GlobalLoading />
      <Router>
        <Switch>
          {/* <Route exact path='/' component={Home} /> */}
          <PublicRoute exact path='/' component={Home} />
          {/* <Route exact path='/login' component={Login} /> */}
          <PublicRoute exact path='/login' component={Login} />
          {/* <Route exact path='/register' component={Registre} /> */}
          <PublicRoute exact path='/register' component={Register} />
          {/* <Route exact path='/dashboard' component={Dashboard} /> */}
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          {/* <Route exact path='/patients' component={Patients} /> */}
          <PrivateRoute exact path='/patients' component={Patients} />
          {/* <Route exact path='/profile' component={Profile} /> */}
          <PrivateRoute exact path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
