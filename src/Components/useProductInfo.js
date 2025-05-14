import item1 from '/src/assets/CozyPaws Orthopedic Dog Bed.jpg';
import item2 from '/src/assets/WhiskerFeast Grain-Free Cat Food - Chicken Recipe.jpg';
import item3 from '/src/assets/AquaClear Aquarium Water Filter - Medium.jpg';
import item4 from '/src/assets/TugTime Durable Dog Toy Rope.jpg';

export const useProductInfo = () => {
  const petSupplies = [
    {
      name: "CozyPaws Orthopedic Dog Bed",
      src: item1,
      model: "CP-OBD-2025",
      availability: "In Stock",
      price: "₱3,359.44",
    },
    {
      name: "WhiskerFeast Grain-Free Cat Food - Chicken Recipe (4lb)",
      src: item2,
      model: "WF-CF-CH-4LB",
      availability: "In Stock",
      price: "₱1,259.44",
    },
    {
      name: "AquaClear Aquarium Water Filter - Medium",
      src: item3,
      model: "AQ-WF-MED-300",
      availability: "Out of Stock",
      price: "₱1,959.44",
    },
    {
      name: "TugTime Durable Dog Toy Rope",
      src: item4,
      model: "TT-RP-TOY-102",
      availability: "In Stock",
      price: "₱557.20",
    },
  ];
  return petSupplies;
};
