import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import  { compose } from 'redux';
import ProjectList from '../components/projects/ProjectList';
import Features from '../sections/Features';
import Footer from '../sections/Footer';
import Header from '../sections/Header';

const HomePage = ({ projects }) => (
  <>
    <div className="white-text center">
    <Header />
    </div>
    <div className="black-text center">
      <h5>The newest events</h5>
      { projects && <ProjectList projects={projects}/> }
    </div>
    <div className="locations-section">
      <h4>Locations</h4>
    </div>
    
    <Features />
    
    <div className="newsletter-section white-text center">
      <h4>Newsletter</h4>
    </div>
    <div className="categories-section">
      <h4>Categories</h4>
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