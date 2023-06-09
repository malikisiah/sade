"use client";
export default function Hero() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp2800200.jpg")`,
      }}
    >
      <div className='hero-overlay bg-black bg-opacity-30'></div>
      <div className='hero-content text-center text-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 lg:text-9xl font-bold text-7xl '>S A D E</h1>
          <p className='mb-5 text-xl font-bold'>
            A curated collection of music, photos, and more...
          </p>
          <button className='btn btn-content' onClick={scrollToNextSection}>
            See More
          </button>
        </div>
      </div>
    </div>
  );
}
