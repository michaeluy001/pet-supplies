import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsMinecart } from "react-icons/bs";

export const DrawerFoot = () => {
  return (
    <>
      <div className="border-t-1 h-15 mt-auto grid grid-cols-3 items-center px-5 text-lg md">
        <p className="justify-items-center">Log In</p>
        <div className="flex mx-10 space-x-3 text-2xl justify-center">
          <p> <FaFacebookF /> </p>
          <p> <CiInstagram /> </p>
          <p> <FaTiktok /> </p>
          <p> <FaXTwitter /> </p>
        </div>
        <p className="w-full justify-items-end text-2xl"><BsMinecart /></p>
      </div>
    </>
  );
};
