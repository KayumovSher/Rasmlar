import React from 'react';
import BlobBackground from "../components/BlobBackground";
import Footer from '../components/Footer';

function About() {
  return (
    <div className="relative">
      {/* Decorative Backgrounds */}
      <BlobBackground position="top" />

      {/* Main Content */}
      <div className="relative isolate pt-34 mx-auto text-center">

        {/* Section with background image */}
        <div
          className="rounded-lg overflow-hidden text-white mb-10"
          style={{
            backgroundImage: "url('/about/Abu_Dhabi5K.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for readability */}
          <div className="bg-indigo-600/25 px-25 py-70">
            <h1 className="text-7xl font-bold mb-4">Biz haqimizda</h1>
            <p className="text-2xl">
                Ushbu Veb-ilova sizga bepul, litsenziyaga ega, yuqori sifatdagi suratlarni toifalar bo‘yicha taqdim etish, "Rasmlar" butun dunyodagi millionlab ijodkorlarga chiroyli mahsulotlar va dizaynlarni osongina yaratishda yordam beradi.
            </p>
          </div>
        </div>



        {/* Photos */}
        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
            {/* Decorative Backgrounds */}
            <BlobBackground position="top" />
          <h2 className="text-4xl font-semibold text-indigo-500">Rasmlar</h2>
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Bizda yuz minglab bepul fotosuratlar mavjud va har kuni yangi, yuqori aniqlikdagi fotosuratlar qo'shiladi. Barcha fotosuratlar bizning foydalanuvchilarimiz tomonidan yuklangan yoki bepul rasm veb-saytlaridan olingan fotosuratlardan qo'lda tanlangan. Biz chop etilgan barcha rasmlar yuqori sifatli va "Rasmlar" litsenziyasi ostida litsenziyalanganligiga ishonch hosil qilamiz.</p>
          </ul>
        </div>

        {/* Photo Sources */}
        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
          <h2 className="text-4xl font-semibold text-indigo-500">Rasm manbalari</h2>
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Fotosuratlar ma'lumotlar bazasiga faqat fotograflar hamjamiyatimizdagi bepul rasmlar qo'shiladi. Biz doimo veb-ilovamizdan foydalanadigan ijodkorlarga iloji boricha ko'proq yuqori sifatli bepul suratlarni yetkazib berishga harakat qilamiz.</p>
          </ul>
        </div>

        {/* Team */}
        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
          <h2 className="text-4xl font-semibold text-indigo-500">Jamoa</h2>
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >ITEK kompaniyasi boshqaradi va 2025 yilda "Rasmlar" veb-ilovasiga asos solgan.</p>
          </ul>
        </div>

        {/* Purpose */}
        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
            {/* Decorative Backgrounds */}
            <BlobBackground position="top" />
          <h2 className="text-4xl font-semibold text-indigo-500">Bizning maqsad</h2>
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Millionlab dizaynerlar, yozuvchilar, rassomlar, dasturchilar va boshqa ijodkorlarga ajoyib mahsulotlar, dizaynlar, hikoyalar, veb-saytlar, ilovalar, sanʼat va boshqa asarlar yaratish imkonini beruvchi bemalol foydalanishlari mumkin boʻlgan chiroyli, mutlaqo bepul, suratlarga kirishda yordam beramiz. Foydalanuvchilarga  ITEK & Rasmlar litsenziyasi ostida litsenziyalangan ushbu suratlarni sodda, tez va samarali interfeys orqali xizmat ko‘rsatib taqdim etamiz. Barcha fotosuratlar yaxshi yorliqlangan, qidirish mumkin va kashf qilish sahifalarimiz orqali osongina topish mumkin.</p>
          </ul>
        </div>

        {/* About the Creator */}
        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
            {/* Decorative Backgrounds */}
            <BlobBackground position="top" />
          <h2 className="text-4xl font-semibold text-indigo-500">Loyiha asoschisi haqida</h2>
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >"Ushbu loyiha ITEK kompaniyasi veb dasturchilari tomonidan ishlab chiqilgan."</p>
          </ul>
        </div>

        
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
