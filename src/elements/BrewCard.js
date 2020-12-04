import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

// import beans from '../images/beans.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  date: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  container: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  paddingBottom: {
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '.8rem',
  },
}));

export default function BrewCard({ brews }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Container className={classes.container}>
          <Typography variant="h5" component="h2">
            {brews.name}
          </Typography>
          <Typography className={classes.date} color="textSecondary">
            Brewed on: {brews.brewDate}
          </Typography>
        </Container>
        <Typography className={classes.paddingBottom} variant="caption">
          Espresso
        </Typography>
        <Container className={classes.paddingBottom}>
          <Typography variant="h6" color="textSecondary">
            Dry Weight: {brews.dryWeight}g
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Grind: {brews.grind}
          </Typography>
        </Container>
        <Container className={classes.container}>
          <Typography variant="h6" color="textSecondary">
            Final Weight: {brews.finalWeight}g
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Ratio: 1:1
          </Typography>
        </Container>
      </CardContent>
      {/* <CardMedia
        component="img"
        style={{ height: '300px' }}
        src={beans}
        title="House Espresso"
      /> */}
      <CardActions className={classes.paddingTop}>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body1">Notes:</Typography>
          <Typography variant="body1">{brews.notes}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
