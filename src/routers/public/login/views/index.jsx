import React, { useState, useEffect } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {loginOperation} from '../redux';
import TextField from '../../../../shared/components/textfield';
import {validationEmail} from '../../../../shared/utils/validation';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Login = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [toRedirect, setToRedirect] = useState(false);

  useEffect(() => {
    setValidEmail(!!email && validationEmail(email));
    setValidPassword(!!password);
  }, [email, password]);

  const onClick = async () => {
    await props.userLogin({email, password});
    setToRedirect(true);
  };

  if(toRedirect){
    return(
      <Redirect to='/home' />
    );
  }

  return (
    <Grid className={classes.root}>
      <Paper className={classes.paper}>
      <div className = {classes.background}/>
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
          <Button variant='contained' color='primary' disabled={!validEmail || !validPassword} onClick={onClick}>
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
    backgroundSize: 'cover',
    backgroundColor: '#003554',
  },

  background:{
    opacity: '0.8',
    backgroundColor: '#e0fbfc',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: '0',


  },

  gridContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    padding: '30px 100px',
    height: '470px',
    borderRadius: '10px',
    zIndex: '1',
  
  },

  paper: {
    maxWidth: '500px',
    justifyContent: 'center',
    margin: 'auto',
    borderRadius: '10px',
    position: 'relative',
    background: 'url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg)',
  },

  title: {
    color: '#003554',
    textTransform: 'uppercase',
  },
}));

const mapStateToProps = (state) => {
  return{
    email: state.register.email
  }
}

const mapDispatchToProps = {
  userLogin: (data) => loginOperation.userLogin(data)
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
