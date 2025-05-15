export const ProductCard = ({ prod }) => {
  return (
    <>
      <div className="h-120 w-full items-center p-2 overflow-hidden flex flex-col">
        <div className="rounded-4xl relative">
          <img src={prod.src} alt={prod.name} className="object-cover " />

          <div
              className={` text-white absolute top-2 right-2 px-2 rounded-2xl
                ${prod.availability == "Out of Stock"
                  ? "bg-red-600"
                  : "bg-green-600"} 
              `} 
            >
              {prod.availability}
            </div>

          <ul className="text-sm p-5 space-y-2 tracking-wider  bg-orange-200 min-h-full text-gray-800 ">
            <li className="text-md font-bold text-md space-y-6 text-lg">{prod.name}</li>
            <li>{prod.model}</li>
            
            <li>{prod.price}</li>
          </ul>
        </div>
      </div>
    </>
  );
};
