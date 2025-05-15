
import { useFooterCols } from "./useFooterCols";

export const Footer = () => {
  const columns = useFooterCols([]);

  return (
    <>
      <div className="grid grid-cols-4  ">
        <div className="flex mx-6 h-50 text-gray-800/60 lg:h-70">
          {columns.map((item, index) => (
            <div key={index} className="space-x-10 md:space-x-15 ">
              <p className="text-md my-2 md:text-3xl lg:text-4xl"> {item.title} </p>
              <ul className="flex flex-col ">
                {item.contents.map((item, index) => (
                  <li key={index} className="text-sm md:text-lg lg:text-2xl">
                    <a href="#"> {item} </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-200 text-lg w-screen lg:text-4xl">
        <p> Built by Michael Uy | © 2025 </p>
      </div>
    </>
  );
};
