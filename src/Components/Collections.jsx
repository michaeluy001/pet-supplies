import { ProductCard } from "./ProductCard";
import { useProductInfo } from "./useProductInfo";

export const Collections = () => {
  const petSupplies = useProductInfo();
  return (
    <>
      <div className="grid grid-cols-2 gap-0.5">
        {petSupplies.map((item,index) => (
          <ProductCard key={index} item={item}/>
        ))}
      </div>
    </>
  );
};
