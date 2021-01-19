import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
  const createdAt = project.createdAt.toDate();
  const date = moment(createdAt).format('MMMM Do YYYY');
  return (
    <div className='card z-depth-1 project-summary'>
    <div className='card-content white-text'>
      <span className='card-title'>{project.title}</span>
      <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
      <p className='white-text'>{date}</p>
    </div>
  </div>
  )
};

export default ProjectSummary;