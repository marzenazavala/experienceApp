import React from 'react';
import SeeMoreBtn from '../components/buttons/Btn';
import HeaderCard from '../components/cards/HeaderCard/HeaderCard';
import ProjectGallery from '../components/layout/projectDetails/ProjectGallery';
import {projectData} from '../utils/projectData';

const Header = () => (
  <div className='header'>
    <div className='header-items'>
      <div className='center'>
        <h4>Something to write here</h4>
        <h5>and we make people happy</h5>
        <div className='header-btns'>
          <SeeMoreBtn text="Enjoy the party"/>
          <SeeMoreBtn text="Login" color ='button-sweet'/>
        </div>
      </div>
      <ProjectGallery projectData={projectData} className='project-gallery' />
    </div>
  </div>
);

export default Header;