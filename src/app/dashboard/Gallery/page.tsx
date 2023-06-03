import Gallery from "./gallery";

export default function GalleryPage() {
  const firstSet = [
    {
      src: "/sade1.jpg",
      alt: "Image 1",
      id: "",
    },

    {
      src: "/sade2.jpg",
      alt: "Image 2",
      id: "",
    },

    {
      src: "/sade3.jpg",
      alt: "Image 3",
      id: "",
    },

    {
      src: "/sade4.jpg",
      alt: "Image 4",
      id: "",
    },

    {
      src: "/sade5.jpg",
      alt: "Image 5",
      id: "",
    },

    {
      src: "/rs-9031-20130116-sade-624x420-1358364478.webp",
      alt: "Image 6",
      id: "",
    },

    // ... add the rest of the images here
  ];

  firstSet.forEach((img, idx) => (img.id = `firstSet-${idx}`));

  const secondSet = [
    {
      src: "/download.webp",
      alt: "Image 2",
      id: "",
    },

    {
      src: "/Sade-Press.jpg",
      alt: "Image 1",
      id: "",
    },
    {
      src: "/20201005-sade-01.jpg",
      alt: "Image 1",
      id: "",
    },

    {
      src: "/Sade-Adu-White-Shirt.webp",
      alt: "Image 1",
      id: "",
    },

    {
      src: "/Sade-Press-Photo-1-e1599372789168.webp",
      alt: "Image 6",
      id: "",
    },

    {
      src: "/beauty-2015-12-sade-braid-main.webp",
      alt: "Image 6",
      id: "",
    },

    // ... add the rest of the images here
  ];

  secondSet.forEach((img, idx) => (img.id = `secondSet-${idx}`));
  return (
    <>
      <div className='pb-10'>
        <p className='text-center pt-10 font-bold text-2xl text-content '>
          The embodiment of grace and sophistication
        </p>

        <Gallery images={firstSet}></Gallery>
      </div>

      <div className='pb-10'>
        <p className='text-center pt-10 font-bold text-2xl '>
          Beauty is not merely a visual concept, it is a rhythm, a melody, an
          emotion that transcends the realms of physical creation
        </p>

        <Gallery images={secondSet}></Gallery>
      </div>
    </>
  );
}
