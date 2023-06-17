import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import NewTicketPage from './NewTicketPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/new-ticket" component={NewTicketPage} />
      </Switch>
    </Router>
  );
};

export default App;
