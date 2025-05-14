import corgi from "/src/assets/corgi.png";
import { Overlay } from "./Overlay";
import { FaArrowRight } from "react-icons/fa";

export const EmailCapture = () => {
  return (
    <>
      <div className="relative bg-amber-100 overflow-hidden">
        <form className="h-screen content-center p-10">
          <p className="text-2xl text-gray-800/60">
            Subscribe to our Newsletter to receive exciting updates and promos!
          </p>
          <div className="flex items-center">
            <input
              id="email"
              type="email"
              placeholder="name@email.com"
              className="border p-3 rounded-3xl m-5 h-10 w-4/5"
            />
            <div className="flex text-[var(--mint-green)] text-2xl items-center bg-amber-200 size-10 justify-center rounded-full">
              <FaArrowRight className="active:scale-50 transition-transform" />
            </div>
          </div>
        </form>

        <Overlay />

        <div className="absolute bottom-10 right-10 origin-bottom content-center rotate-15 ">
          <img src={corgi} alt="Corgi" className="size-35" />
        </div>
      </div>
    </>
  );
};
