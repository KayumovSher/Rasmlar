import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import BlobBackground from "../components/BlobBackground";

export default function Signup() {
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', username: '', password: ''
  });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/register/', form);
      login(res.data, res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Xatolik yuz berdi');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
      <BlobBackground position="top" />
      <BlobBackground position="bottom" />
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl px-10 py-12 relative z-10">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-6">Ro'yxatdan o'tish</h2>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {['first_name', 'last_name', 'email', 'username', 'password'].map(field => (
            <input
              key={field}
              type={field === 'password' ? 'password' : 'text'}
              name={field}
              placeholder={field.replace('_', ' ').toUpperCase()}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
              required
            />
          ))}
          <button className="w-full bg-[#646cff] hover:bg-sky-700 text-white font-semibold py-3 rounded-full transition-all">
            Ro'yxatdan o'tish
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          Akkountingiz bormi?{' '}
          <a href="/login" className="text-sky-600 underline hover:text-sky-800">
            Kirish
          </a>
        </p>
      </div>
      
    </div>
  );
}
