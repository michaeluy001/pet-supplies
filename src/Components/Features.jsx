import { Card } from "./Features-Card";
import { useCardContGen } from "./useCardContGen";

export const Features = () => {
  const cardArray = useCardContGen();
  return (
    <>
      <div className="w-screen  my-20">
        <div className=" flex flex-col  overflow-hidden ">
          {cardArray.map((item, index) => (
            <Card key={index} card={item} />
          ))}
        </div>
      </div>
    </>
  );
};
