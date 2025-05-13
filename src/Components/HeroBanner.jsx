import { CallToAction } from "./CallToAction";
import { Caption } from "./Caption";
import bee from "/src/assets/Bee.png";

export const HeroBanner = () => {
  return (
    <>
      <div className=" w-screen h-[calc(100dvh-5rem)] content-center justify-items-center overflow-hidden">
        <div className="relative flex flex-col justify-items-center items-center size-full ">
        
          <img src={bee} alt="Brown Dog" className="size-dvh" />
          <CallToAction />
          <Caption
            text={
              "Give your furry friends the best with top-quality supplies, delicious treats, and must-have accessories—all in one place! 🦴"
            }
          />
        </div>
      </div>
    </>
  );
};
