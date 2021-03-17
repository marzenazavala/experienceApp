import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import OnboardingModal from './OnboardingModal';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
          backgroundColor:'rgb(247, 73, 116)',
          fontFamily: 'Lemonada',
          color: 'white',
          '&:focus': { 
              outline: 0
          },
          '&:hover': {
              backgroundColor:'rgb(77, 145, 247)'
          }
      }
}));

const OnboardingFlow = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
            <Button styletype="button" onClick={handleOpen} className={classes.button}>
            Help
            </Button>
            <Modal 
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                    <OnboardingModal close={handleClose} />
                </Fade>
            </Modal>
        </>
    )
};

export default OnboardingFlow