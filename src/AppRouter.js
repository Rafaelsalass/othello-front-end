import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import Board from './containers/Board';

export const AppRouter = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Board} />
        <Route render={() => (<p>not found</p>)}/>
      </Switch>
    </ConnectedRouter>
  );
};
