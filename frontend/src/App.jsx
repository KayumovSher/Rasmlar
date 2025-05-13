'use client'

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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

    <div className="relative w-full h-screen bg-[url('/bg_Photo/earth.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay content centered in the middle of the screen */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto flex flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
          <div className="text-xl font-medium text-black dark:text-white">
            Welcome to the Shermukhammad's Website
          </div>
          <p className="text-gray-500 dark:text-gray-400">Click below to see the data:</p>
          <hr className="w-full" />

          <div className="flex gap-4">
            <Link to="/images">
              <button className="border border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2 rounded">
                View Images
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2 rounded">
                View Contact Users
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
