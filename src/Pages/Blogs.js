import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import './Blogs.css'; // Import the CSS file for styling

export class Blogs extends Component {
  render() {
    return (
      <div className='blogs'>
        <Helmet>
          <title>My bLOGS</title>
        </Helmet>
        <h1>My Blogs</h1>
        <div className='coming-soon'>
          <h2>Coming Soon!</h2>
          <p>
            The blog section is currently in development. Updates are coming
            soon!
          </p>
        </div>
      </div>
    );
  }
}

export default Blogs;
