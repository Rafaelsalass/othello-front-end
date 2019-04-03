import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import MainContainer from './containers/MainContainer';

export const AppRouter = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={MainContainer} />
        <Route render={() => (<p>not found</p>)}/>
      </Switch>
    </ConnectedRouter>
  );
};
