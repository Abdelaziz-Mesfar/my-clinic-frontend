import React from 'react';
import ReactDOM from 'react-dom';

// import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons/css/boxicons.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '@mui/material'
import '@mui/x-date-pickers'
import 'react-health-card/lib/card.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);

