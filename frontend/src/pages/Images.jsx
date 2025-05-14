import { useEffect, useState } from "react";
import BlobBackground from "../components/BlobBackground";

function Images() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/images/")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error fetching images:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="relative isolate px-6 pt-24 lg:px-8 min-h-screen">
      <BlobBackground position="top" />
      <BlobBackground position="bottom" />

      <h1 className="text-3xl font-bold text-center mb-8 text-black">Images Gallery</h1>

      {loading ? (
        <div className="text-center text-indigo-500 font-medium">Loading...</div>
      ) : images.length === 0 ? (
        <div className="text-center text-gray-500">No images found.</div>
      ) : (
        <ul className="grid md:grid-cols-2 gap-6">
          {images.map((img) => (
            <li key={img.id}>
              <h2 className="text-xl font-semibold text-[#646cff]">{img.title}</h2>
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-auto rounded shadow-md mt-2"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Images;
