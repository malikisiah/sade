import Gallery from "./gallery";

export default function GalleryPage() {
  const images = [
    {
      src: "/sade1.jpg",
      alt: "Image 1",
    },

    {
      src: "/sade2.jpg",
      alt: "Image 2",
    },

    {
      src: "/sade3.jpg",
      alt: "Image 3",
    },

    {
      src: "/sade4.jpg",
      alt: "Image 4",
    },

    {
      src: "/sade5.jpg",
      alt: "Image 5",
    },

    {
      src: "/wp2800275-sade-adu-wallpaper.jpg",
      alt: "Image 6",
    },

    // ... add the rest of the images here
  ];

  const images2 = [
    {
      src: "/sade1.jpg",
      alt: "Image 1",
    },

    // ... add the rest of the images here
  ];
  return (
    <>
      <p className='text-center pt-10 font-bold text-2xl pb-6'>
        The embodiment of grace and sophistication
      </p>

      <Gallery images={images}></Gallery>

      <p className='text-center pt-10 font-bold text-2xl pb-6'>
        Beauty is not merely a visual concept, it is a rhythm, a melody, an
        emotion that transcends the realms of physical creation
      </p>

      <Gallery images={images2}></Gallery>
    </>
  );
}
