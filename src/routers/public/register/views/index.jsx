import React, { useState, useEffect } from 'react';
import { Grid, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {registerOperation} from '../redux';
import TextField from '../../../../shared/components/textfield';
import DatePicker from '../../../../shared/components/datePicker';
import {validationEmail} from '../../../../shared/utils/validation';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const Register = ({userRegister}) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [birth, setBirth] = useState(new Date('2014-08-18T21:11:54'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validPasswordRepeat, setValidPasswordRepeat] = useState(false);
  const [toRedirect, setToRedirect] = useState(false);

  useEffect(() => {
    setValidName(!!name);
    setValidEmail(!!email && validationEmail(email));
    setValidPassword(!!password);
    setValidPasswordRepeat((!!passwordRepeat)&&(passwordRepeat === password));
  }, [name, email, password, passwordRepeat]);

  const onClick = async () => {
    await userRegister({ name, email, birth, password });
    setToRedirect(true);
  };

  if(toRedirect){
    return(
      <Redirect to='/login' />
    )
  }

  return (
    <Grid className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction='column' className={classes.gridContainer}>
          <h1 className={classes.title}>Cadastro</h1>
          <TextField
            id='name'
            key='name'
            label='Nome Completo'
            error={!validName}
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
          <Grid item className={classes.dateInput}>
            <DatePicker id='Birth' label='Data de Nascimento' value={birth} onChange={setBirth} />
          </Grid>
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
          <TextField
            id='passwordRepeat'
            key='passwordRepeat'
            error = {!validPasswordRepeat}
            helperText={!validPasswordRepeat && password && 'Senhas diferentes'}
            label='Confirmação de Senha'
            type='password'
            required
            onChange={(event) => {
              setPasswordRepeat(event.target.value);
            }}
            value={passwordRepeat}
          />
          <Button variant='outlined' disabled={!validName || !validEmail || !validPassword || !validPasswordRepeat} onClick={onClick}>
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
  dateInput: {
    height: '90px',
  },
}));

const mapDispatchToProps = {
  userRegister: (data) => registerOperation.userRegister(data)
}

export default connect(null, mapDispatchToProps)(Register);
