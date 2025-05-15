import { Card } from "./Features-Card";
import { FeatureTitle } from "./Features-Title";
import { useCardContGen } from "./useCardContGen";

export const Features = () => {
  const cardArray = useCardContGen();
  return (
    <>
      <div className="w-screen my-20">
        <FeatureTitle />
        <div className=" flex flex-col  overflow-hidden ">
          {cardArray.map((item, index) => (
            <Card key={index} card={item} />
          ))}
        </div>
      </div>
    </>
  );
};
