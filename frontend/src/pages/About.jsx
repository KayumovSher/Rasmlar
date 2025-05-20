import React from 'react';
import BlobBackground from "../components/BlobBackground";

function About() {
    return (
      <div>
        <BlobBackground position="top" />
        <BlobBackground position="bottom" />
    
        <p>&copy; 2025 Shermukhammad's Website. All rights reserved.</p>
          
        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        <a href="#" className="hover:text-gray-400">Terms of Service</a>
        <div className="text-center text-sm">
          <p>About Us</p>
          <p>Welcome to our website! We are dedicated to providing you with the best experience possible.</p>
          <p>Our team is passionate about delivering high-quality content and services.</p>
          <p>Thank you for visiting!</p>
          </div>

          
        
      </div>
    );
  }
  
  export default About