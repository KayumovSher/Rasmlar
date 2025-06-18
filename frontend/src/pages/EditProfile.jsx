import React, { useState, useEffect } from 'react';
import BlobBackground from "../components/BlobBackground";

function EditProfile({ user, setUser }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        username: user.username || '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Backend API ga PATCH so‘rov yuborish (o‘zingizning API ga moslab o‘zgartiring)
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/' + user.id + '/', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('token'), // agar JWT token ishlatilsa
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Malumotlarni yangilashda xatolik yuz berdi');
      }

      const updatedUser = await response.json();
      setUser(updatedUser);
      alert('Ma\'lumotlar muvaffaqiyatli yangilandi');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 mt-30">
      <BlobBackground position="top" />
      <BlobBackground position="bottom" />
      <h2 className="text-5xl mb-20 text-sky-700">Akkountni tahrirlash</h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <input
          type="text"
          name="first_name"
          placeholder="Ism"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Familiya"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="username"
          placeholder="Foydalanuvchi nomi"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Saqlash
        </button>
      </form>
    </div>
  );
}

export default EditProfile;
