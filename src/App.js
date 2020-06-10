import React from 'react';
import Register from './routers/public/register/views'
import { Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

function App() {
  const classes = useStyles();
  return (
    <Grid className = {classes.App}>
      <Register nome = 'Ana'/>
    </Grid>
  );
}

const useStyles = makeStyles((tema) => ({
  App: {
      height: '100vh',
  
  },

}));

export default App;
