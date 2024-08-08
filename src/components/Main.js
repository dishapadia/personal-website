import React from 'react';
import { Link } from 'react-router-dom';
import './MainStyles.css';
import Resume from '../resume/Resume.pdf'

const Main = () => {
  return (
    <div className="main">
      <div className="content">
        <h1>DISHA PADIA</h1>
        <h6>Computer Science Student</h6>
      </div>
      <div className="links">
        <Link to="/Projects" className='btn'>
          Projects
        </Link>
        <a href={Resume} className='btn'>
          Resume
        </a>
      </div>
    </div>
  );
};

export default Main;
