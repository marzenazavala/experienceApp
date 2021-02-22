import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const AboutHost = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>About host</div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Avatar className={classes.large} alt="Johnny Lozada" src="https://pbs.twimg.com/profile_images/1004869186089312258/BGYHhJOl_400x400.jpg" />
        <p>Your host is ...</p> 
        </Grid>
        <Grid item xs={12}>
        <Box className={classes.paper}>
            <p>
              I began studying astrology 16 years ago and I manage Aris Adonis 
              Astrology (www.arisadonis.com) where I offer private consultations, 
              as well as group and corporate astrology events & parties.
            </p>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutHost;