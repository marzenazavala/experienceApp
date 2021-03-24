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
import BookingForm from '../../form/BookingForm';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center', 
    color: theme.palette.text.primary,
  },
  content: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.primary,
    fontSize: 14,
  },
  features: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textSmall: {
    fontSize: 12,
    color: theme.palette.text.primary,
  },
  textBigger: {
    fontSize: 20,
    color: theme.palette.text.primary,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: theme.palette.text.primary,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
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
              <p className={classes.textSmall}>hosted by</p>
              <p className={classes.textBigger}> {project.authorFirstName} {project.authorLastName} </p>
              <p className={classes.textSmall}>from <span>Puerto Rico</span></p>
              <Avatar className={classes.large} alt="host-avatar" src="https://pbs.twimg.com/profile_images/1004869186089312258/BGYHhJOl_400x400.jpg" />
            </div> 
          </div>
          <Divider orientation='horizontal' />
          <Grid  container spacing={0} className={classes.root}>
            <Grid item xs={12} sm={6}>
                <Box className={classes.features}>
                  <ScheduleIcon />
                  <div className={classes.content}>{project.duration}</div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className={classes.features}>
                  <AttachMoneyIcon />
                  <div className={classes.content}>{project.price} USD</div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className={classes.features}>
                  <GroupIcon />
                  <div className={classes.content}>Group up to {project.group} people</div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box className={classes.features}>
                  <ForumIcon />
                  <div className={classes.content}>Languages: {project.language}</div>
                </Box>
              </Grid>
            </Grid>
            <Divider orientation='horizontal' />
            <h6 className={classes.paper}>What we gonna do...</h6>
            <p className={classes.content}>
              {project.description}
            </p>
          </Grid>
       
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
              <BookingForm project={project} />
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