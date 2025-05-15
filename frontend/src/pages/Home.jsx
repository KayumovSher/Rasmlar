import React, {useEffect, useState} from 'react';

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
         // Adjust these keys to your actual categories
  
];


function Home() {
  const [images, setImages] = useState([]);
  const [filteredImages, setFilteredImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/image/")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setFilteredImages(data); // Show all by default
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const filterByCategory = (categoryKey) => {
    setActiveCategory(categoryKey);
    if (categoryKey === "") {
      setFilteredImages(images);
    } else {
      const filtered = images.filter((img) => img.category === categoryKey);
      setFilteredImages(filtered);
    }
  };
  
  return (
    
    <div className="relative isolate px-5 pt-16">
      {/* Category Buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredImages.length === 0 ? (
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
