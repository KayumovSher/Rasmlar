// components/BlobBackground.jsx
function BlobBackground({ position = "top" }) {
    const topClass =
      position === "top"
        ? "absolute inset-x-0 -top-40 sm:-top-80"
        : "absolute inset-x-0 top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]";
  
    const leftClass =
      position === "top"
        ? "left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]"
        : "left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)]";
  
    return (
      <div aria-hidden="true" className={`${topClass} -z-10 transform-gpu overflow-hidden blur-3xl`}>
        <div
          className={`relative ${leftClass} aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]`}
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    );
  }
  
  export default BlobBackground;
  