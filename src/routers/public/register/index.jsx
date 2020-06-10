import React from "react"
import {Grid,TextField, Paper, shadows, Button} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'

const Register = ({nome}) => {
    const classes = useStyles ();
    return (
        <Paper boxShadow={2} className = {classes.paper}>
            <Grid container spacing = {2} direction = 'column' className = {classes.gridContainer}>
                <h1 className = {classes.title}>Login</h1>
                <Grid item>
                    <TextField id="outlined-basic" label="Nome Completo" variant="outlined" className = {classes.textfield}/>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Data de Nascimento" variant="outlined" className = {classes.textfield}/>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Email" variant="outlined" className = {classes.textfield}/>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Senha" variant="outlined" type="password" className = {classes.textfield}/>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Confirmação de Senha" variant="outlined" type="password" className = {classes.textfield}/>
                </Grid>
                <Button variant="outlined">
                    Entrar
                </Button>
            </Grid>
        </Paper>
        
    );
}

const useStyles = makeStyles((tema) => ({
    gridContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        padding: '100px',
        backgroundColor: '#bfd7ea',
    
    },

    textfield: {
        width: '100%',
    },

    paper: {
        hight: '300px',
        width: '500px',
        justifyContent: 'center',
        margin: 'auto',

    },

    title:{
        color: '#0b3954'

    }

}));

export default Register;