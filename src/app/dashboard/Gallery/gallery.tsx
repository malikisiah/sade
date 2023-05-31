import Image from "next/image";
import Link from "next/link";

type ImageObject = {
  src: string;
  alt: string;
  id: string;
};

type GalleryProps = {
  images: ImageObject[];
};

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-12 '>
      <div className='-m-1 flex flex-wrap md:-m-2'>
        {images.map((image, index) => (
          <div key={image.id} className='flex w-1/3 flex-wrap'>
            <div className='w-full p-1 md:p-2 relative'>
              {/* Image */}
              <label
                htmlFor={`modal-${image.id}`}
                className='block cursor-pointer'
              >
                <Image
                  alt={image.alt}
                  className='block h-full w-full rounded-lg object-cover object-center transform transition-all duration-300 hover:scale-105'
                  src={image.src}
                  width={10000}
                  height={10000}
                  quality={100}
                />
                <div className='absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-all duration-300 rounded-lg'></div>
              </label>

              {/* Modal */}
              <input
                type='checkbox'
                id={`modal-${image.id}`}
                className='modal-toggle'
              />
              <div className='modal'>
                <div className=' modal-box relative max-w-3xl'>
                  <label
                    htmlFor={`modal-${image.id}`}
                    className='btn btn-sm btn-circle absolute right-2 top-2'
                  >
                    ✕
                  </label>
                  <Image
                    alt={image.alt}
                    className='object-contain'
                    src={image.src}
                    width={10000}
                    height={10000}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
