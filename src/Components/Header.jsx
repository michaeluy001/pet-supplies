import logo from '/src/assets/Lovepetslogo.png'
import { RxHamburgerMenu } from "react-icons/rx";
export const Header = () => {
  return (
    <>
      <div className="w-full fixed top-0 left-0 h-20 bg-[var(--warm-sand)] content-center grid grid-cols-3 font-bold text-3xl z-11 md:h-30 ">
        <div className="flex justify-center ">
          <RxHamburgerMenu className="text-6xl" />
        </div>
        <div className="flex justify-center relative">
          <img src={logo} alt="Love Pets Logo" className='size-15 sm:size-20 md:size-25 absolute '/>
        </div>
      </div>
      <div className="w-full h-20"></div>
    </>
  );
};
