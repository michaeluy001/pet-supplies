import { ProductCard } from "./ProductCard";
import { useProductInfo } from "./useProductInfo";

export const Collections = () => {
  const petSupplies = useProductInfo();
  return (
    <>
     
      <div className="flex flex-col space-y-5 bg-[var(--warm-sand)]">
        <div className="h-10  text-center text-[var(--soft-purple)]">
          <p className="p-5 text-2xl font-bold">
            Trusted Essentials for Your Beloved Pets
          </p>
        </div>
        <div className="grid grid-cols-2 gap-0.5">
          {petSupplies.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};
