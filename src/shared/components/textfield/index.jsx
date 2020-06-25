import React, { useState } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const TextFieldComponent = ({
  id,
  label,
  variant = 'outlined',
  helperText,
  error,
  type,
  required,
  onChange,
  value,
}) => {
  const classes = useStyles();
  const [focus, Setfocus] = useState(false);
  const errorBehavior = focus && error;
  return (
    <Grid item className={classes.root}>
      <TextField
        id={id}
        label={label}
        variant={variant}
        error={errorBehavior}
        required={required}
        onChange={onChange}
        value={value}
        type = {type}
        onBlur={() => {
          Setfocus(true);
        }}
      />
      <Typography variant='caption' color='error'>
        {errorBehavior && (helperText || 'Campo obrigatório.')}
      </Typography>
    </Grid>
  );
};

const useStyles = makeStyles((tema) => ({
  root: {
    height: '90px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
}));

export default TextFieldComponent;
