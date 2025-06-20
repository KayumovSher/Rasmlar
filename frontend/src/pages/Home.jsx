import React, { useEffect, useState } from "react";
import BlobBackground from "../components/BlobBackground";

const categories = [
  { key: "", label: "Hammasi" },
  { key: "ai", label: "SI" },
  { key: "animals", label: "Hayvonlar" },
  { key: "art", label: "San'at" },
  { key: "buildings", label: "Binolar" },
  { key: "cars", label: "Avtomobillar" },
  { key: "darkness", label: "Zulmat" },
  { key: "fashion", label: "Moda" },
  { key: "foods", label: "Taomlar" },
  { key: "nature", label: "Tabiat" },
  { key: "pc", label: "Kompyuter" },
  { key: "people", label: "Odamlar" },
  { key: "phone", label: "Telefon" },
  { key: "sertificates", label: "Sertifikat" },
  { key: "space", label: "Koinot" },
  { key: "sport", label: "Sport" },
  { key: "technology", label: "Texnologiya" },
  { key: "users", label: "Foydalanuvchilar" },
];

function Home() {
  const [images, setImages] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/Home/Home.png",
    "/Home/Home1.jpg",
    "/Home/Home2.jpg",
    "/Home/Home3.jpg",
    "/Home/Home4.jpg",
    "/Home/Home5.jpg",
    "/Home/Home6.jpg",
    "/Home/Home7.jpg",
    "/Home/Home8.jpg",
    "/Home/Home9.png",
    "/Home/Home10.jpeg",
    "/Home/Home11.jpg",
    "/Home/Home12.jpg",
    "/Home/Home13.jpg",
  ];

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    filterImages();
  }, [searchTerm, images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const fetchImages = (categoryKey = "") => {
    setLoading(true);
    let url = "http://127.0.0.1:8000/api/image/";
    if (categoryKey) url += `?category=${categoryKey}`;

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

  const filterByCategory = (key) => {
    setActiveCategory(key);
    fetchImages(key);
  };

  const filterImages = () => {
    const search = searchTerm.toLowerCase();
    setFilteredImages(
      images.filter(
        (img) =>
          img.title?.toLowerCase().includes(search) ||
          img.category?.toLowerCase().includes(search)
      )
    );
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative rounded-lg h-[850px] text-white transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="backdrop-brightness-100 w-full min-h-[850px] px-6 py-10 flex flex-col items-center justify-center text-center space-y-6 z-10 relative">
          <h1 className=" font-bold leading-snug font-sans">
            Vizual tasvirlar uchun internet manbasi. <br />
            Hamma joyda ijodkorlar tomonidan quvvatlanadi.
          </h1>

          <div className="relative w-full max-w-xl z-10">
            <input
              type="text"
              placeholder="Suratlarni yoki kategoriyani qidiring..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="z-10 w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 text-black bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative isolate px-4 pt-10 lg:px-8 min-h-screen">
        <BlobBackground position="top" />
        <BlobBackground position="bottom" />

        {/* Category Buttons */}
        <div className="mb-5 flex flex-wrap justify-center gap-2">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => filterByCategory(key)}
              className={`px-3 py-1.5 text-sm rounded font-medium transition-all duration-200 ${
                activeCategory === key
                  ? "bg-sky-700 text-white"
                  : "bg-indigo-400 text-white hover:bg-sky-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Images */}
        <div className="px-4 sm:px-20">
          <div className="columns-2 gap-4 sm:columns-3 sm:gap-8 mt-20">
            {loading ? (
              <p className="text-center text-gray-500 col-span-full">Yuklanmoqda...</p>
            ) : filteredImages.length === 0 ? (
              <p className="text-center text-gray-500 col-span-full">Rasmlar topilmadi.</p>
            ) : (
              filteredImages.map((img) => (
                <div key={img.id} className="rounded overflow-hidden mb-8">
                  <img
                    src={img.image}
                    alt={img.title || "Image"}
                    className="w-full object-cover h-auto rounded-3xl cursor-pointer"
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
      </div>

      {/* Modal */}
      {showModal && selectedImage && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-12 max-w-xl w-125 relative text-center mb-0">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-1 right-1 text-gray-500 hover:text-gray-800 text-xl"
              title="Yopish"
            >
              ✖️
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.title || "Rasm"}
              className="w-full h-auto rounded mb-5 mx-auto"
            />

            <button
              onClick={async () => {
                try {
                  const token = localStorage.getItem("access");

                  if (token) {
                    await fetch("http://127.0.0.1:8000/api/record-download/", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                      },
                      body: JSON.stringify({ image_id: selectedImage.id }),
                    });
                  }

                  const response = await fetch(selectedImage.image);
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = selectedImage.image.split("/").pop();
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                } catch (error) {
                  console.error("Download error:", error);
                }
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
