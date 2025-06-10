import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDownloads = async () => {
      try {
        const token = localStorage.getItem('access');
        const response = await axios.get('http://127.0.0.1:8000/api/user/downloads/', {
          headers: {
            Authorization: `Bearer ${token}`
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
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="p-6 text-sky-700">
      <h2 className="text-2xl font-semibold mb-4 mt-50">My Downloaded Images</h2>
      {images.length === 0 ? (
        <p>You haven't downloaded any images yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map(image => (
            <div key={image.id} className="rounded overflow-hidden shadow">
              <img src={image.image} alt={image.title} className="w-full h-48 object-cover" />
              <div className="p-2 text-center">{image.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
