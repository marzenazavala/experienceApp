import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { duration, group, languages } from '../../utils/newExperienceData';
import { collections } from '../../utils/collections';
import DatePicker from './wrappers/DatePicker';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from './wrappers/TextFieldWrapper';
import Select from './wrappers/SelectWrapper';

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

const INITIAL_FORM_STATE = {
  title: '',
  description: '',
  collection: '',
  language: '',
  price: '',
  duration: '',
  group: '',
  date: ''
}

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string()
  .required('Title is required'),
  description: Yup.string()
  .required('Description is required'),
  collection: Yup.string()
  .required('Choose the collection'),
  language: Yup.string()
  .required('Choose the language'),
  price: Yup.number()
  .integer()
  .required('Price is required'),
  duration: Yup.string()
  .required('Duration is required'),
  group: Yup.number()
  .integer()
  .typeError('Please enter a valid amount as a number')
  .required('Amount of people is required'),
  date: Yup.date()
  .required('Choose date for your event')
});

const NewExperienceForm = ({handleChange}) => {
  const classes = useStyles();

 

  return(
    <>
      <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography variant="h5" gutterBottom  color="textSecondary" align="center">
          Create New Experience
        </Typography>
        <Formik 
          initialValues={{...INITIAL_FORM_STATE}}
          validationSchema={FORM_VALIDATION}
          onSubmit = {values => {
            console.log(values)
          }}
        >
          <Form>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField 
              required
              multiline
              id="title"
              name="title"
              label="Title"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField 
              required
              multiline
              id="description"
              name="description"
              label="Description"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Select 
              required
              value={collections}
              onChange={handleChange}
              helperText="Select collection of experience"
              id="collection"
              name="collection"
              label="Collection"
            >
              {collections.map(option => (
                <MenuItem key={option.title} value={option.title}>
                  {option.title}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={12}>
          <Typography  gutterBottom>Choose more details</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              required
              multiline
              id="price"
              name="price"
              label="Price"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select 
              required
              value={languages}
              onChange={handleChange}
              id="language"
              name="language"
              label="Language"
            >
              {languages.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select 
              required
              value={duration}
              onChange={handleChange}
              id="duration"
              name="duration"
              label="Duration"
            >
              {duration.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select 
              required
              value={group}
              onChange={handleChange}
              helperText="Select maximum amount of people"
              id="group"
              name="group"
              label="Group up to"
            >
              {group.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <DatePicker 
              name="date"
              label="Date"
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker 
              name="date"
              label="Date"
            />
          </Grid>
        </Grid>
        <Button secondary type="submit">Submit</Button>
          </Form>
        </Formik>
        
      </Paper>
      </main>
    </>
  )
};

export default NewExperienceForm;