import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { useForm, Controller } from 'react-hook-form';

import { makeStyles } from '@material-ui/core/styles';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('please enter a valid name').max(30, 'Too long!'),
    dryWeight: yup
        .number()
        .required('please enter a valid weight')
        .typeError('must be a number')
        .max(50, 'Too much coffee man, maybe slow down...')
        .positive()
        .integer(),
    grind: yup
        .number()
        .required('required field')
        .typeError('must be a number')
        .max(99, 'Exceeded maximum grind')
        .min(0, 'Exceeeded minimum grind')
        .integer(),
    weight: yup
        .number()
        .required('required field')
        .typeError('must be a number')
        .max(80, 'Too much coffee man, maybe slow down...')
        .positive()
        .integer(),
    notes: yup.string().max(75, "Sorry, that's too many notes!"),
});

const useStyles = makeStyles(() => ({
    weightPickers: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
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
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: '#ffff',
        border: '2px solid #000',
        boxShadow: 24,
        padding: '2rem',
    },
    modalCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
}));

export const defaultValues = {
    name: 'Old Brown Java',
    dryWeight: 18,
    grind: 3,
    weight: 36,
    notes: 'Slightly bitter',
    brewDate: new Date(Date.UTC(2021, 4, 15)),
};

export default function NewShot({ setBrewsList }) {
    const classes = useStyles();

    const { register, handleSubmit, control, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        handleFormOpen();
        console.clear();
        console.log({ data });
        data.brewDate = format(data.brewDate, 'dd-MM-yyyy');
        setBrewsList((old) => [...old, data]);
    };

    const [formOpen, setFormOpen] = React.useState(false);

    const [modalOpen, setModalOpen] = React.useState(false);

    const [selectedDate, setSelectedDate] = React.useState(new Date(Date.UTC(2021, 4, 15)));

    const [values, setValues] = React.useState({
        weight: '',
    });

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleFormOpen = () => {
        setFormOpen((previous) => !previous);
    };

    const handleModalOpen = () => {
        setModalOpen((previous) => !previous);
    };

    const clearData = () => {
        window.localStorage.clear();
        window.location.reload();
        handleModalOpen();
    };

    return (
        <div className={classes.buttons}>
            <Button className={classes.addButton} variant='contained' onClick={handleFormOpen}>
                New Shot
            </Button>
            <Button className={classes.deleteButton} variant='contained' onClick={handleModalOpen}>
                Delete Brews
            </Button>
            <Modal
                open={modalOpen}
                onClose={handleModalOpen}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box className={classes.modal}>
                    <div className={classes.modalCenter}>
                        <Typography id='modal-warning' variant='h6'>
                            Warning!
                        </Typography>
                        <Typography sx={{ mt: 1 }} id='modal-description'>
                            Are you sure you want to delete all shots?
                        </Typography>
                        <Typography sx={{ mt: 2 }} id='modal-buttons'>
                            <Button onClick={clearData}>Yes</Button>
                            <Button onClick={handleModalOpen}>No</Button>
                        </Typography>
                    </div>
                </Box>
            </Modal>
            <Dialog open={formOpen} onClose={handleFormOpen} aria-labelledby='form-dialog-title'>
                <DialogTitle id='form-dialog-title'>New Espresso Shot</DialogTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <TextField
                            className={classes.padding}
                            autoFocus
                            margin='dense'
                            inputRef={register({
                                maxLength: 30,
                            })}
                            defaultValue={defaultValues.name}
                            name='name'
                            id='name'
                            label='Name'
                            type='text'
                            fullWidth
                        />
                        <p className={classes.errorMessage}>{errors.name?.message}</p>
                        <div className={classes.weightPickers}>
                            <div className={classes.padding}>
                                <TextField
                                    id='standard-number'
                                    label='Dry Weight (g)'
                                    inputRef={register({
                                        required: true,
                                        maxLength: 2,
                                        min: 1,
                                        max: 30,
                                    })}
                                    name='dryWeight'
                                    defaultValue={defaultValues.dryWeight}
                                    type='number'
                                    pattern='^-?[0-9]\d*\.?\d*$'
                                    aria-describedby='outlined-weight-helper-text'
                                    variant='outlined'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <p className={classes.errorMessage}>{errors.dryWeight?.message}</p>
                            </div>
                            <TextField
                                id='standard-number'
                                label='Grind'
                                inputRef={register({
                                    required: true,
                                    maxLength: 2,
                                    min: 0,
                                    max: 30,
                                })}
                                name='grind'
                                defaultValue={defaultValues.grind}
                                type='number'
                                pattern='^-?[0-9]\d*\.?\d*$'
                                variant='outlined'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <p className={classes.errorMessage}>{errors.grind?.message}</p>
                        </div>
                        <div className={classes.finalWeight}>
                            <FormHelperText id='outlined-weight-helper-text'>Final Weight (g)</FormHelperText>
                            <Controller
                                as={<OutlinedInput />}
                                id='outlined-adornment-weight'
                                onChange={handleChange('weight')}
                                rules={{ required: true, maxLength: 2, min: 1, max: 80 }}
                                name='weight'
                                defaultValue={defaultValues.weight}
                                type='number'
                                control={control}
                                pattern='^-?[0-9]\d*\.?\d*$'
                                aria-describedby='outlined-weight-helper-text'
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                labelWidth={0}
                            />
                            <p className={classes.errorMessage}>{errors.weight?.message}</p>
                        </div>
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
                        <p className={classes.errorMessage}>{errors.notes?.message}</p>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify='space-around'>
                                <Controller
                                    as={<KeyboardDatePicker />}
                                    disableToolbar
                                    variant='inline'
                                    format='dd/MM/yyyy'
                                    margin='normal'
                                    name='brewDate'
                                    defaultValue={defaultValues.brewDate}
                                    control={control}
                                    id='date-picker-inline'
                                    label='Brewed on: '
                                    value={selectedDate}
                                    onChange={(date) => handleDateChange(date)}
                                    fullWidth
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <DialogActions>
                            <Button onClick={handleFormOpen} color='primary'>
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
