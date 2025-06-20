import React from 'react';
import BlobBackground from "../components/BlobBackground";
import Footer from '../components/Footer';

function License() {
  return (
    <div className="relative">
      {/* Decorative Backgrounds */}
      <BlobBackground position="top" />
      {/* <BlobBackground position="bottom" /> */}

      {/* Main Content */}
      <div className="relative isolate px-150 pt-36 mx-auto text-center">

        {/* Section with background image */}
        <div
          className="rounded-lg overflow-hidden text-white"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay for readability */}
          <div className="px-6 py-15">
            <h1 className="text-7xl font-bold mb-4 text-sky-700">Litsenziya</h1>
            <p className="text-2xl text-sky-700">
                <strong>Rasmlar</strong> veb-ilovasi xizmatidan qanday foydalanish mumkinligini belgilab beruvchi xususiy hujjat.
            </p>
          </div>
        </div>


        <h2 className="text-4xl font-semibold text-sky-700 py-3">Nimaga ruxsat berilgan ✅</h2>
        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Rasmlar ilovasidagi barcha fotosuratlardan foydalanish bepul.</p>
          </ul>
        </div>

        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Atribut shart emas. Fotosuratchi yoki Ilovaga kredit berish shart emas, lekin har doim Rasmlar maxsulotlari qadrlanadi.</p>
          </ul>
        </div>

        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Siz Rasmlar veb ilovasidagi fotosuratlarni o'zgartirishingiz mumkin. Ijodkor bo'ling va ularni xohlaganingizcha tahrirlang.</p>
          </ul>
        </div>

        <h2 className="text-4xl font-semibold text-sky-700 py-3">Nimaga ruxsat berilmagan ❌</h2>

        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
            {/* Decorative Backgrounds */}
            <BlobBackground position="top" />
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Savdo belgisi, dizayn belgisi, savdo nomingiz, biznes nomingiz yoki xizmat ko'rsatish belgingizning bir qismi sifatida bizning savdo nomimiz va savdo belgizmidan foydalanmang.</p>
          </ul>
        </div>

        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Suratlarni boshqa stok foto yoki fon rasmi platformalarida qayta tarqatmang va sotmang.</p>
          </ul>
        </div>

        <div className="relative isolate max-w-2xl mx-auto  bg-white shadow-md rounded-2xl p-6 text-left text-gray-700 space-y-4">
          <ul className="list-disc list-inside space-y-3">
            <p className='text-xl' >Tasvirlarni mahsulotingiz, odamlar yoki brendlar tomonidan ma'qullanishini nazarda tutmang.</p>
          </ul>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default License;
