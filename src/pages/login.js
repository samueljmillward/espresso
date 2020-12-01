import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Grid, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { useForm } from 'react-hook-form';

import espresso from '../images/espresso.jpg';

const Login = () => {
  const { register, handleSubmit } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    console.clear();
    console.log({ data });
  };

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
              <TextField
                inputRef={register({
                  required: true,
                  minLength: {
                    value: 8,
                  },
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
