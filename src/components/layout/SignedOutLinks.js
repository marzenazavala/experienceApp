import React from 'react';
import { NavLink } from 'react-router-dom';
import OnboardingFlow from '../onboarding/OnboardingFlow';

const SignedOutLinks = () => {
  return (
  <ul className='right'>
    <li>
      <NavLink to='/signup'>Signup</NavLink>
    </li>
    <li>
      <NavLink to='/signin'>Login</NavLink>
    </li>
    <li>
      <OnboardingFlow />
    </li>
  </ul>
  )
};

export default SignedOutLinks;
