import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
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
}));

export default function BeanCard() {
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
          Roasted on: 18th November.
        </Typography>
        <Typography variant="h5" component="h2">
          House Espresso
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Ethiopia
          <br />
          caramel, dark chocolate, toffee
        </Typography>
      </CardContent>
      {/* <CardMedia
        component="img"
        style={{ height: '300px' }}
        src={beans}
        title="House Espresso"
      /> */}
      <CardActions>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" component="p">
            Grind: 6
          </Typography>
          <Typography className={classes.pos} variant="body2" component="p">
            <br />
            Recipe
            <br />
            Dry: 18g
            <br />
            Final Weight: 36g
          </Typography>
          <Typography variant="body2" component="p">
            Our house espresso is a modern take on a classic. It’s a blend of
            two distinctive coffees, which combine to produce an espresso with a
            deep, rich chocolatey body, pronounced toffee sweetness, a complex
            fruity edge, and a hint of bittersweet cocoa at the finish. It’s
            well balanced and combines beautifully with milk, where it adds
            punchy caramel, smooth milk chocolate notes and gets even sweeter
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
