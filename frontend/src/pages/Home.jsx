import React, { useEffect, useState } from "react";

const categories = [
  { key: "", label: "All" },
  { key: "animals", label: "Hayvonlar" },
  { key: "buildings", label: "Binolar" },
  { key: "foods", label: "Taomlar" },
  { key: "nature", label: "Tabiat" },
  { key: "people", label: "Odamlar" },
  { key: "sertificates", label: "Sertifikat" },
  { key: "technology", label: "Texnologiya" },
  { key: "wallpaper", label: "Fon" },
];

function Home() {
  const [images, setImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (categoryKey = "") => {
    setLoading(true);
    let url = "http://127.0.0.1:8000/api/image/";
    if (categoryKey) {
      url += `?category=${categoryKey}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFilteredImages(data);
        if (!categoryKey) {
          setImages(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setFilteredImages([]);
        setLoading(false);
      });
  };

  const filterByCategory = (categoryKey) => {
    setActiveCategory(categoryKey);
    fetchImages(categoryKey);
  };

  return (
    <div className="relative isolate px-4 pt-26 lg:px-8 min-h-screen">
      {/* Category Buttons - Top */}
      <div className="mb-6 flex flex-wrap justify-center gap-4">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => filterByCategory(key)}
            className={`px-4 py-2 rounded font-semibold ${
              activeCategory === key
                ? "bg-[#646cff] text-white"
                : "bg-[#9089fc] text-white hover:bg-sky-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 mt-7">
        {loading ? (
          <p className="text-center text-gray-500 col-span-full">Yuklanmoqda...</p>
        ) : filteredImages.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">Rasmlar topilmadi.</p>
        ) : (
          filteredImages.map((img) => (
            <div key={img.id} className="bg-white p-2 rounded shadow">
              <h2 className="text-lg font-semibold text-[#646cff] mb-2">{img.title}</h2>
              <img
                src={img.image}
                alt={img.title || "Image"}
                className="w-full h-auto rounded"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
