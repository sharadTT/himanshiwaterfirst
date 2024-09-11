import React from 'react';
import { FiFacebook, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi'

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='contact'>

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>nallasopara east, Mumbai, India</p>
        <p className='p__opensans'>+918169103250</p>
      </div>

      <div className='app__footer-links_logo'>

        <img src={images.gericht} alt="footer logo" />
        <p className='p__opensans'>"Tushar d... droplets"</p>
        <div className='app__footer-links_icons'>
          <a href="https://www.facebook.com/himanshiwaterfirst/" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.linkedin.com/in/himanshi-waterfirst-a7333b197/" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
          </a>
          <a href="https://www.instagram.com/himanshiwaterfi/" target="_blank" rel="noopener noreferrer">
          <FiInstagram />
          </a>
          <a href="mailto:%20himanshiwaterfirst@gmail.com" target="_blank" rel="noopener noreferrer">
          <FiMail />
          </a>
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'>8:00am to 8:00pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Himanshi Waterfirst. All right reserved.</p>
    </div>
  </div>
);

export default Footer;
