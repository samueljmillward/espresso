import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

// import beans from '../images/beans.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
  paddingTop: {
    paddingTop: 0,
  },
}));

export default function BeanCard({ bean }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Roasted on: {bean.roastDate}
        </Typography>
        <Typography variant="h5" component="h2">
          {bean.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {bean.origin}
        </Typography>
        <Container className={classes.container}>
          <Typography color="textSecondary">{bean.flavours}</Typography>
          <Typography color="textSecondary">{bean.weight}g</Typography>
        </Container>
      </CardContent>
      {/* <CardMedia
        component="img"
        style={{ height: '300px' }}
        src={beans}
        title="House Espresso"
      /> */}
      <CardActions className={classes.paddingTop}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
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
    </Card>
  );
}