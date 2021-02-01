import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
  },
  content: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }
}));

const ProjectDetails = ({project}) => {
  const classes = useStyles();

  if (project) {
  return (
    <div className={classes.root}>
      <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <div>{project.title}</div>
            <div>{project.authorFirstName} {project.authorLastName}</div>
          </div>
          <Divider orientation='horizontal' />
          <Grid  container spacing={1} className={classes.root}>
            <Grid item xs={12} sm={6}>
              <div className={classes.paper}>xs=6 sm=3</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.paper}>xs=6 sm=3</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.paper}>{project.duration}</div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className={classes.paper}>{project.price}</div>
            </Grid>
          </Grid>
          <Divider orientation='horizontal' />
          <h6 className={classes.paper}>What we gonna do...</h6>
          <p className={classes.content}>
            {project.content}
          </p>
        </Grid>
       
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <form>
            Booking Form
            </form>
          </div>
        </Grid>
      </Grid>
      </div>
    </div>
  )} else {
    return (
      <div className='container center black-text'>Loading...</div>
    )
  }
};



export default ProjectDetails;