export const ProductCard = ({ prod }) => {
  return (
    <>
      <div className="h-100 w-full items-center p-2 overflow-hidden  flex flex-col sm:h-120 md:h-150 lg:h-190 xl:h-165 2xl:h-130">
        <div className=" relative justify-items-center  text-center xl:w-100 2xl:w-75">
          <img
            src={prod.src}
            alt={prod.name}
            className="object-cover xl:size-100 2xl:size-75"
          />

          <div
            className={` text-white absolute top-2 right-2 px-3 rounded-2xl sm:text-2xl md:text-3xl md:py-2 lg:text-5xl lg:top-5 lg:right-5 xl:text-2xl 2xl:text-lg h-auto
                ${
                  prod.availability == "Out of Stock"
                    ? "bg-red-600"
                    : "bg-green-600"
                } 
              `}
          >
            {prod.availability}
          </div>

          <ul className="text-sm p-5 space-y-3 tracking-wider  bg-orange-200 min-h-full text-gray-800 sm:text-lg md:text-2xl lg:text-3xl 2xl:text-2xl">
            <li className="text-md font-bold text-md space-y-6  ">
              {prod.name}
            </li>
            <li>{prod.model}</li>

            <li>{prod.price}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
