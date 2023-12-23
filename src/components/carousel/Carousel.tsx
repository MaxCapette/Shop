'use client';
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import './carousel.css';

/**
 * Carousel component for Next.js and Tailwind.
 * Using external library react-easy-swipe for swipe gestures on mobile devices.
 *
 * @param images - Array of image URLs
 * @returns React component
 */

interface ImageType {
  url: string;
}

interface CarouselProps {
  images: ImageType[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative carousel">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />
      <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-full h-full absolute transition-opacity duration-500 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={image.url}
                alt={`carousel image ${index}`}
                layout="fill"
                objectFit="contain"
                unoptimized // Consider removing if your images are optimized
              />
            </div>
          ))}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 z-20"
      />

      <div className="flex justify-center p-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full mx-2 mb-2 cursor-pointer ${index === currentSlide ? "bg-gray-700" : "bg-gray-300"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
