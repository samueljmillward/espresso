import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '25ch',
  },
  addButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '32px',
  },
}));

export default function NewBean() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2020-11-22T21:11:54')
  );
  const [open, setOpen, values, setValues] = React.useState({
    amount: '',
    weight: '',
    weightRange: '',
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.addButton}>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Bean
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Bean</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="origin"
            label="Origin"
            type="text"
            fullWidth
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                fullWidth
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="flavours"
                label="Flavours"
                type="text"
                fullWidth
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position="end">g</InputAdornment>}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Weight
            </FormHelperText>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
