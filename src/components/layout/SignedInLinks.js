import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import OnboardingFlow from '../onboarding/OnboardingFlow';

const SignedInLinks = ({ signOut, profile }) => {

  return (
  <ul className='right'>
     <li>
      <OnboardingFlow />
    </li>
    <li>
      <NavLink to='/new-experience'>New experience</NavLink>
    </li>
    <li>
      <NavLink to='/create'>New project</NavLink>
    </li>
    <li>
      <NavLink to='/' onClick={signOut}>Logout</NavLink>
    </li>
    <li>
      <NavLink to='/dashboard' className='btn btn-floating blue'>{profile.initials}</NavLink>
    </li>
   
  </ul>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
};


export default connect(null, mapDispatchToProps)(SignedInLinks);
