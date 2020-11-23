import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Navbar from '../elements/Navbar';
import BeanCard from '../elements/Card';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingTop: '40px',
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  addButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '32px',
  },
}));

export default function Beans() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        <Grid item xs={12} sm={6} m={4}>
          <BeanCard />
        </Grid>
        <Grid item xs={12} sm={6} m={4}>
          <BeanCard />
        </Grid>
        <Grid item xs={12} sm={6} m={4}>
          <BeanCard />
        </Grid>
        <Grid item xs={12} sm={6} m={4}>
          <BeanCard />
        </Grid>
      </Grid>
      <AddButton />
    </>
  );
}

export function AddButton() {
  const classes = useStyles();

  return (
    <div className={classes.addButton}>
      <Button variant="contained">New Bean</Button>
    </div>
  );
}
