import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from '../elements/Navbar';
import BeanCard from '../elements/BeanCard';
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
      name: 'House Espresso',
      roastDate: '2020-11-28',
      origin: 'Blend',
      flavours: 'Caramel, Bergamot, Clementine',
      weight: '250',
    },
    {
      name: 'Sitio Da Torre',
      roastDate: '2020-11-28',
      origin: 'Brazil',
      flavours: 'Caramel, Bergamot, Clementine',
      weight: '250',
    },
    {
      name: 'Pacamura',
      roastDate: '2020-11-28',
      origin: 'Ethiopia',
      flavours: 'Caramel, Bergamot, Clementine',
      weight: '250',
    },
    {
      name: 'San Lorenzo',
      roastDate: '2020-11-28',
      origin: 'Guatemala',
      flavours: 'Caramel, Bergamot, Clementine',
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
