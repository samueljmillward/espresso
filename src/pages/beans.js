import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../elements/Navbar';
import BeanCard from '../elements/BeanCard';
import NewBean from '../elements/NewBean';
import useLocalStorage from '../hooks/useLocalStorage';

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

export default function Beans() {
  const classes = useStyles();

  const [beans, setBeansList] = useLocalStorage([], 'beans');

  return (
    <>
      {console.log(beans)}
      <Navbar />
      <Grid
        container
        spacing={4}
        className={classes.gridContainer}
        justify="center"
      >
        {beans.map((bean) => (
          <Grid item xs={12} sm={6} m={4}>
            <BeanCard key={bean} bean={bean} />
          </Grid>
        ))}
      </Grid>
      <NewBean setBeansList={setBeansList} className={classes.addButton} />
    </>
  );
}
