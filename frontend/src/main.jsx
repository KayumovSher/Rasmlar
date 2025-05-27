// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext'; // ✅ Make sure this is the right path

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>         {/* ✅ Add this */}
      <App />
    </AuthProvider>
  </StrictMode>,
);
