import { useSiteContent } from "./useSiteContent";
import { IoMdClose } from "react-icons/io";
import { DrawerFoot } from "./Drawer-Foot";
import { motion } from 'motion/react'

export const Drawer = (props) => {
  const columns = useSiteContent([]);
  const absPosition = "fixed top-0 left-0 ";

  return (
    <>
      <div className={`${absPosition}size-full bg-gray-400/80 z-20` } onClick={props.onClose} />
      <motion.div
        className={`${absPosition} z-21 w-full md:w-1/2 xl:w-1/4 h-screen bg-amber-100 flex flex-col`} initial={{ left: -500 }} animate={{ left: 0}} transition={{duration: 0.4, type:"spring" }}
      >
        <button className="p-8 text-4xl">
          <IoMdClose onClick={props.onClose} />
        </button>

        <div className=" flex flex-col items-center space-y-5">
          {columns.map((column, index) => (
            <div key={index} className="tracking-wider  text-center">
              <div className="text-lg"> {column.title} </div>
              <div className="flex flex-col ">
                {column.contents.map((link, index) => (
                  <a className="text-sm leading-6" key={index} href="#">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <DrawerFoot />
      </motion.div>
    </>
  );
};
