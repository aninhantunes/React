import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';

const DatePicker = ({ label, id, value, onChange }) => {
  const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.root}
        margin='normal'
        id={id}
        label={label}
        format='MM/dd/yyyy'
        value={value}
        variant='inline'
        inputVariant='outlined'
        onChange={onChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

const useStyles = makeStyles({
  root: {
    margin: '0px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

export default DatePicker;
