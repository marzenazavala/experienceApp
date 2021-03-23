import React from 'react';
import Button from '@material-ui/core/Button';
import {useFormikContext} from 'formik';

const ButtonWrapper = ({children, ...otherProps}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm()
  }

  const configButton = {
    variant: 'contained',
    disableElevation: true,
    color: 'secondary',
    onClick: handleSubmit
  }

  return (
    <Button {...configButton}>
      {children}
    </Button>
  );
};

export default ButtonWrapper