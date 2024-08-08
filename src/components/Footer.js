import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './FooterStyles.css';

const linkedin = () => {
  window.location.replace('https://www.linkedin.com/in/disha-padia-0b9920271/');
};

const git = () => {
  window.location.replace('https://github.com/dishapadia');
};

const Footer = () => {
  return (
    <div className="footer">
      <div className='link'>
        <span className="icon" onClick={git}><FaGithub size={20} /></span>
        <p onClick={git}></p>
      </div>
      <div className='link'>
        <span className="icon" onClick={linkedin}><FaLinkedin size={20} /></span>
        <p onClick={linkedin}></p>
      </div>
    </div>
  );
};
 
export default Footer;
