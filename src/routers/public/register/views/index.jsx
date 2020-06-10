import React, {useState, useEffect} from "react"
import {Grid,TextField, Paper, shadows, Button} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'
import RegisterService from '../registroService'

const Register = ({nome}) => {
    const classes = useStyles ();
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
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
                    <Grid item>
                        <TextField id="outlined-basic" label="Nome Completo" variant="outlined" required onChange={(event)=>{setName(event.target.value)}} value = {name}/>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" label="Data de Nascimento" variant="outlined" onChange={(event)=>{setBirth(event.target.value)}} value = {birth} />
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" label="Email" variant="outlined" required onChange={(event)=>{setEmail(event.target.value)}} value = {email}/>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" label="Senha" variant="outlined" type="password" required onChange={(event)=>{setPassword(event.target.value)}} value = {password}/>
                    </Grid>
                    <Grid item>
                        <TextField id="outlined-basic" label="Confirmação de Senha" variant="outlined" type="password" required onChange={(event)=>{setPasswordRepeat(event.target.value)}} value = {passwordRepeat}/>
                    </Grid>
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