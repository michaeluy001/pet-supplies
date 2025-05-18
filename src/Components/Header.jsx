import logo from "/src/assets/Lovepetslogo.png";
import { CiSearch } from "react-icons/ci";
import { BsMinecart } from "react-icons/bs";
import {useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from "./Drawer";
export const Header = () => {
  const [isDrawerOpened, setDrawerOpened] = useState(false);
  return (
    <>
      <div className="w-full shadow-md shadow-gray-500/10 fixed top-0 left-0 h-20 bg-[var(--warm-sand)] content-center grid grid-cols-3 font-bold text-3xl z-11 sm:h-25 md:h-30 2xl:text-lg">
        <div className="flex  justify-center text-green-800">
          <RxHamburgerMenu className="text-3xl sm:text-4xl" onClick={()=> setDrawerOpened(true)} />
        </div>
        <div className="flex justify-center relative  rounded-full">
          <img
            src={logo}
            alt="Love Pets Logo"
            className="size-15 sm:size-20 md:size-23 absolute -top-3 -rotate-5"
          />
        </div>
        <div className="flex justify-center text-green-800 content-center gap-10 ">
          <p className="text-2xl md:text-4xl xl:text-3xl">
            <CiSearch />
          </p>
          <p className="hidden xl:block xl:text-2xl"> Login </p>
          <p className="hidden xl:block xl:text-2xl"> <BsMinecart /> </p>
        </div>
      </div>
      <div className="w-full h-20"></div>
      { isDrawerOpened && <Drawer  onClose={()=>setDrawerOpened(false)}/> }
    </>
  );
};
