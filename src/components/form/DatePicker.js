import React, { useState } from 'react';
import MultipleDatesPicker from '@randex/material-ui-multiple-dates-picker';
import Button from '@material-ui/core/Button'
 
const DatePicker = () => {
  const [open, setOpen] = useState(false)
 
  return (
    <div>
      <Button onClick={() => setOpen(!open)}>
        Select Dates
      </Button>
      <MultipleDatesPicker
        open={open}
        selectedDates={[]}
        onCancel={() => setOpen(false)}
        onSubmit={dates => console.log('selected dates', dates)}
      />
    </div>
  )
};

export default DatePicker;
