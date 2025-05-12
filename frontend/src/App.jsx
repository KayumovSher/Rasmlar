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

    <>
      <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
        <div>
          <div class="text-xl font-medium text-black dark:text-white">Welcome to the Shermukhammad of website</div>
          <p class="text-gray-500 dark:text-gray-400">Click below to see the data:</p>
          <hr></hr>
          <Link to="/images">
            <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
              View Images
            </button>
          </Link>

          <Link to="/contact">
            <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
              View Contact Users
            </button>
          </Link>
        </div>
      </div>
      </>
  );
}

export default App;
