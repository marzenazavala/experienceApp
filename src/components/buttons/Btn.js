import React from 'react';
import './btn-styles.css';

const Btn = ({ text, color='' }) => (
  <div className={`button ${color}`}>
    {text}
  </div>
);

export default Btn;