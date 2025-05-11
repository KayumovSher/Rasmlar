// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Images from './pages/Images';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold my-4">React + Django Full-Stack Example</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/images" element={<Images />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="p-4">
      <h2 className="text-2xl">Welcome to the Shermuhammadning websayti</h2>
      <p className="mt-2">Click below to see the data:</p>
      <ul>
        <li>
          <a href="/images" className="text-blue-500 hover:underline">View Images</a>
        </li>
        <li>
          <a href="/contact" className="text-blue-500 hover:underline">View Contact Users</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
