import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    padding: theme.spacing(2),
    textAlign: 'left',
    fontSize: 14,
    color: theme.palette.text.primary,
  },
  hour: {
    fontSize: 10,
    lineHeight: 0,
    textAlign: 'left',
    paddingLeft: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  divider: {
    margin: theme.spacing(2),
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
}));

const ProjectDataCardForBooking = () => {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.flex}>
        <Grid item xs={6}>
          <div className={classes.content}>8 Mar, Mon</div>
          <div className={classes.hour}>5:00 - 6:00 PM</div>
        </Grid>
        <Grid item xs={6}>
          <Button  disableElevation variant="contained" color="secondary">Book</Button>
        </Grid>
      </Grid>
    </div>
    <Divider className={classes.divider} orientation='horizontal' />
    </>
  )
};

export default ProjectDataCardForBooking;