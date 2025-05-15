import { useState } from "react";
import { useSliderImages } from "./useSliderImages";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";

export const Slider = () => {
  const imageUrls = useSliderImages();
  const [imageIndex, setImageIndex] = useState(0);

  const nextSlide = () => {
    setImageIndex((prev) => {
      if (prev === imageUrls.length - 1) return 0;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    setImageIndex((prev) => {
      if (prev === 0) return imageUrls.length - 1;
      return prev - 1;
    });
  };

  return (
    <>
      <div className=" w-full content-center overflow-hidden ">
        <div className="space-y-5">
          <p className="text-center text-lg py-10 px-5 font-bold text-gray-800/60 md:text-4xl lg:text-5xl">
            Swipe through our featured products — 
            handpicked for comfort, fun, and everyday care. 
            Because your pet deserves the best!</p>
          <div className="relative  size-full flex overflow-hidden">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                className={` block size-full object-cover shrink-0 grow-0 transition-transform duration-300`}
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            ))}

            <div className="absolute top-0 size-full flex justify-between text-gray-800/80">
              <button
                onClick={prevSlide}
                className="h-full px-5 active:bg-gray-800/30 "
              >
                <div className="bg-white/60 p-2 rounded-full active:bg-white transition-colors text-xs lg:text-5xl"><FaArrowLeft /></div>
              </button>
              <button
                onClick={nextSlide}
                className="h-full px-5 active:bg-gray-800/30"
              >
                <div className="bg-white/60 p-2 rounded-full active:bg-white transition-colors text-xs lg:text-5xl"><FaArrowRight /></div>
              </button>
            </div>
            <div className="absolute h-10 w-1/2 bottom-2 left-1/2 -translate-1/2 text-gray-800 flex justify-evenly">
              {imageUrls.map((_, index) => (
                <button onClick={() => setImageIndex(index)} key={index} className="text-sm lg:text-5xl">
                  {index === imageIndex ? <FaRegDotCircle /> : <FaRegCircle />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
