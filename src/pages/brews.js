import React, { useState, useEffect } from 'react';
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

  function useLocalBrewStorage(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const storage = localStorage.getItem(key);
      console.log(localStorage, storage);
      return storage !== null ? JSON.parse(storage) : defaultValue;
    });

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  }

  const [brews, setBrewsList] = useLocalBrewStorage([], 'brews');

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
            <BrewCard key={brews} brews={brews} />
          </Grid>
        ))}
      </Grid>
      <NewShot setBrewsList={setBrewsList} className={classes.addButton} />
    </>
  );
}
