import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ProjectDataCardForBooking from '../cards/ProjectDataCardForBooking';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(66),
      height: theme.spacing(56),
      padding: theme.spacing(3)
    },
  },
  title: {
    fontSize: 20,
  },
  button: {
    margin: theme.spacing(2)
  }
}));

const BookingForm = (project) => {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <Paper variant="outlined" >
          <div className={classes.title}>Book Now</div>
          <div>From {project.project.price} USD/person</div>
          <div>
            <ProjectDataCardForBooking details={project}/>
            <ProjectDataCardForBooking details={project}/>
            <ProjectDataCardForBooking details={project}/>
          </div>
          <Button className={classes.button} disableElevation variant="outlined" color="secondary">See more possibilities</Button>
        </Paper>
      </div>
    </Container>
    )
};

export default BookingForm;