import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import Link from '@material-ui/core/Link';

const QontoConnector = withStyles({
  alternativeLine: {
    top: 10,
    left: 'calc(-50% + 6px)',
    right: 'calc(50% + 6px)',
  },
  active: {
    '& $line': {
      borderColor: 'rgb(77, 145, 247)',
    },
  },
  completed: {
    '& $line': {
      borderColor: 'rgb(77, 145, 247)',
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
  btn: {
		borderRadius: 8,
		background: 'rgb(77, 145, 247)',
        color: '#fff',
		fontWeight: 400,
		padding: theme.spacing(0.5, 5),
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'none'
    }
	},
  stepper: {
    boxShadow: 'none',
  },
  skip: {
    color: 'gray',
    fontSize: '14px',
    '&:hover': { 
      color: 'black',
      cursor: 'pointer'
    }
  }
}));


const OnboardingStepper = ({handleNext, activeStep, steps, close}) => {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
        <div>
            <Link
                variant="contained"
                onClick={activeStep === steps.length - 1 ? close : handleNext}
                className={classes.btn}
            >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Link>
        </div>
            <Stepper alternativeLine activeStep={activeStep} className={classes.stepper} connector={<QontoConnector />}>
                {steps.map((step) => (<Step key={step} />))}
            </Stepper>
                <span className={classes.skip} onClick={close} >Skip tour</span>
    </div>
  );
};

export default OnboardingStepper;