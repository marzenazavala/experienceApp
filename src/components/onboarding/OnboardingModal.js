import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as GiveIcon } from '../../assets/icons/007-smile.svg';
import { ReactComponent as FunIcon} from '../../assets/icons/007-smile.svg';
import { ReactComponent as PostedIcon} from '../../assets/icons/cocktail.svg';
import { ReactComponent as GiftIcon} from '../../assets/icons/cocktail.svg';
import OnboardingStepper from './OnboardingStepper';


const useStyles = makeStyles((theme) => ({
      paper: {
        width: '100vw',
        height: '100vh',
        [theme.breakpoints.up('sm')]:{
          width: '60vw',
          height: '80vh',
        },
        backgroundColor: theme.palette.background.paper,
        borderRadius: '5px',
        boxShadow: theme.shadows[5],
        
      },
      image: {
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('sm')]:{
          backgroundColor: 'rgb(255,235,59,0.08)',
        },
        backgroundColor: '#fff',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      icons: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
      },
      padding: {
        height: '40%',
        padding: theme.spacing(2),
      },
      textSide: {
        maxHeight: '50vh',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]:{
          justifyContent: 'space-between', 
          padding: theme.spacing(5),
          maxHeight: '100vh',
        },
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
      },
      box: {
        padding: theme.spacing(5, 0)
      },
}));

function getSteps() {
    return ['1', '2', '3', '4', '5'];
  }

const OnboardingModal = ({close}) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(1);
    const steps = getSteps();

  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const getStepTitle = (activeStep) => {
        switch (activeStep) {
            case 2: 
                return 'Got a gift? Wohoo!';
            case 3:
                return 'Community guidelines ';
            case 4: 
                return 'Lokali grows from invites';
            default: 
                return 'Create a post to give or ask for a gift'
        }
    }

    const getStepContent = (activeStep) => {
      switch (activeStep) {
          case 2: 
              return 'Click value gift to say thanks';
          case 3:
              return 'Our guidelines are to keep everyone safe and feeling welcome.';
          case 4: 
              return 'We want awesome people like you to join our community and add to the abundance. Its free, easy and your friends will thank you. Think of it as your first gift to the communty.';
          default: 
              return 'Lorem ipsum dolor sin amet'
      }
  }

    return (
        <Grid container className={classes.paper}>
            <Grid item xs={12} sm={5} md={5} className={classes.image}>
              {activeStep === 1 &&
                <Grid item xs={12} className={classes.icons}>
                    <GiveIcon className={classes.padding}/>
                </Grid> 
              } 
              {activeStep === 2 &&
                <Grid item xs={12} className={classes.icons}>
                    <PostedIcon className={classes.padding}/>
                </Grid> 
              }  
              {activeStep === 3 &&
                <Grid item xs={12} className={classes.icons}>
                    <FunIcon className={classes.padding}/>
                </Grid> 
              } 
              {activeStep === 4 &&
                <Grid item xs={12} className={classes.icons}>
                    <GiftIcon className={classes.padding}/>
                </Grid> 
              }   
            </Grid>
              <Grid item xs={12} sm={7} md={7} elevation={0} className={classes.textSide}>
                  <Typography variant="p" className={classes.box}>
                  {getStepTitle(activeStep)}
                  </Typography>
                  <Typography  variant="p" className={classes.box}>
                  {getStepContent(activeStep)}
                  </Typography>
                      <OnboardingStepper 
                          activeStep={activeStep}
                          steps={steps}
                          handleNext={handleNext}
                          close={close}
                       />              
              </Grid>
        </Grid>
    )
};

export default OnboardingModal;