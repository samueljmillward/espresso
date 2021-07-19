import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('please enter a valid name').max(30, 'Too long!'),
  origin: yup.string().required('required field').max(30, 'Too long!'),
  flavours: yup.string().required('required field').max(50, 'Too long!'),
  weight: yup
    .number()
    .required('please enter a valid weight')
    .typeError('must be a number')
    .max(9999, "Sorry, that's too many beans for us!")
    .positive()
    .integer(),
});

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '32px',
  },
  errorMessage: {
    color: '#AC3232',
    fontSize: '16px',
  },
  addButton: {
    backgroundColor: '#303f9f',
    marginRight: '5px',
    color: '#fff',
  },
  deleteButton: {
    backgroundColor: '#AC3232',
    color: '#fff',
  },
}));

export const defaultValues = {
  name: 'Old Brown Java',
  origin: 'Brazil',
  weight: 250,
  roastDate: new Date(),
  flavours: 'smokey, brown sugar',
  notes: 'Peak flavour at 1 week',
};

export default function NewBean({ setBeansList }) {
  const classes = useStyles();

  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    handleClose();
    console.clear();
    console.log({ data });
    data.roastDate = format(data.roastDate, 'dd-MM-yyyy');
    setBeansList((old) => [...old, data]);
  };

  const [open, setOpen] = React.useState(false);

  const [selectedDate, setSelectedDate] = React.useState(new Date());

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

  const clearData = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={classes.buttons}>
      <Button
        className={classes.addButton}
        variant='contained'
        onClick={handleClickOpen}
      >
        Add Bean
      </Button>
      <Button
        className={classes.deleteButton}
        variant='contained'
        onClick={clearData}
      >
        Delete Beans
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>New Bean</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              inputRef={register}
              defaultValue={defaultValues.name}
              name='name'
              id='name'
              label='Name'
              type='text'
              fullWidth
            />
            <p className={classes.errorMessage}>{errors.name?.message}</p>
            <TextField
              autoFocus
              margin='dense'
              inputRef={register}
              defaultValue={defaultValues.origin}
              name='origin'
              id='origin'
              label='Origin'
              type='text'
              fullWidth
            />
            <p className={classes.errorMessage}>{errors.origin?.message}</p>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify='space-around'>
                <Controller
                  as={<KeyboardDatePicker />}
                  disableToolbar
                  variant='inline'
                  format='dd/MM/yyyy'
                  margin='normal'
                  name='roastDate'
                  defaultValue={defaultValues.roastDate}
                  control={control}
                  id='date-picker-inline'
                  label='Roast Date:'
                  value={selectedDate}
                  onChange={handleDateChange}
                  fullWidth
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                <TextField
                  autoFocus
                  margin='dense'
                  inputRef={register}
                  name='flavours'
                  defaultValue={defaultValues.flavours}
                  id='flavours'
                  label='Flavours'
                  type='text'
                  fullWidth
                />
                <p className={classes.errorMessage}>
                  {errors.flavours?.message}
                </p>
              </Grid>
            </MuiPickersUtilsProvider>
            <FormHelperText id='outlined-weight-helper-text'>
              Weight
            </FormHelperText>
            <Controller
              as={<OutlinedInput />}
              id='outlined-adornment-weight'
              onChange={handleChange('weight')}
              name='weight'
              control={control}
              defaultValue={defaultValues.weight}
              endAdornment={<InputAdornment position='end'>g</InputAdornment>}
              aria-describedby='outlined-weight-helper-text'
              inputProps={{
                'aria-label': 'weight',
              }}
              labelWidth={0}
            />
            <p className={classes.errorMessage}>{errors.weight?.message}</p>
            <TextField
              className={classes.padding}
              autoFocus
              margin='dense'
              inputRef={register}
              name='notes'
              defaultValue={defaultValues.notes}
              id='notes'
              label='Notes'
              type='text'
              fullWidth
            />
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Cancel
              </Button>
              <Button type='submit' color='primary'>
                Submit
              </Button>
            </DialogActions>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
