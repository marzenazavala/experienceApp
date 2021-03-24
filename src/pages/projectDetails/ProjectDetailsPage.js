import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';
import { projectData } from './projectData';
import ProjectGallery from '../../components/layout/projectDetails/ProjectGallery';
import './projectDetails-styles.css';
import ProjectDetails from '../../components/layout/projectDetails/ProjectDetails';
import AboutHost from '../../components/layout/projectDetails/AboutHost';
import FiestaTimeFeatures from '../../components/layout/projectDetails/FiestaTimeFeatures';


const ProjectDetailsPage = ({project}) => (
  <>
    <Container>
        <Link href="/" color="inherit">Show all experiences</Link>
      <div>
        <ProjectGallery projectData={projectData} className='project-gallery'/>
      </div>
      <Divider orientation='horizontal' />
        <ProjectDetails project={project}/>
      <Divider orientation='horizontal' />
        <AboutHost />
      <Divider orientation='horizontal' />
        <FiestaTimeFeatures />
      <Divider orientation='horizontal' />
      <div>Reviews</div>
    </Container>
  </>
);

const mapStateToProps = (state, ownProps) => {
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