import React from 'react';
import Register from './routers/public/register/views';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Redirect, Switch } from 'react-router-dom';

function SelectRouter(authentication) {
  if (authentication) {
    return (
      <Switch>
        <Route exect path='/home' component={() => <div>Home</div>} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route exect path='/registro' component={Register} />
      <Route exect path='/login' component={() => <div>Login</div>} />
      <Redirect to='/login' />
    </Switch>
  );
}

function App() {
  const classes = useStyles();
  const routers = SelectRouter(false);
  return <Grid className={classes.App}>{routers}</Grid>;
}

const useStyles = makeStyles((tema) => ({
  App: {
    height: '100vh',
  },
}));

export default App;
