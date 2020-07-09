import React from 'react';
import Register from './routers/public/register/views';
import Login from './routers/public/login/views';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Layout from './routers/private/layout/views';
import { Grid } from '@material-ui/core';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import theme from './theme';

const projectTheme = createMuiTheme(theme);

function SelectRouter(authentication) {
  if (authentication) {
    return (
      <Layout>
        <Switch>
          <Route exect path='/home' component={() => <div>Home</div>} />
        </Switch>
      </Layout>
    );
  }
  return (
    <Switch>
      <Route exect path='/registro' component={Register} />
      <Route exect path='/login' component={Login} />
      <Redirect to='/login' />
    </Switch>
  );
}

function App({ authentication }) {
  const classes = useStyles();
  const routers = SelectRouter(authentication);
  return <Grid className={classes.App}><ThemeProvider theme = {projectTheme}><CssBaseline/>{routers}</ThemeProvider></Grid>;
}

const useStyles = makeStyles((theme) => ({
  App: {
    height: '100vh',
  },
}));

const mapStateToProps = (state) => {
  return {
    authentication: state.login.authentication,
  };
};

export default connect(mapStateToProps, null)(App);
