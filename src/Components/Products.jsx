import { ProductCard } from "./Products-Card";
import { useProductInfo } from "./useProductInfo";

export const Products = () => {
  const petSupplies = useProductInfo();
  return (
    <>
      <div className="flex flex-col space-y-15 my-15 lg:space-y-25 xl:space-y-35 ">
        <div className="h-10  text-center text-gray-800 ">
          <p className="p-5 text-2xl font-bold text-gray-500 text-shadow-lg content-center bg-orange-200 tracking-widest md:text-3xl lg:text-2xl lg:h-35 ">
            Trusted Essentials for Your Beloved Pets 
          </p>
        </div>
        <div className="grid grid-cols-2 gap-0.5 2xl:grid-cols-4 2xl:w-400 m-auto 2xl:gap-20">
          {petSupplies.map((item, index) => (
            <ProductCard key={index} prod={item}/>
          ))}
        </div>
      </div>
    </>
  );
};
