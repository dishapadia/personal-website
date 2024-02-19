import React from 'react';
import "../components/ProjectStyles.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Calendar from '../Images/Calendar.png';
import Global_Education from '../Images/Global_Education.png';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="projects-container">

        <a href="https://github.com/dishapadia/Calendar" target="_blank" rel="noopener noreferrer" className='btn'>
          Calendar <img src={Calendar} alt="Calendar"></img>
        </a>

        <a href="https://github.com/dishapadia/Global_Education_Analysis" target="_blank" rel="noopener noreferrer" className='btn'>
        Global Education Analysis <img src={Global_Education} alt="Global Education"></img>
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
