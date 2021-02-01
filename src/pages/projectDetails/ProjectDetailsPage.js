import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import Divider from '@material-ui/core/Divider';
import { Container } from '@material-ui/core';
import { projectData } from './projectData';
import ProjectGallery from '../../components/layout/projectDetails/ProjectGallery';
import './projectDetails-styles.css';
import ProjectDetails from '../../components/layout/projectDetails/ProjectDetails';


const ProjectDetailsPage = ({project}) => (
  <>
    <Container>
      <div>
        <div>header</div>
      </div>
      <div>
        <ProjectGallery projectData={projectData} className='project-gallery'/>
      </div>
      <Divider orientation='horizontal' />
      <ProjectDetails project={project}/>
      <Divider orientation='horizontal' />
      <div>About host</div>
      <Divider orientation='horizontal' />
      <div>Funny icons about fiestatime</div>
      <Divider orientation='horizontal' />
      <div>Reviews</div>
    </Container>
  </>
);

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps...', ownProps);
  const {id} = ownProps.match.params;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects'}
  ])
)(ProjectDetailsPage);