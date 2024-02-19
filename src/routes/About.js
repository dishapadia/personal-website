import React from 'react';
import "../components/AboutStyles.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about">
      <div className="program">
        <h3>Program</h3>
       <p>Hi There! I am Disha and pursuing my undergraduate degree of bachelors in Computer
        Science with Honours, at Ontario Tech University. I am specializing in Data Science.
        <br></br>
        I am in my second year looking for internships/co-op placements
        and oppurtunities to broaden my skills and hobbies.
        <br></br>
        I am always open to challenging myself and taking on new projects.
       </p>
       </div>
        <div className="background">
          <h3>Background</h3>
       <p>
        I used to love puzzles growing up, and in fact I would not get up until I finished my puzzle,
        which was the root of my curiosity to pursue Computer Science.
        <br></br>
        I just knew that I wanted to do something in technology.
        <br></br>
        I also took extra coding classes in highschool, that I enjoyed and kept learning on my own,
        which is what ultimately made me decide that Computer Science is the correct degree for me.
       </p>
       </div> 
    </div>
    <Footer/>
    </div>
  )
}

export default About