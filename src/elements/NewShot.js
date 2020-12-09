import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
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
  padding: {
    paddingBottom: '1.2rem',
  },
  weightPickers: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  addButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '32px',
  },
}));

export default function NewShot({ setBrewsList }) {
  const classes = useStyles();

  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    handleClose();
    console.clear();
    console.log({ data });
    setBrewsList((old) => [...old, data]);
  };

  const [open, setOpen] = React.useState(true);

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
        New Shot
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Espresso Shot</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
            <TextField
              className={classes.padding}
              autoFocus
              margin="dense"
              inputRef={register({
                required: true,
                maxLength: 30,
              })}
              name="name"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
            <div className={classes.weightPickers}>
              <div className={classes.padding}>
                <TextField
                  id="standard-number"
                  label="Dry Weight (g)"
                  inputRef={register({
                    required: true,
                    maxLength: 2,
                    min: 1,
                    max: 30,
                  })}
                  name="dryWeight"
                  type="number"
                  pattern="^-?[0-9]\d*\.?\d*$"
                  aria-describedby="outlined-weight-helper-text"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <TextField
                id="standard-number"
                label="Grind"
                inputRef={register({
                  required: true,
                  maxLength: 2,
                  min: 0,
                  max: 30,
                })}
                name="grind"
                type="number"
                pattern="^-?[0-9]\d*\.?\d*$"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className={classes.finalWeight}>
              <FormHelperText id="outlined-weight-helper-text">
                Final Weight (g)
              </FormHelperText>
              <Controller
                as={<OutlinedInput />}
                id="outlined-adornment-weight"
                onChange={handleChange('weight')}
                rules={{ required: true, maxLength: 2, min: 1, max: 80 }}
                name="weight"
                defaultValue="0"
                type="number"
                control={control}
                pattern="^-?[0-9]\d*\.?\d*$"
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  'aria-label': 'weight',
                }}
                labelWidth={0}
              />
            </div>
            <TextField
              className={classes.padding}
              autoFocus
              margin="dense"
              name="notes"
              id="notes"
              label="Notes"
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
                  name="brewDate"
                  control={control}
                  defaultValue="2020-11-28"
                  id="date-picker-inline"
                  label="Brewed on: "
                  value={selectedDate}
                  onChange={handleDateChange}
                  fullWidth
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
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
