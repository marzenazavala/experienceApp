import React from 'react';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => (
  <footer>
  <div className='footer-top'>
    <div>
      <p>INFORMATION</p>
      <ul>
        <li>how it works</li>
        <li>become a host</li>
        <li>jobs</li>
        <li>company details</li>
      </ul>
    </div>
    <div>
      <p>COMMUNITY</p>
      <ul>
        <li>how it works</li>
        <li>become a host</li>
        <li>jobs</li>
        <li>company details</li>
      </ul>
    </div>
    <div>
      <p>HELP CENTER</p>
      <ul>
        <li>COVID19</li>
        <li>FAQ</li>
      </ul>
    </div>
  </div>
  <Divider orientation="horizontal" />
  <div className='footer-bottom'>
     <div>
      <p>Copyrights Zion's Coders LTD 2021</p>
    </div>
    <div>
      <FacebookIcon />
      <InstagramIcon />
      <YouTubeIcon />
    </div>
  </div>
  </footer>
);

export default Footer;