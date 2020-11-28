import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  addButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '32px',
  },
}));

export default function NewBean() {
  const classes = useStyles();

  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    handleClose();
    console.clear();
    console.log({ data });
  };

  const [open, setOpen] = React.useState(false);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2020-11-22T21:11:54')
  );

  const [values, setValues] = React.useState({
    weight: '',
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
            <TextField
              autoFocus
              margin="dense"
              inputRef={register}
              name="name"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              inputRef={register}
              name="origin"
              id="origin"
              label="Origin"
              type="text"
              fullWidth
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <Controller
                  as={<KeyboardDatePicker />}
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  name="roastDate"
                  control={control}
                  defaultValue="2020-11-28"
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
                  inputRef={register}
                  name="flavours"
                  id="flavours"
                  label="Flavours"
                  type="text"
                  fullWidth
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Controller
              as={<OutlinedInput />}
              id="outlined-adornment-weight"
              onChange={handleChange('weight')}
              name="weight"
              control={control}
              defaultValue="0"
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
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
