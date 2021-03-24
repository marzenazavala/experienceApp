import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Badges from '../../badges/Badges';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  about: {
    margin: theme.spacing(2),
  },
  title: {
    fontSize: '24px',
  },
  infoContainer:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.spacing(2)
  },
  info: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: theme.spacing(2)
    
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2),
  },
  host: {
    fontSize: '20px',
  },
  member: {
    fontSize: '14px',
    color: theme.palette.text.secondary,
  },
  veryfied: {
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  column: {
    display: 'flex',
    flexDirection:'column',
  },
  icon: {
    width: '18px',
    marginRight: theme.spacing(0.5)
  }
}));

const AboutHost = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant className={classes.title}>About your host</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.infoContainer}>
          <Grid item xs={12} sm={6} className={classes.info}>
            <Avatar className={classes.avatar} alt="host-avatar" src="https://pbs.twimg.com/profile_images/1004869186089312258/BGYHhJOl_400x400.jpg" />
            <Grid item className={classes.column}>
              <Typography variant className={classes.host}>Johnny Lozada</Typography>
              <Typography variant className={classes.member}>Member since 12th March 2021</Typography>
              <Grid className={classes.veryfied}>
                <VerifiedUserIcon color="secondary" className={classes.icon}/>
                <Typography variant>Veryfied identity</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Badges />
        </Grid>
      

        <Grid item xs={12} sm={12} className={classes.about}>
          <Typography variant >
            I began studying astrology 16 years ago and I manage Aris Adonis 
            Astrology (www.arisadonis.com) where I offer private consultations, 
            as well as group and corporate astrology events & parties.
            I began studying astrology 16 years ago and I manage Aris Adonis 
            Astrology (www.arisadonis.com) where I offer private consultations, 
            as well as group and corporate astrology events & parties.
            I began studying astrology 16 years ago and I manage Aris Adonis 
            Astrology (www.arisadonis.com) where I offer private consultations, 
            as well as group and corporate astrology events & parties.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutHost;