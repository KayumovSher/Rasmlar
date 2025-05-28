import React, { useState, useEffect } from 'react';
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
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

function App() {
  // User holatini boshqarish
  const [user, setUser] = useState(null);

  // App boshlanganda localStorage dan user o'qish
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Logout funksiyasi
  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Login yoki Signup muvaffaqiyatli bo'lganda user ni yangilash uchun funksiya
  const handleLoginSuccess = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} logout={logout} />

        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup onSignupSuccess={handleLoginSuccess} />} />
            <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/images" element={<Images />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/license" element={<License />} />
          </Routes>
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
