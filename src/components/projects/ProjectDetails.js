import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import moment from 'moment';

const ProjectDetails = ({ project, auth }) => {
  const createdAt = project.createdAt.toDate();
  const date = moment(createdAt).format('MMMM Do YYYY');

  if(!auth.uid) return <Redirect to='/signin' />
  
  if (project) {
    return (
      <div className='container section project-details'>
        <div className='card z-depth-0 purple lighten-3'>
          <div className='card-content'>
            <span className='card-title'>{project.title}</span>
            <p>{project.content}</p>
            <p>Duration: {project.duration}</p>
            <p>Price: {project.price}</p>
          </div>
          <div className='card-action project-summary white-text'>
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{date}</div>
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
    project,
    auth: state.firebase.auth,
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(ProjectDetails)
