import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Main from './containers/Main';
import Login from './containers/Login';

const App = props => {
  const { history } = props;

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Main} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;