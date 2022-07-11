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
            <div>
                <p className={classes.col}>&copy;{new Date().getFullYear()} Espresso</p>
            </div>
        </div>
    );
};

export default Footer;
