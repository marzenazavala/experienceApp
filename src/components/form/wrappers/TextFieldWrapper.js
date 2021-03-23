import React from 'react';
import {TextField} from '@material-ui/core';
import {useField} from 'formik';

const TextFieldWrapper = (props) => {

  const [field, meta] = useField(props)

  const configTextField = {
    ...field,
    ...props,
    variant: 'outlined',
    fullWidth: true,
    
  }

  if(meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error
  }

  return (
    <TextField {...configTextField}/>
  )
};

export default TextFieldWrapper