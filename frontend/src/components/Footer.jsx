// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="w-flex bg-gray-800 text-white py-10 m-0">
      <div className="text-center text-sm">
        <p>&copy; 2025 Shermukhammad's Website. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-1">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
