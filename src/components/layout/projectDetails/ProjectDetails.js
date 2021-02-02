import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import GroupIcon from '@material-ui/icons/Group';
import ForumIcon from '@material-ui/icons/Forum';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center', 
    color: theme.palette.text.secondary,
  },
  content: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    fontSize: 14,
  },
  features: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textSmall: {
    fontSize: 12,
    color: theme.palette.text.secondary,
  },
  textBigger: {
    fontSize: 14,
    color: theme.palette.text.primary,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: theme.palette.text.primary,
    fontWeight: 'bold',
  },

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
            <div className={classes.title}>{project.title}</div>
            <div className={classes.flex}>
              <p className={classes.textSmall}>Experience offered by</p>
              <p className={classes.textBigger}> {project.authorFirstName} {project.authorLastName} </p>
              <Avatar alt="Johnny Lozada" src="https://pbs.twimg.com/profile_images/1004869186089312258/BGYHhJOl_400x400.jpg" />
            </div> 
          </div>
          <Divider orientation='horizontal' />
          <Grid  container spacing={1} className={classes.root}>
          <Grid item xs={12} sm={6}>
              <Box className={classes.features}>
                <ScheduleIcon />
                <div className={classes.content}>{project.duration}</div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.features}>
                <AttachMoneyIcon />
                <div className={classes.content}>{project.price}</div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.features}>
                <GroupIcon />
                <div className={classes.content}>Perfect for group up to 6 people</div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box className={classes.features}>
                <ForumIcon />
                <div className={classes.content}>Languages: English, Spanish, Italian</div>
              </Box>
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