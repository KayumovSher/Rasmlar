import React, { useEffect, useState } from "react";
import BlobBackground from "../components/BlobBackground";

const categories = [
  { key: "", label: "Hammasi" },
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
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    filterImages();
  }, [searchTerm, images]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  const fetchImages = (categoryKey = "") => {
    setLoading(true);
    let url = "http://127.0.0.1:8000/api/image/";
    if (categoryKey) {
      url += `?category=${categoryKey}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setFilteredImages(data);
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

  const filterImages = () => {
    const lowerSearch = searchTerm.toLowerCase();
    const result = images.filter(
      (img) =>
        img.title?.toLowerCase().includes(lowerSearch) ||
        img.category?.toLowerCase().includes(lowerSearch)
    );
    setFilteredImages(result);
  };

  return (
    <>
      {/* Section with background image */}
      <div
        className="relative rounded-lg text-white"
        style={{
          backgroundImage: "url('/Home/Home.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="bg-sky-600/20 backdrop-brightness-85 w-full min-h-[550px] px-6 py-10 flex flex-col items-center justify-center text-center space-y-6 z-10 relative">
          <h1 className="text-4xl lg:text-4xl font-bold leading-snug">
            Ijodkorlar tomonidan baham ko'rilgan eng yaxshi bepul suratlar
          </h1>

          <div className="relative w-full max-w-xl z-10">
            <input
              type="text"
              placeholder="Suratlarni yoki kategoriyani qidiring..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="z-10 w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 text-black bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      <div className="relative isolate px-4 pt-10 lg:px-8 min-h-screen">
        <BlobBackground position="top" />
        <BlobBackground position="bottom" />

        {/* Category Buttons */}
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
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-7 mt-20">
          {loading ? (
            <p className="text-center text-gray-500 col-span-full">Yuklanmoqda...</p>
          ) : filteredImages.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">Rasmlar topilmadi.</p>
          ) : (
            filteredImages.map((img) => (
              <div key={img.id} className="bg-white rounded overflow-hidden">
                <img
                  src={img.image}
                  alt={img.title || "Image"}
                  className="w-full object-cover h-auto rounded cursor-pointer"
                  onClick={() => {
                    setSelectedImage(img);
                    setShowModal(true);
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal for selected image */}
      {showModal && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-12 max-w-xl w-125 relative text-center mb-0">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-1 right-1 text-gray-500 hover:text-gray-800 text-xl"
              title="Yopish"
            >
            ✖️
            </button>

            {/* Image Preview */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title || "Rasm"}
              className="w-full h-auto rounded mb-5 mx-auto"
            />

            {/* Download Button */}
            <button
              onClick={() => {
                fetch(selectedImage.image)
                  .then((res) => res.blob())
                  .then((blob) => {
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = selectedImage.image.split("/").pop(); // Original filename
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                  })
                  .catch((err) => {
                    console.error("Download error:", err);
                  });
              }}
              className="bg-[#646cff] hover:bg-sky-700 text-white px-6 py-5 rounded-full font-semibold mb-0"
            >
              Rasmni yuklash
            </button>
          </div>
        </div>
      )}

    </>
  );
}

export default Home;
