import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import FlareIcon from '@material-ui/icons/Flare';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AlarmIcon from '@material-ui/icons/Alarm';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(4, 6),
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    border: '1px solid #f50057'
  },
  items: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    margin: theme.spacing(2),
  }
}));


const Badges = () => {
  const classes = useStyles();

  return (
    <Grid container xs={12} sm={6} className={classes.root}>
      <Paper elevation={0} className={classes.paper}>
        {/* <Typography variant className={classes.title}>Badges</Typography> */}
        <Grid item xs={12} className={classes.items}>
          <Grid item xs={6} sm={1}>
            <EmojiEmotionsIcon color="disabled"/>
          </Grid>
          <Grid item xs={6} sm={1}>
            <LocalActivityIcon color="secondary" />
          </Grid>
          <Grid item xs={6} sm={1}>
            <ImportantDevicesIcon  color="disabled"/>
          </Grid>
          <Grid item xs={6} sm={1}>
            <FlareIcon color="disabled" />
          </Grid>
          <Grid item xs={6} sm={1}>
            <AlarmIcon color="disabled" />
          </Grid>
          <Grid item xs={6} sm={1}>
            <CardGiftcardIcon color="secondary" />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
};

export default Badges;