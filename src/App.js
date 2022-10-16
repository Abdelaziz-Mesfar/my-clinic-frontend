import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalLoading from './components/global loading/GlobalLoading';
import CreateNewPatient from './pages/create-new-patient/CreateNewPatient';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import PatientDetails from './pages/patient-details/PatientDetails';
import Patients from './pages/patients/Patients';
import Profile from './pages/profile/Profile';
import Register from './pages/Register/Register';
import UpdatePatient from './pages/update-patient/UpdatePatient';
import { login } from './redux/actions/userActionCreators';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import AccountConfirmation from './pages/account-confirmation/AccountConfirmation';

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
          <PublicRoute exact path='/' component={Home} />
          <PublicRoute exact path='/login' component={Login} />
          <PublicRoute exact path='/register' component={Register} />
          <PublicRoute exact path='/:id/verify/:token' component={AccountConfirmation} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/patients' component={Patients} />
          <PrivateRoute exact path='/new-patient' component={CreateNewPatient} />
          <PrivateRoute exact path='/patients/:id' component={PatientDetails} />
          <PrivateRoute exact path='/update-patient/:id' component={UpdatePatient} />
          <PrivateRoute exact path='/profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
