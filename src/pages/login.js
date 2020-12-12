import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Grid, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useForm } from 'react-hook-form';

import espresso from '../images/espresso.jpg';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const useStyles = makeStyles(() => ({
  errorMessage: {
    color: '#AC3232',
    margin: 0,
    fontSize: '16px',
  },
}));

const schema = yup.object().shape({
  username: yup.string().required('please enter a valid email address'),
  password: yup.string().required('please enter a valid password').min(8),
});

const Login = () => {
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
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container style={{ minheight: '100vh' }}>
          <Grid
            container
            item
            xs={12}
            sm={6}
            alignItems="center"
            direction="column"
            justify="space-between"
            style={{ padding: 40 }}
          >
            <div />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 400,
                minWidth: 300,
              }}
            >
              <Grid container justify="center">
                <h2 style={{ color: 'burlywood' }}>Espresso Tracker</h2>
              </Grid>
              <TextField
                inputRef={register({
                  required: true,
                  maxLength: 65,
                  pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                name="username"
                id="Username"
                label="Username"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
              <p className={classes.errorMessage}>{errors.username?.message}</p>
              <TextField
                inputRef={register({
                  required: true,
                })}
                name="password"
                id="Password"
                label="Password"
                type="password"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockRounded />
                    </InputAdornment>
                  ),
                }}
              />
              <p className={classes.errorMessage}>{errors.password?.message}</p>
              <div style={{ height: 20 }} />
              <Button
                type="submit"
                variant="contained"
                style={{ marginBottom: '.8rem' }}
              >
                Log In
              </Button>
              <Button variant="outlined" component={RouterLink} to="/register">
                Register
              </Button>
            </div>
            <Grid item>
              <Button variant="outlined">Forgot Password?</Button>
            </Grid>
            <div />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            display={{ xs: 'none', lg: 'block', xl: 'none' }}
          >
            <img
              src={espresso}
              style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
              alt="background"
            />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
