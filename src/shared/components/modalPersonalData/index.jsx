import React, { useState, useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Grid, Button, Dialog} from '@material-ui/core';
import TextField from '../textfield';
import DatePicker from '../datePicker';
import {validationEmail} from '../../utils/validation';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function ModalPersonalDataComponent({modalIsOpen, closeModal, initialData}) {
  const classes = useStyles();
  const [name, setName] = useState(initialData.name || '');
  const [birth, setBirth] = useState(new Date (initialData.birth));
  const [email, setEmail] = useState(initialData.email || '');
  const [password, setPassword] = useState(initialData.password || '');
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  useEffect(() => {
    setValidName(!!name);
    setValidEmail(!!email && validationEmail(email));
    setValidPassword(!!password);
  }, [name, email, password]);

  return (
    <div>
      <Dialog onClose={closeModal} aria-labelledby="customized-dialog-title" open={modalIsOpen}>
        <DialogTitle id="customized-dialog-title" onClose={closeModal}>
          Meus Dados
        </DialogTitle>
        <DialogContent dividers>
            <Grid content>
                <Grid item>
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
                </Grid>
                <Grid item>
                    <Grid item className={classes.dateInput}>
                        <DatePicker id='Birth' label='Data de Nascimento' value={birth} onChange={setBirth} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid content>
                <Grid item>
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
                </Grid>
                <Grid item>
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
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeModal} color="primary">
            Salvar alterações
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
    dateInput: {
      height: '90px',
    },
  }));



export default ModalPersonalDataComponent;