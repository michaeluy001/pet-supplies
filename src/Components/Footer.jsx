import { LovePetsLogo } from "./LovePetsLogo";
import { useFooterCols } from "./useFooterCols";

export const Footer = () => {
  const columns = useFooterCols([]);

  return (
    <>
      <div className="grid grid-cols-4 p-5 ">
        <div className="flex mx-6 h-50 text-gray-800/60">
          {columns.map((item, index) => (
            <div className="space-x-10">
              <p className="text-lg"> {item.title} </p>
              <ul className="flex flex-col">
                {item.contents.map((item) => (
                  <li className="text-sm">
                    <a href="#"> {item} </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      
      </div> 
      <div className="bg-gray-200 text-xs w-screen"><p> Built by Michael Uy | © 2025 </p></div>
    </>
  );
};
