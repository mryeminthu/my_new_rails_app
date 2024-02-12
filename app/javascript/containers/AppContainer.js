import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GreetingContainer from './GreetingContainer';
import Root from '../views/root/index';

const AppContainer = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Root} />
        <Route path="/greeting" component={GreetingContainer} />
      </Switch>
    </Router>
  );
};

export default AppContainer;
