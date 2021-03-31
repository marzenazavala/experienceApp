import React, { useState } from 'react';
import { makeStyles, Typography, Grid, Paper, MenuItem } from '@material-ui/core';
import { duration, group, languages } from '../../utils/newExperienceData';
import { collections } from '../../utils/collections';
import DatePicker from './wrappers/DatePicker';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from './wrappers/TextFieldWrapper';
import Select from './wrappers/SelectWrapper';
import Button from './wrappers/ButtonWrapper';
import { connect } from 'react-redux';
import {createProject} from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import SnackBarAlert from '../snackBar/SnackBarAlert';


const useStyles = makeStyles((theme) => ({
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
  title: {
    fontFamily: 'Lemonada',
    fontSize: '18px',
    textAlign: 'center',
    lineHeight: '5px'
  },
  subtitle: {
    fontFamily: 'Lemonada',
    fontSize: '12px',
    lineHeight: '0px'
  },
  form: {
    marginTop: '0px'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
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
  date: '',
  time: ''
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
  .required('Choose date for your event'),
  time: Yup.string()
  .required('Choose time for your event')
});

const NewExperienceForm = ({handleChange, auth, createProject, history}) => {
  const classes = useStyles();
  const [snackBar, setSnackBar] = useState(false)

  const handleSubmit = (values) => {
    createProject({...values});
    setSnackBar(true)
    //history.push('/');
    console.log(values)
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    };
    setSnackBar(false)
  };

  if(!auth.uid) return <Redirect to='/signin' />

  return(
    <>
      <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography color="textPrimary" className={classes.title}>
          <p>Create New Experience</p>
          <span className={classes.subtitle}>Share your passion with the world</span>
        </Typography>
        <Formik 
          initialValues={{...INITIAL_FORM_STATE}}
          validationSchema={FORM_VALIDATION}
          onSubmit = {handleSubmit}
        >
          <Form className={classes.form}>
          <Grid container spacing={2}>
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
              rows="3"
              id="description"
              name="description"
              label="Description"
            />
          </Grid>

          <Grid item xs={12} sm={12}>
            <Typography  gutterBottom className={classes.subtitle}>
              Choose more details
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6}>
            <DatePicker
              type="date" 
              name="date"
              label="Date"
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <DatePicker 
              type="time"
              name="time"
              label="Time"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField 
              required
              multiline
              id="price"
              name="price"
              label="Price USD/person"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
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
          <Grid item xs={12} sm={4}>
            <Select 
              required
              value={group}
              onChange={handleChange}
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
          <Grid item xs={12} sm={6}>
            <Select 
              required
              value={collections}
              onChange={handleChange}
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
          
        
          <Grid item xs={12} className={classes.buttons}>
            <Button>Submit</Button>
            {/* <Button 
              type="submit" 
              color="secondary" 
              variant="contained" 
              disableElevation 
              
              >
                Submit
              </Button> */}
          </Grid>
          
        </Grid>
          </Form>
        </Formik>
      </Paper>
      {snackBar && <SnackBarAlert 
          handleClose={handleClose} 
          open={snackBar} 
          severity='success'
          message='Your experience was successfully created'
          />}
      </main>
    </>
  )
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewExperienceForm);