import { Button } from "./Buttons";
import { Caption } from "./Caption";
import bgPicture from "/src/assets/hero-bg.jpg";


export const HeroBanner = () => {
  const captionText =
    "Give your furry friends the best with top-quality supplies, delicious treats, and must-have accessories—all in one place! 🦴";
  return (
    <>
      <div className=" justify-items-center h-[calc(100dvh-5rem)] overflow-hidden">
        <div className="relative flex flex-col justify-items-center items-center h-screen ">
          <img
            src={bgPicture}
            alt="Kittens"
            className="h-full aspect-1/1 object-cover"
          />
          <div className="absolute w-full flex flex-col gap-3 items-center bottom-35 sm:bottom-55 md:bottom-68 lg:bottom-85 sm:text-2xl md:text-3xl lg:text-4xl">
            <Button> Shop Now </Button>
            <Button type="primary"> Contact Us </Button>
          </div>
          <div className="absolute top-2/5">
            <Caption text={captionText} />
          </div>
        </div>
      </div>
    </>
  );
};
