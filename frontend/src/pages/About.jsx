import React from 'react';
import BlobBackground from "../components/BlobBackground";
import Footer from '../components/Footer';

function About() {
  return (
    <div className="relative">
      {/* Decorative Backgrounds */}
      <BlobBackground position="top" />
      {/* <BlobBackground position="bottom" /> */}

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
          <div className="bg-indigo-600/15 px-25 py-55">
            <h1 className="text-7xl font-bold mb-4">Biz haqimizda</h1>
            <p className="text-2xl">
                Ushbu sayt sizga bepul, litsenziyaga ega, yuqori sifatdagi suratlarni toifalar bo‘yicha taqdim etish, Company-Name butun dunyodagi millionlab ijodkorlarga chiroyli mahsulotlar va dizaynlarni osongina yaratishda yordam beradi.
            </p>
          </div>
        </div>



        {/* Photos */}
        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
            {/* Decorative Backgrounds */}
            <BlobBackground position="top" />
          <h2 className="text-4xl font-semibold text-sky-700">Rasmlar</h2>
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Bizda yuz minglab bepul fotosuratlar mavjud va har kuni yangi, yuqori aniqlikdagi fotosuratlar qo'shiladi. Barcha fotosuratlar bizning foydalanuvchilarimiz tomonidan yuklangan yoki bepul rasm veb-saytlaridan olingan fotosuratlardan qo'lda tanlangan. Biz chop etilgan barcha rasmlar yuqori sifatli va Company-name litsenziyasi ostida litsenziyalanganligiga ishonch hosil qilamiz.</p>
          </ul>
        </div>

        {/* Photo Sources */}
        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
          <h2 className="text-4xl font-semibold text-sky-700">Rasm manbalari</h2>
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Fotosuratlar ma'lumotlar bazasiga faqat fotograflar hamjamiyatimizdagi bepul rasmlar qo'shiladi. Biz doimo veb-saytimizdan foydalanadigan ijodkorlarga iloji boricha ko'proq yuqori sifatli bepul suratlarni yetkazib berishga harakat qilamiz.</p>
          </ul>
        </div>

        {/* Team */}
        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
          <h2 className="text-4xl font-semibold text-sky-700">Jamoa</h2>
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Qayumov Shermuhammad boshqaradi va 2025 yilda Company-name kompaniyasiga asos solgan.</p>
          </ul>
        </div>

        {/* Purpose */}
        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
            {/* Decorative Backgrounds */}
            <BlobBackground position="top" />
          <h2 className="text-4xl font-semibold text-sky-700">Bizning maqsad</h2>
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Biz millionlab dizaynerlar, yozuvchilar, rassomlar, dasturchilar va boshqa ijodkorlarga ajoyib mahsulotlar, dizaynlar, hikoyalar, veb-saytlar, ilovalar, sanʼat va boshqa asarlar yaratish imkonini beruvchi bemalol foydalanishlari mumkin boʻlgan chiroyli, mutlaqo bepul, suratlarga kirishda yordam beramiz. Foydalanuvchilarga  Company-name litsenziyasi ostida litsenziyalangan ushbu suratlarni sodda, tez va samarali interfeys orqali xizmat ko‘rsatib taqdim etamiz. Barcha fotosuratlar yaxshi yorliqlangan, qidirish mumkin va kashf qilish sahifalarimiz orqali osongina topish mumkin.</p>
          </ul>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default About;
