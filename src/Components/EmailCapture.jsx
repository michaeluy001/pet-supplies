import corgi from "/src/assets/corgi.png";
import { Overlay } from "./Overlay";
import { FaArrowRight } from "react-icons/fa";

export const EmailCapture = () => {
  return (
    <>
      <div className="relative  overflow-hidden justify-items-center">
        <form className="relative h-screen content-center  px-15 sm:text-lg z-3 2xl:w-1/3">
          <p className="text-lg text-gray-800/60 tracking-widest sm:text-3xl md:text-4xl lg:text-2xl">
            Subscribe to our Newsletter to receive exciting updates and promos!
          </p>
          <div className="flex items-center  md:text-2xl">
            <input
              id="email"
              type="email"
              placeholder="name@email.com"
              className="border p-3 rounded-2xl m-5 h-8 w-5/6 sm:h-15 md:h-10"
            />
            <div className="flex text-[var(--mint-green)] text-lg items-center bg-amber-200 size-8 justify-center rounded-full sm:size-12 md:size-15 lg:size-10">
              <FaArrowRight className="active:scale-50 transition-transform sm:text-3xl md:text-lg" />
            </div>
          </div>
        </form>

        <Overlay />

        <div className="absolute bottom-10 right-10 origin-bottom content-center rotate-15 z-2">
          <img src={corgi} alt="Corgi" className="size-35 md:size-60 2xl:size-40" />
        </div>
      </div>
    </>
  );
};
