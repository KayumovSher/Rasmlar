// src/components/Footer.jsx
import React from 'react';
import { FaTelegram, FaInstagram, FaGithub, FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 relative isolate w-full">
      <div className="text-center text-lg">
        <p>&copy; 2025 Rasmlar · Made by IT Enginnering Kayumov. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4 text-xl">
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTelegram />
          </a>
          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://linkedin.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaEnvelope className="inline mr-1" /> Email
          </a>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-4 mt-4 text-sm">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
