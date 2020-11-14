import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, TextField, Grid, InputAdornment } from '@material-ui/core';
import { AccountCircle, LockRounded } from '@material-ui/icons';
import { StyledApp } from '../styles/StyledApp';
import GlobalStyle from '../styles/GlobalStyle';
import { useForm } from 'react-hook-form';

import espresso from '../images/espresso.jpg';

const Login = () => {
  const { register, errors, handleSubmit } = useForm({ mode: 'onChange' });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <GlobalStyle />
      <StyledApp>
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
                  inputRef={register({ required: true, maxLength: 20 })}
                  name="Username"
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
                  inputRef={register({ required: true })}
                  name="Password"
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
                <Button
                  variant="outlined"
                  component={RouterLink}
                  to="/register"
                >
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
        </form>
      </StyledApp>
    </div>
  );
};

export default Login;
