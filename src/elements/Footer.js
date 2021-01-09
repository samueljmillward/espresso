import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: '#c46404',
    backgroundColor: '#642b09',
    paddingTop: '3em',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colSm: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 0,
    padding: '.2rem',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        {/* <div className={classes.row}>
          <div className={classes.col}>
            <h4>Espresso</h4>
            <ul className={classes.listUnstyled}>
              <li>342-420-6969</li>
              <li>123 Street</li>
              <li>Moscow, Russia</li>
            </ul>
          </div>
          <div className={classes.col}>
            <h4>Stuff</h4>
            <ul className={classes.listUnstyled}>
              <li>Contact Us</li>
              <li>Stuff</li>
              <li>Other Stuff</li>
            </ul>
          </div>
        </div> */}
        <div>
          <p className={classes.colSm}>
            &copy;{new Date().getFullYear()} Espresso
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
