// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Projects from './Pages/Projects';
import Contact from './Pages/Contacts';

function App() {
  return (
    <HelmetProvider>
      {' '}
      {/* Wrap the app with HelmetProvider */}
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
