import './styles/main.css';

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ProjectOne from './components/pages/ProjectOne';
import Contacts from './components/pages/Contacts';
import Projects from './components/pages/Projects';
import Home from './components/pages/Home';
import ScrollToTop from './utils/ScrollToTop';

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectOne />} />
      </Routes>
      <Footer />
    </div>
  );
}
