import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className='contact-section'>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div className='contact-content'>
        <h2>Get in Touch</h2>
        <p>
          Feel free to reach out to me at: <b>abinim.bibek19@gmail.com</b>
        </p>
        <div className='social-media'>
          <a
            href='https://www.linkedin.com/in/abinimbibek/'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='LinkedIn'
          >
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>
          <a
            href='https://github.com/Abinim'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='GitHub'
          >
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
