import { CallToAction } from "./CallToAction";
import { Caption } from "./Caption";
import bgPicture from "/src/assets/hero-bg.jpg";

export const HeroBanner = () => {
  const captionText =
    "Give your furry friends the best with top-quality supplies, delicious treats, and must-have accessories—all in one place! 🦴";
  return (
    <>
      <div className=" w-screen h-[calc(100dvh-5rem)] content-center justify-items-center overflow-hidden">
        <div className="relative flex flex-col justify-items-center items-center size-full ">
          <img
            src={bgPicture}
            alt="Brown Dog"
            className="size-full"
          />
          <div className="absolute w-full bottom-15  flex flex-col gap-3 items-center md:bottom-50">
            <CallToAction />
          </div>
          <div className="absolute top-1/2">
            <Caption text={captionText} />
          </div>
        </div>
      </div>
    </>
  );
};
