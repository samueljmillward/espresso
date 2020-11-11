import React from 'react';
import { Button, TextField, Grid, InputAdornment } from '@material-ui/core';
// import Hidden from '@material-ui/core/Hidden';
import { AccountCircle, LockRounded } from '@material-ui/icons';

import espresso from '../images/espresso.jpg';

const Login = () => {
  return (
    <div>
      <Grid container style={{ minheight: '100vh' }}>
        <Grid item xs={12} sm={6}>
          <img
            src={espresso}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="background"
          />
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justify="space-between"
          style={{ padding: 10 }}
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
            <Button variant="contained" style={{ marginBottom: '.2rem' }}>
              Log In
            </Button>
            <Button variant="outlined">Register</Button>
          </div>
          <Grid item>
            <Button variant="outlined">Forgot Password?</Button>
          </Grid>
          <div />
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
