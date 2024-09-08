import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';
import profilePic from '../Profile1.jpg'; // Update path if necessary

function About() {
  return (
    <div className='about-container'>
      <Helmet>
        <title>About mE</title>
      </Helmet>
      <div className='profile-pic'>
        <img src={profilePic} alt='Bibek Kumar Karki' />
      </div>
      <div className='about-content'>
        <h1 className='about-heading'>Hi, I'm Bibek Kumar Karki!</h1>
        <p className='about-text'>
          After spending nearly six years in the hospitality industry as a
          waiter, I decided to take a bold step and pursue my passion for
          technology. I recently completed a Fullstack Bootcamp, and now I'm
          fully immersed in the world of coding and development.
        </p>
        <p className='about-text'>
          During this exciting career transition, I've dedicated myself to
          staying on the cutting edge of the latest tech trends. I'm committed
          to exploring every facet of my new field, from front-end design to
          back-end development, and everything in between. My goal is to not
          only evolve within the tech industry but also to contribute
          meaningfully to it.
        </p>
        <p className='about-text'>
          I'm excited about the journey ahead and can't wait to see where this
          path takes me. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
}

export default About;
