export default function Hero() {
  return (
    <div
      className='hero min-h-screen'
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp2800200.jpg")`,
      }}
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-9xl font-bold'>S A D E</h1>
          <p className='mb-5 text-xl font-bold'>
            A curated collection of music, photos, and more...
          </p>
          <button className='btn btn-content'>See More</button>
        </div>
      </div>
    </div>
  );
}
