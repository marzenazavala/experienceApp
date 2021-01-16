import React from 'react';

const ProjectSummary = ({project}) => {
  return (
    <div className='card z-depth-0 grey lighten-2 project-summary'>
    <div className='card-content grey-text text-darken-3'>
      <span className='card-title'>{project.title}</span>
      <p>Posted by Marzena Zavala</p>
      <p className='white-text'>3rd September, 2 am</p>
    </div>
  </div>
  )
};

export default ProjectSummary;