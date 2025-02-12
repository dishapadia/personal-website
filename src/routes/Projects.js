import React, { useState } from 'react';
import "../components/ProjectStyles.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Calendar from '../Images/Calendar.png';
import Global_Education from '../Images/Global_Education.png';
import OTR from '../Images/OTR.png';
import CVForge from '../Images/CVForge.png'
import Sign_Language from '../Images/Sign_Language.png';

const Projects = () => {
  
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      name: "Calendar",
      link: "https://github.com/dishapadia/Calendar",
      img: Calendar,
      category: "Software"
    },
    {
      name: "Global Education Analysis",
      link: "https://github.com/dishapadia/Global_Education_Analysis",
      img: Global_Education,
      category: "Data Analysis"
    },
    {
      name: "CFD Simulations",
      link: "https://github.com/dishapadia/CFD_Simulations",
      img: OTR,
      category: "Software"
    },
    {
      name: "CVForge",
      link: "https://github.com/CVForgeOrg",
      img: CVForge,
      category: "ML/AI"
    },
    {
      name: "Sign Language Translator",
      link: "https://github.com/dishapadia/Sign_Translator",
      img: Sign_Language,
      category: "AR/VR"
    },
    {
      name: "StudySphere",
      link: "https://github.com/dishapadia/DSRR",
      img: StudySphere,
      category: "ML/AI"
    },
  ];
  
  const filteredProjects = selectedFilter === 'all'  ? projects : projects.filter(project => project.category === selectedFilter);

  return (
    <div>
      <Navbar />
      <div className="filter-buttons">
        <button onClick={() => setSelectedFilter('all')}>All</button>
        <button onClick={() => setSelectedFilter('Data Analysis')}>Data Analysis</button>
        <button onClick={() => setSelectedFilter('Software')}>Software</button>
        <button onClick={() => setSelectedFilter('AR/VR')}>AR/VR</button>
        <button onClick={() => setSelectedFilter('ML/AI')}>ML/AI</button>
      </div>

      <div className="projects-container">
        <div className="projects">
          {filteredProjects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.name} />
              <p>{project.name}</p>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div> 
  );
};

export default Projects;
