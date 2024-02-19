import React from 'react';
import { Link } from 'react-router-dom';
import './MainStyles.css';

const Main = () => {
  return (
    <div className="main">
      <div className="content">
        <h1>Hello! I am Disha!</h1>
      </div>
      <div className="links">
        <Link to="/Projects" className='btn'>
          Projects
        </Link>
        <a href="https://docs.google.com/document/d/1p5CxOEZnCLB2VkbYQ7NZYttgOyqdBs-76haa5Jpd3ls/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className='btn'>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Main;
