import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../elements/Navbar';
import BrewCard from '../elements/BrewCard';
import NewShot from '../elements/NewShot';
import useLocalStorage from '../hooks/useLocalStorage';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
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

  const [brews, setBrewsList] = useLocalStorage([], 'brews');

  const reversedBrews = brews.slice().reverse();

  return (
    <>
      {console.log(brews)}
      <Navbar />
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {reversedBrews.map((reversedBrews) => (
          <Grid item xs={12} sm={6} m={4}>
            <BrewCard key={reversedBrews} brews={reversedBrews} />
          </Grid>
        ))}
      </Grid>
      <NewShot setBrewsList={setBrewsList} className={classes.addButton} />
    </>
  );
}
