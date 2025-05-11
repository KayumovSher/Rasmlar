import { useEffect, useState } from "react";

function Images() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/images/')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Images Page</h1>
      <ul>
        {images.map(img => (
          <li key={img.id} className="mb-4">
            <h2 className="text-xl font-semibold">{img.title}</h2>
            <img src={img.url} alt={img.title} className="w-full h-auto mt-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Images;
