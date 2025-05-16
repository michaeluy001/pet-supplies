import logo from '/src/assets/Lovepetslogo.png'
import { RxHamburgerMenu } from "react-icons/rx";
export const Header = () => {
  return (
    <>
      <div className="w-full  fixed top-0 left-0 h-20 bg-[var(--warm-sand)] content-center grid grid-cols-3 font-bold text-3xl z-11 sm:h-25 md:h-30 2xl:text-lg">
        <div className="flex  justify-center text-green-800">
          <RxHamburgerMenu className="text-3xl sm:text-4xl" />
        </div>
        <div className="flex justify-center relative  rounded-full">
          <img src={logo} alt="Love Pets Logo" className='size-15 sm:size-20 md:size-23 absolute -top-3 -rotate-5'/>
        </div>
        <p className='flex justify-center  text-green-800 '>
          Login
        </p>
      </div>
      <div className="w-full h-20"></div>
    </>
  );
};
