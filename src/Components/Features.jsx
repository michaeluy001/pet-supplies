import { Card } from "./Features-Card";
import { FeatureTitle } from "./Features-Title";
import { useCardContGen } from "./useCardContGen";

export const Features = () => {
  const cardArray = useCardContGen();
  return (
    <>
      <div className="w-screen my-20">
        <FeatureTitle />
        <div className=" flex flex-col  overflow-hidden 2xl:flex-row 2xl:gap-20 justify-center">
          {cardArray.map((item, index) => (
            <Card key={index} id={index} card={item} />
          ))}
        </div>
      </div>
    </>
  );
};
