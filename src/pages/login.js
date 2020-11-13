import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Grid, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { StyledApp } from '../styles/StyledApp';
import GlobalStyle from '../styles/GlobalStyle';

import espresso from '../images/espresso.jpg';

const Login = () => {
  return (
    <div>
      <GlobalStyle />
      <StyledApp>
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
              <Button variant="contained" style={{ marginBottom: '.8rem' }}>
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
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              alt="background"
            />
          </Grid>
        </Grid>
      </StyledApp>
    </div>
  );
};

export default Login;
