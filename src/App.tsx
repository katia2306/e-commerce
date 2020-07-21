import React, { PureComponent, Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import { auth } from './firebase/firebase';
import history from './history';
import Home from './pages/Home';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import { ROUTES } from './components/common/constRoutes';

interface IPrivateRoute {
  component: () => void;
  authed: boolean;
  exact: boolean;
  path: string;
}

const PrivateRoute = ({ component, authed, ...rest }: IPrivateRoute) => (
  <Route {...rest} render={(props) => (
    authed === true
      ? <Component {...props} />
      : <Redirect to={ROUTES.LOGIN} />
  )}
  />
);

class App extends PureComponent {
  render() {
    const authed = auth.currentUser;
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={ROUTES.SIGNUP} component={Signup} />
          <Route exact path={ROUTES.LOGIN} component={Login} />
          <PrivateRoute authed={!!authed} exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
