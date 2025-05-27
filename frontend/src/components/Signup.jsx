import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

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
    <div className="max-w-md mx-auto mt-10 p-6 shadow-xl rounded-lg border">
      <h2 className="text-2xl font-bold mb-4">Ro'yxatdan o'tish</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        {['first_name', 'last_name', 'email', 'username', 'password'].map(field => (
          <input
            key={field}
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            placeholder={field.replace('_', ' ').toUpperCase()}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
        ))}
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Ro'yxatdan o'tish</button>
      </form>
      <p className="mt-4 text-center">
        Agar akkountingiz bo'lmasa <a href="/login" className="text-blue-600 underline">Kirish</a>
      </p>
    </div>
  );
}
