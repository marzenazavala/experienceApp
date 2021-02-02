import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import  { compose } from 'redux';
import ProjectList from '../components/projects/ProjectList';
import Features from '../sections/Features';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import MainPageProjectsList from '../components/projects/MainPageProjectsList';

const HomePage = ({ projects }) => (
  <>
    <div className="white-text center">
    <Header />
    </div>
    <div className="black-text center">
      <h5>The newest events</h5>
      { projects && <MainPageProjectsList projects={projects}/> }
      
    </div>
    <div className=" black-text center locations-section">
      <h5>Collections</h5>
      { projects && <ProjectList projects={projects}/> }
    </div>
    
    <Features />
    
    <div className="newsletter-section black-text center">
      <h5>Newsletter</h5>
    </div>
    <div className="black-text center categories-section">
      <h5>Categories</h5>
    </div>
    <Footer />
  </>
);

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] }
  ]))(HomePage)