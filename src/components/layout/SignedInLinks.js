import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ signOut, profile }) => {

  return (
  <ul className='right'>
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
