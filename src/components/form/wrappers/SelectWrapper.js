import React from 'react';
import {TextField} from '@material-ui/core';
import {useField, useFormikContext} from 'formik';

const SelectWrapper = (props) => {

  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(props)

  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(props.name, value)
  }

  const configSelect = {
    ...props,
    ...field,
    select: true,
    variant:"outlined",
    onChange: handleChange,
    fullWidth: true
  }

  if(meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
      <TextField {...configSelect}>
        {props.children}
      </TextField>
  )
};

export default SelectWrapper