import { Card } from "./Features-Card";
import { useCardContGen } from "./useCardContGen";

export const Features = () => {
  const cardArray = useCardContGen();
  return (
    <>
      <div className="w-screen bg-[var(--warm-sand)] my-20">
        <div className=" flex flex-col container overflow-hidden items-center">
          {cardArray.map((item, index) => (
            <Card key={index} card={item} />
          ))}
        </div>
      </div>
    </>
  );
};
