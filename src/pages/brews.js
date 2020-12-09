import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../elements/Navbar';
import BrewCard from '../elements/BrewCard';
import NewShot from '../elements/NewShot';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
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

export default function Brew() {
  const classes = useStyles();
  const [brews, setBrewsList] = useState([
    // {
    //   name: 'House Espresso',
    //   brewDate: '2020-11-28',
    //   dryWeight: '18',
    //   grind: '5',
    //   finalWeight: '36',
    //   notes: 'Shot started slow but finishes <32s',
    // },
    // {
    //   name: 'House Espresso',
    //   brewDate: '2020-11-28',
    //   dryWeight: '18',
    //   grind: '5',
    //   finalWeight: '36',
    //   notes: 'Shot started slow but finishes <32s',
    // },
    // {
    //   name: 'House Espresso',
    //   brewDate: '2020-11-28',
    //   dryWeight: '18',
    //   grind: '5',
    //   finalWeight: '36',
    //   notes: 'Shot started slow but finishes <32s',
    // },
    // {
    //   name: 'House Espresso',
    //   brewDate: '2020-11-28',
    //   dryWeight: '18',
    //   grind: '5',
    //   finalWeight: '36',
    //   notes: 'Shot started slow but finishes <32s',
    // },
  ]);

  return (
    <>
      {console.log(brews)}
      <Navbar />
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
        display="flex"
        flexDirection="row-reverse"
      >
        {brews.map((brews) => (
          <Grid item xs={12} sm={6} m={4}>
            <BrewCard brews={brews} />
          </Grid>
        ))}
      </Grid>
      <NewShot setBrewsList={setBrewsList} className={classes.addButton} />
    </>
  );
}
