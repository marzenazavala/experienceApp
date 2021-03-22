import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as GiveIcon } from '../../assets/icons/headdress.svg';
import { ReactComponent as FunIcon} from '../../assets/icons/dancer.svg';
import { ReactComponent as PostedIcon} from '../../assets/icons/cocktail.svg';
import { ReactComponent as GiftIcon} from '../../assets/icons/brazil.svg';
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
        [theme.breakpoints.up('sm')]:{
          backgroundColor: 'rgb(247, 73, 116)',
          borderRadius: '5px 0 0 5px',
          display: 'flex',
          maxHeight: '100%',
        },
        maxHeight: '40%',
        backgroundRepeat: 'no-repeat',
        borderRadius: '5px 5px 0px 0',
        backgroundColor: 'rgb(247, 73, 116)',
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
        maxHeight: '100vh',
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
        justifyContent: 'space-between', 
      },
      box: {
        padding: theme.spacing(5, 0)
      },
      title: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }
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
                return 'Invite people';
            case 3:
                return 'Have fun';
            case 4: 
                return 'Share reviews';
            default: 
                return 'Create something good'
        }
    }

    const getStepContent = (activeStep) => {
      switch (activeStep) {
          case 2: 
              return 'People will book your experience with specific date and time.';
          case 3:
              return 'Make people have fun during your show.';
          case 4: 
              return 'Your guests will write some reviews about the experience. Share them with the world.';
          default: 
              return 'Create your experience to share.'
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
                  <Typography variant="p" className={classes.title}>
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