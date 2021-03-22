import React from 'react';
import SeeMoreBtn from '../components/buttons/Btn';
import ProjectGallery from '../components/layout/projectDetails/ProjectGallery';
import {projectData} from '../utils/projectData';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  gallery: {
    marginRight: '10px'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Grid container className='header'>
    {/* <Grid className='header-items'> */}
      <Grid item xs={12} sm={5} md={5} className='header-items' >
      <div className='center'>
        <h4>Share with world what you love to do</h4>
        <h5>and make people happy</h5>
        <div className='header-btns'>
          <SeeMoreBtn text="Enjoy the party"/>
          <SeeMoreBtn text="Login" color ='button-sweet'/>
        </div>
      </div>
      </Grid>
      <Grid item xs={12} sm={7} md={7} >
        <ProjectGallery projectData={projectData} className='project-gallery' />
      </Grid>
    {/* </Grid> */}
  </Grid>
  )
};

export default Header;