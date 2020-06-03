import React from "react"
import {Grid,TextField, Paper} from "@material-ui/core"
import {makeStyles} from '@material-ui/core/styles'

const Register = ({nome}) => {
    const classes = useStyles ();
    return (
        <Paper>
            <Grid container spacing = {2} direction = 'column' className = {classes.gridContainer}>
                <Grid item  >
                    <TextField id="outlined-basic" label="Nome Completo" variant="outlined" className = {classes.textfield}/>
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
                <Grid item>
                    <TextField id="outlined-basic" label="Data de Nascimento" variant="outlined" className = {classes.textfield}/>
                </Grid>
            </Grid>
        </Paper>
        
    );
}

const useStyles = makeStyles((tema) => ({
    gridContainer: {
        width: '100%',
    
    },

    textfield: {
        width: '100%',
    },

    paper: {
        hight: '600px',
        width: '500px',
        padding: tema.spacing(2),
        margin: 'auto',
    }
}));

export default Register;