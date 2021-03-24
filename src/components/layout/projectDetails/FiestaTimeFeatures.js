import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as ConnectionIcon} from '../../../assets/icons/connection.svg';
import {ReactComponent as EmotionIcon} from '../../../assets/icons/emotions.svg';
import {ReactComponent as GiftIcon} from '../../../assets/icons/gift.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  grid: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: '24px',

  },
  features: {
    padding: theme.spacing(3),
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: '150px',
    width: '150px',
    marginRight: theme.spacing(1)
  }
}));

const FiestaTimeFeatures = () => {
  const classes = useStyles();

  return (
    <main className={classes.root}>
    <Typography variant className={classes.title}>FiestaTime Features</Typography>
    <Grid container className={classes.grid}>
      
      <Grid xs={12} sm={4} className={classes.features}>
        <GiftIcon className={classes.icon}/>
        <Typography variant>
          Lorem ipsum dolor sin amet. Lorem ipsum dolor sin amet lorem ipsum dolor. Sin amet.
        </Typography>
      </Grid>
      <Grid xs={12} sm={4} className={classes.features}>
        <EmotionIcon className={classes.icon}/>
        <Typography variant>
        Lorem ipsum dolor sin amet. Lorem ipsum dolor sin amet lorem ipsum dolor. Sin amet.
        </Typography>
      </Grid>
      <Grid xs={12} sm={4} className={classes.features}>
        <ConnectionIcon  className={classes.icon}/>
        <Typography variant>
        Lorem ipsum dolor sin amet. Lorem ipsum dolor sin amet lorem ipsum dolor. Sin amet.
        </Typography>
      </Grid>
    </Grid>
    </main>
  )
};

export default FiestaTimeFeatures;