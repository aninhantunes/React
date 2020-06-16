import React, {useState, useEffect} from "react"
import {Grid, Paper, Button} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'
import RegisterService from '../registroService'
import TextField from '../../../../shared/components/textfield'
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';


const Register = ({nome}) => {
    const classes = useStyles ();
    const [name, setName] = useState('');
    const [birth, setBirth] = useState(new Date('2014-08-18T21:11:54'));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [validation, setValidation] = useState(false);
    useEffect(()=>{
        setValidation(!!name && !!email && !!password && !!passwordRepeat);
    },[name,email,password,passwordRepeat]);

    const onClick = async ()=>{
        await RegisterService.userRegister({name,email,birth,password});
    }
    
    return (
        <Grid className = {classes.root}>
            <Paper boxShadow={2} className = {classes.paper}>
                <Grid container spacing = {2} direction = 'column' className = {classes.gridContainer}>
                    <h1 className = {classes.title}>Cadastro</h1>
                        <TextField id="name" key = 'name' label="Nome Completo" helperText="Campo obrigatório." error = {!name} 
                        required onChange={(event)=>{setName(event.target.value)}} value = {name}/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                         <KeyboardDatePicker
                            margin="normal"
                            id="Birth"
                            label="Data de Nascimento"
                            format="MM/dd/yyyy"
                            value={birth}
                            onChange={(data)=>{setBirth(data);console.log(data);
                            }}
                            KeyboardButtonProps={{
                            'aria-label': 'change date',
                            }}/>
                        </MuiPickersUtilsProvider>
                        <TextField id="email" key = 'email' label="Email" required 
                        onChange={(event)=>{setEmail(event.target.value)}} value = {email}/>
                        <TextField id="password" key = 'password' label="Senha" type="password" 
                        required onChange={(event)=>{setPassword(event.target.value)}} value = {password}/>
                        <TextField id="passwordRepeat" key = 'passwordRepeat' error = {password != passwordRepeat}
                         helperText = {(password != passwordRepeat) && (password) && "Senhas diferentes"} label="Confirmação de Senha" type="password" required 
                        onChange={(event)=>{setPasswordRepeat(event.target.value)}} value = {passwordRepeat}/>
                    <Button variant="outlined" disabled = {!validation} onClick = {onClick}>
                        Entrar
                    </Button>
                </Grid>
            </Paper>
        </Grid>
        
    );
}

const useStyles = makeStyles((tema) => ({
    root:{
        width:'100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
    },

    gridContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        padding: '100px',
        backgroundColor: '#bfd7ea',
        '& input':{
            width: '100%',
        }
    
    },

    paper: {
        maxWidth: '500px',
        justifyContent: 'center',
        margin: 'auto',

    },

    title:{
        color: '#0b3954'

    }

}));

export default Register;