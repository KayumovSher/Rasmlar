import React from 'react';

function Home() {
  return (
    
    <div className="relative isolate px-5 pt-1">
      {/* Top Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
        </div>

      {/* Main Content */}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-16 text-center">
        <div className="mt-10 flex flex-wrap justify-center gap-4">
        <button className="border border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 px-4 py-2 rounded font-semibold">Message</button>
          <button className="bg-[#9089fc] hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded">Tabiat</button>
          <button className="bg-[#9089fc] hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded">Fon</button>
          <button className="bg-[#9089fc] hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded">Sayohat</button>
          <button className="bg-[#9089fc] hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded">Odamlar</button>
          <button className="bg-[#9089fc] hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded">Binolar</button>
          <button className="bg-[#9089fc] hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded">Sertifikat</button>
          <button className="bg-[#9089fc] hover:bg-sky-700 text-white font-semibold py-2 px-4 rounded">IT</button>
        </div>
      </div>
      
      

      {/* Bottom Decorative Background */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
    </div>

    
  );
}

export default Home;
