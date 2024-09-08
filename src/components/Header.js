import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const [nextIndex, setNextIndex] = useState(null);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll('header nav ul li a'));

    links.forEach((link, index) => {
      if (link.classList.contains('active-link')) {
        setNextIndex(index + 1);
      }
    });

    return () => setNextIndex(null); // Clean up when location changes
  }, [location.pathname]);

  useEffect(() => {
    const links = Array.from(document.querySelectorAll('header nav ul li a'));

    // Remove next-button class from all links
    links.forEach(link => {
      link.classList.remove('next-button');
    });

    // Add next-button class to the nextIndex link
    if (nextIndex !== null && links[nextIndex]) {
      links[nextIndex].classList.add('next-button');
    }

    return () => {
      if (nextIndex !== null && links[nextIndex]) {
        links[nextIndex].classList.remove('next-button');
      }
    };
  }, [nextIndex]);

  const getClassName = ({ isActive }) => (isActive ? 'active-link' : '');

  return (
    <header>
      <div className='container'>
        <h1>"Developer - Bibek Kumar Karki!"</h1> {/* Updated Header Text */}
        <nav>
          <ul>
            <li>
              <NavLink to='/' className={getClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/about' className={getClassName}>
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink to='/blogs' className={getClassName}>
                My Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to='/projects' className={getClassName}>
                My Projects
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={getClassName}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
