import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';

const QontoConnector = withStyles({
  alternativeLine: {
    top: 10,
    left: 'calc(-50% + 6px)',
    right: 'calc(50% + 6px)',
  },
  active: {
    '& $line': {
      borderColor: 'rgb(247, 73, 116)',
    },
  },
  completed: {
    '& $line': {
      borderColor: 'rgb(247, 73, 116)',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  stepper: {
    boxShadow: 'none',
  },
  button: {
'&:focus': {
    backgroundColor: 'rgb(247, 73, 116)'
}
  },
  skip: {
    color: 'gray',
    fontSize: '12px',
    '&:hover': { 
      cursor: 'pointer'
    }
  }
}));


const OnboardingStepper = ({handleNext, activeStep, steps, close}) => {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
        <div>
            <Button
                disableElevation 
                color="secondary"
                variant="contained"
                className={classes.button}
                onClick={activeStep === steps.length - 1 ? close : handleNext}
            >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
        </div>
            <Stepper alternativeLine activeStep={activeStep} className={classes.stepper} connector={<QontoConnector />}>
                {steps.map((step) => (<Step key={step} />))}
            </Stepper>
                <span className={classes.skip} onClick={close} >Skip tour</span>
    </div>
  );
};

export default OnboardingStepper;