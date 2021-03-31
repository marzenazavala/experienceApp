import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles, Button, Grid} from '@material-ui/core';
import ProjectCard from '../cards/ProjectCard/ProjectCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  cards: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  btn: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(4)
  }
}))



const ProjectList = ({projects}) => {
  const classes = useStyles();

  

  const fetchMore = () => {

  }

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} className={classes.cards}>
          {projects && projects.map(project => {
          return (
            <Link to={`/project/${project.id}`} key={project.id}>
              <ProjectCard project={project}/>
            </Link>
          )
          })}
        </Grid>
        <Grid item xs={12} className={classes.btn}>
          <Button onClick={fetchMore} variant="contained" color="secondary" disableElevation>See More Amazing Experiences</Button>
        </Grid>
      </Grid>
    </>
  )
};

export default ProjectList;