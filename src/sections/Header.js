import React from 'react';
import SeeMoreBtn from '../components/buttons/Btn';
import HeaderCard from '../components/cards/HeaderCard/HeaderCard';

const Header = () => (
  <div className='header'>
    <div className='header-items'>
      <div>
        <h4>Something to write here</h4>
        <h5>and we make people happy</h5>
        <div className='header-btns'>
          <SeeMoreBtn text="Enjoy the party"/>
          <SeeMoreBtn text="Login" color ='button-sweet'/>
        </div>
      </div>
      <HeaderCard />
    </div>
  </div>
);

export default Header;