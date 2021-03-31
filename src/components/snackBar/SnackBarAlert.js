import React from 'react';
import { makeStyles, Snackbar  } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props){
  return <MuiAlert elevation={3} variant="filled" {...props} />
};

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2)
  }
}));

const SnackBarAlert = ({open, severity, handleClose, message}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
};

export default SnackBarAlert;