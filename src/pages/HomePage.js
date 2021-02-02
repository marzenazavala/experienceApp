import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import  { compose } from 'redux';
import ProjectList from '../components/projects/ProjectList';
import Features from '../sections/Features';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import MainPageProjectsList from '../components/projects/MainPageProjectsList';
import CollectionsSection from '../sections/Collections';
import Divider from '@material-ui/core/Divider';

const HomePage = ({ projects }) => (
  <>
    <Header />
    <Divider orientation='horizontal'/>
    <div className="black-text center newest-section">
      <h5>The newest events</h5>
      { projects && <ProjectList projects={projects}/> }
    </div>
    
    <div className=" black-text center collections-section">
      <h5>Collections</h5>
      <CollectionsSection />
    </div>
    
    <Features />
    
    <div className="newsletter-section black-text center">
    
    </div>

    <div className="black-text center categories-section">
      <h5>Categories</h5>
      { projects && <MainPageProjectsList projects={projects}/> }
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