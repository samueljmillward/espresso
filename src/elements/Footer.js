import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    footer: {
        color: '#642b09',
        paddingTop: '1.5rem',
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    col: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <p className={classes.col}>&copy;{new Date().getFullYear()} Espresso</p>
        </div>
    );
};

export default Footer;
