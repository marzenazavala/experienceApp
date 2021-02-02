import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxHeight: 260,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Lemonada',
  },
  subtitle: {
    fontSize: 12,
    fontFamily: 'Lemonada',
  },
  image: {
    minWidth: 100,
    minHeight: 200
  },
});

const CollectionCard = ({collection}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.image}
        image={collection.img}
        title={collection.title}
      >
        <IconButton color="secondary" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardMedia>
      <CardContent className={classes.content}>
        <Typography className={classes.title} color="textPrimary">
          {collection.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CollectionCard;