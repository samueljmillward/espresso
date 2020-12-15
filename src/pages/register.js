import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required('please enter a valid email address'),
  password: yup.string().required('please enter a valid password').min(8),
  firstName: yup.string().required('required field'),
  lastName: yup.string().required('required field'),
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Espresso Tracker
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '24px',
  },
  avatar: {
    margin: theme.spacing(3),
    backgroundColor: 'burlywood',
  },
  form: {
    width: '100%',
    // marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#bb4d00',
  },
  title: {
    marginBottom: '2.2rem',
  },
  errorMessage: {
    color: '#AC3232',
    margin: 0,
    fontSize: '16px',
  },
}));

export default function Register() {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.clear();
    console.log({ data });
  };

  console.log({ errors });

  return (
    <Container className={classes.contaienr} component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography className={classes.title} component="h1" variant="h5">
          Sign up
        </Typography>
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                inputRef={register({
                  required: true,
                  maxLength: 50,
                  pattern: /^[A-Za-z]+$/i,
                })}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              <p className={classes.errorMessage}>
                {errors.firstName?.message}
              </p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                inputRef={register({
                  required: true,
                  maxLength: 50,
                  pattern: /^[A-Za-z]+$/i,
                })}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
              <p className={classes.errorMessage}>{errors.lastName?.message}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                  maxLength: 65,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <p className={classes.errorMessage}>{errors.email?.message}</p>
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                  minLength: {
                    value: 8,
                  },
                })}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <p className={classes.errorMessage}>{errors.password?.message}</p>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
