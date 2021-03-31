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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
 
  title: {
    fontSize: 14,
    fontFamily: 'Lemonada'
  },
  details: {
    textAlign: 'left',
    fontSize: 11,
    fontFamily: 'Lemonada'
  },
  bold: {
    fontWeight: 'bold'
  },
  image: {
    minWidth: 200,
    minHeight: 150
  },
}));

const ProjectCard = ({project}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" elevation={0}>
         <CardMedia
           className={classes.image}
           image={project.fileUrl}
           title={project.title}
          />
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {project.title}
        </Typography>
        <Typography className={classes.details} color="textPrimary">
          <div>Duration: <span className={classes.bold}>{project.duration}</span></div>
          <div>Price: <span className={classes.bold}>{project.price}</span></div>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton color="secondary" aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="share with friends">
          <ShareIcon />
        </IconButton>
        <Button variant="outlined" color="secondary" disableElevation size="small">Details</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;