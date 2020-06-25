import React, { useState, useEffect } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LoginService from '../loginService';
import TextField from '../../../../shared/components/textfield';
import {validationEmail} from '../../../../shared/utils/validation';

const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    setValidEmail(!!email && validationEmail(email));
    setValidPassword(!!password);
  }, [email, password]);

  const onClick = async () => {
    await LoginService.userLogin({email, password});
  };

  return (
    <Grid className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction='column' className={classes.gridContainer}>
          <h1 className={classes.title}>Login</h1>
          <TextField
            id='email'
            key='email'
            label='Email'
            error = {!validEmail}
            helperText = {email && 'Email inválido'}
            required
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
          <TextField
            id='password'
            key='password'
            label='Senha'
            error = {!validPassword}
            type='password'
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          />
          <Button variant='outlined' disabled={!validEmail || !validPassword} onClick={onClick}>
            Entrar
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  gridContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    padding: '30px 100px',
    backgroundColor: '#bfd7ea',
  },

  paper: {
    maxWidth: '500px',
    justifyContent: 'center',
    margin: 'auto',
  },

  title: {
    color: '#0b3954',
  },
}));

export default Register;
