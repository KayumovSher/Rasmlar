import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/api/user/downloads/', {
          headers: {
            Authorization: `Token ${token}`
          }
        });
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching downloads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDownloads();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Yuklanmoqda...</div>;
  }

  return (
    <div className="p-56 text-sky-700">
      <h2 className="text-2xl font-semibold mb-4">Mening yuklangan rasmlarim</h2>
      {images.length === 0 ? (
        <p>Hozircha hech qanday rasm yuklanmagan.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded overflow-hidden shadow">
              <img
                src={image.image_url}
                alt={image.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-2 text-center">
                <p className="font-semibold">{image.title}</p>
                <p className="text-xs text-gray-500">{new Date(image.downloaded_at).toLocaleString()}</p>
              </div>
              <a
                href={image.image_url}
                download
                className="block text-center bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
              >
                Qayta yuklab olish
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
