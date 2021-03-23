import React from 'react';
import {TextField} from '@material-ui/core';
import {useField} from 'formik';
 
const DatePicker = (props) => {
  const [field, meta] = useField(props)

  const configDatePicker = {
    type:'date',
    variant: 'outlined',
    fullWidth: true,
    ...props,
    ...field,
    InputLabelProps: {
      shrink: true
    }
  }

  if(meta && meta.touched && meta.error) {
    configDatePicker.error = true;
    configDatePicker.helperText = meta.error;
  }
 
  return (
    <TextField {...configDatePicker}/>
  )
};

export default DatePicker;
