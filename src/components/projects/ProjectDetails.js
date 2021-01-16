import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className='container section project-details'>
        <div className='card z-depth-0 grey lighten-5'>
          <div className='card-content'>
            <span className='card-title'>{project.title}</span>
            <p>{project.content}</p>
            <p>Duration: {project.duration}</p>
            <p>Price: {project.price}</p>
          </div>
          <div className='card-action grey lighten-2 white-text'>
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>2nd September, 2 am</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='container center'>Loading...</div>
    )
  }
  
};

const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps.match.params;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(ProjectDetails)
