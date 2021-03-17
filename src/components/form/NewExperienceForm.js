import React,  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { duration, group, languages } from '../../utils/newExperienceData';
import { collections } from '../../utils/collections';
import DatePicker from './DatePicker';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));


const NewExperienceForm = () => {
  const classes = useStyles();

  const [durationValue, setDurationValue] = useState('');

  const handleDurationChange = (event) => {
    setDurationValue(event.target.value);
    console.log(durationValue)
  };

  return(
    <>
      <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom  color="textSecondary" align="center">
          Create New Experience
        </Typography>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <TextField 
              required
              multiline
              id="title"
              name="title"
              label="Title"
              fullWidth
            />
          </Grid>
          <Grid item sm={12}>
            <TextField 
              required
              multiline
              id="description"
              name="description"
              label="Description"
              fullWidth
            />
          </Grid>
          <Grid item sm={12}>
          <Typography  gutterBottom>Choose more details</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              required
              select
              value={duration}
              onChange={handleDurationChange}
              helperText="Please select duration of experience"
              id="duration"
              name="duration"
              label="Duration"
              fullWidth
            >
              {duration.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              required
              select
              value={group}
              onChange={handleDurationChange}
              helperText="Please select maximum amount of people"
              id="group"
              name="group"
              label="Group up to"
              fullWidth
            >
              {group.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              required
              select
              value={languages}
              onChange={handleDurationChange}
              helperText="Please select language of experience"
              id="language"
              name="language"
              label="Language"
              fullWidth
            >
              {languages.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              required
              select
              value={collections}
              onChange={handleDurationChange}
              helperText="Please select language of experience"
              id="collection"
              name="collection"
              label="Collection"
              fullWidth
            >
              {collections.map(option => (
                <MenuItem key={option.title} value={option.title}>
                  {option.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item sm={12}>
            <TextField 
              required
              multiline
              id="price"
              name="price"
              label="Price"
              fullWidth
            />
            <DatePicker />
          </Grid>
        </Grid>
      </Paper>
      </main>
    </>
  )
};

export default NewExperienceForm;