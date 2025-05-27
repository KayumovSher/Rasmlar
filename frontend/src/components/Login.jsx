import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

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
    <div className="max-w-md mx-auto mt-10 p-6 shadow-xl rounded-lg border">
      <h2 className="text-2xl font-bold mb-4">Kirish</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input name="username" placeholder="USERNAME" onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        <input type="password" name="password" placeholder="PASSWORD" onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Kirish</button>
      </form>
      <p className="mt-4 text-center">
        Akkountingiz yo‘qmi? <a href="/signup" className="text-blue-600 underline">Ro‘yxatdan o‘ting</a>
      </p>
    </div>
  );
}
