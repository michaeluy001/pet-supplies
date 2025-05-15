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
      <div className="h-screen w-full content-center overflow-hidden ">
        <div className="space-y-5 ">
          <p className="text-center text-2xl p-2 font-bold text-gray-800/60 ">Swipe through our featured products — 
            handpicked for comfort, fun, and everyday care. 
            Because your pet deserves the best!</p>
          <div className="relative h-3/4 size-full flex overflow-hidden">
            {imageUrls.map((url) => (
              <img
                key={url}
                src={url}
                className={` block size-full object-cover shrink-0 grow-0 transition-transform duration-300`}
                style={{ translate: `${-100 * imageIndex}%` }}
              />
            ))}
            <div className="absolute top-0 size-full h-full  flex justify-between text-gray-800/80">
              <button
                onClick={prevSlide}
                className="h-full px-5 active:bg-gray-800/30"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="h-full px-5 active:bg-gray-800/30"
              >
                <FaArrowRight />
              </button>
            </div>
            <div className="absolute h-10 w-1/2 bottom-0 left-1/2 -translate-1/2 text-gray-800 flex justify-evenly">
              {imageUrls.map((_, index) => (
                <button onClick={() => setImageIndex(index)}>
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
