import { LovePetsLogo } from "./LovePetsLogo";
import { RxHamburgerMenu } from "react-icons/rx";
export const Header = () => {
  return (
    <>
      <div className="w-full fixed top-0 left-0 h-20 bg-[var(--warm-sand)] content-center grid grid-cols-3 font-bold text-3xl z-11">
        <div className="flex justify-center">
          <RxHamburgerMenu />
        </div>
        <div className="flex justify-center">
          <LovePetsLogo />
        </div>
      </div>
      <div className="w-full h-20"></div>
    </>
  );
};
