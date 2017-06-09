import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from '../ui/App.jsx';
import Login from '../ui/Login.jsx';
import Register from '../ui/Register.jsx';

const browserHistory = createBrowserHistory();
export const renderRoutes = () => (
  <Router history={browserHistory} >
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/app" component={App}/>
      
    </div>
  </Router>
);