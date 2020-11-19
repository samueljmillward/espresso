import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import beans from '../images/beans.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    minWidth: 100,
    background: 'burlywood',
  },
  media: {
    height: 140,
    paddingTop: '56.25%', // 16:9
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
  avatar: {
    backgroundColor: 'burlywood',
  },
}));

export default function BeanCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="bean" className={classes.avatar}>
            Beans
          </Avatar>
        }
        title="House Espresso"
        subheader="Roasted on: September 14"
      />
      <CardMedia
        component="img"
        style={{ height: '300px' }}
        src={beans}
        title="House Espresso"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing>
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
          <Typography paragraph>
            Our house espresso is a modern take on a classic. It’s a blend of
            two distinctive coffees, which combine to produce an espresso with a
            deep, rich chocolatey body, pronounced toffee sweetness, a complex
            fruity edge, and a hint of bittersweet cocoa at the finish. It’s
            well balanced and combines beautifully with milk, where it adds
            punchy caramel, smooth milk chocolate notes and gets even sweeter.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
