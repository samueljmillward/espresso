import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../elements/Navbar';
import BeanCard from '../elements/Card';
import NewBean from '../elements/NewBean';

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

  const [beans, setBeansList] = useState([
    {
      name: 'bean1',
      roastDate: '2020-11-28',
      origin: 'Ethiopia',
      flavours: 'caramel, bergamot, clementine',
      weight: '250',
    },
    {
      name: 'bean1',
      roastDate: '2020-11-28',
      origin: 'Ethiopia',
      flavours: 'caramel, bergamot, clementine',
      weight: '250',
    },
    {
      name: 'bean1',
      roastDate: '2020-11-28',
      origin: 'Ethiopia',
      flavours: 'caramel, bergamot, clementine',
      weight: '250',
    },
    {
      name: 'bean1',
      roastDate: '2020-11-28',
      origin: 'Ethiopia',
      flavours: 'caramel, bergamot, clementine',
      weight: '250',
    },
  ]);

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
            <BeanCard bean={bean} />
          </Grid>
        ))}
      </Grid>
      <NewBean setBeansList={setBeansList} className={classes.addButton} />
    </>
  );
}
