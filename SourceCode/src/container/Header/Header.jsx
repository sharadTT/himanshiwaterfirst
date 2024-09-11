import React from 'react';

import { images } from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Looking for ____?" />
      <h1 className='app__header-h1'>The solution to all your water treatment needs</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
      
    <a href="#services"><button type="button" class="custom__button">Explore Services</button></a>



    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header image" />
    </div>

  </div>
);

export default Header;
