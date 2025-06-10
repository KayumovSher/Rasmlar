import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import BlobBackground from "../components/BlobBackground";

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/api/login/', form);
      login(res.data, res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Noto‘g‘ri login yoki parol');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-114 py-12 to-white">
      <BlobBackground position="top" />
      <BlobBackground position="bottom" />
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl px-10 py-12 relative z-10">
        <h2 className="text-3xl font-bold text-center text-sky-700 mb-6">Kirish</h2>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-10">
          <input
            type="text"
            name="username"
            placeholder="USERNAME"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
            required
          />
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full transition-all">
            Kirish
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-black">
          Akkountingiz yo‘qmi?{' '}
          <a href="/signup" className="text-sky-600 underline hover:text-sky-800">
            Ro‘yxatdan o‘ting
          </a>
        </p>
      </div>
    </div>
  );
}
