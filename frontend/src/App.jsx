import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';

import Home from './pages/Home';
import Images from './pages/Images';
import Contact from './pages/Contact';
import About from './pages/About';
import License from './pages/License';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/images" element={<Images />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/license' element={<License />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
