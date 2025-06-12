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
    <div className="p-46 text-indigo-600">
      <h2 className="text-5xl font-semibold text-center mb-14">Mening yuklangan rasmlarim</h2>
      {images.length === 0 ? (
        <p>Hozircha hech qanday rasm yuklanmagan.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded overflow-hidden shadow text-center">
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-auto object-cover"
              />

              <p className="font-semibold">{image.title}</p>
              <p className="text-sm text-gray-600">{image.category}</p>
              <p className="text-xs text-gray-400">Yuklangan vaqti: {image.downloaded_at}</p>

              <a
                href={image.image}
                download
                className="text-blue-500 hover:underline mt-2 inline-block"
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
