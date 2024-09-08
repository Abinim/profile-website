import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Projects.css'; // Ensure the path to your CSS file is correct

// Import images
import project1Img from '../ComingSoon.jpg'; // Adjust paths as needed
import project2Img from '../ComingSoon.jpg'; // Example paths, update with actual images
import project3Img from '../ComingSoon.jpg';
import project4Img from '../ComingSoon.jpg';
import project5Img from '../ComingSoon.jpg';

function Projects() {
  return (
    <div className='projects-container'>
      <Helmet>
        <title>My pROJECTS</title>
      </Helmet>
      <h1 className='projects-heading'>My Projects</h1>
      <div className='projects-grid'>
        <a
          href='https://example.com/project1'
          className='project-box'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={project1Img} alt='Project 1' />
        </a>
        <a
          href='https://example.com/project2'
          className='project-box'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={project2Img} alt='Project 2' />
        </a>
        <a
          href='https://example.com/project3'
          className='project-box'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={project3Img} alt='Project 3' />
        </a>
        <a
          href='https://example.com/project4'
          className='project-box'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={project4Img} alt='Project 4' />
        </a>
        <a
          href='https://example.com/project5'
          className='project-box'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={project5Img} alt='Project 5' />
        </a>
      </div>
    </div>
  );
}

export default Projects;
