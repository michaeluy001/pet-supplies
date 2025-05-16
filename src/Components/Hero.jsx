import { Button } from "./Buttons";
import { Caption } from "./Hero-Caption";
import bgPicture from "/src/assets/hero-bg.jpg";

export const HeroBanner = () => {
  const captionText =
    "Give your furry friends the best with top-quality supplies, delicious treats, and must-have accessories—all in one place! 🦴";
  return (
    <>
      <div className="relative justify-items-center w-screen h-[calc(100dvh-5rem)] overflow-hidden">

        <div style={{backgroundImage: `url(${bgPicture})`}} className="absolute size-full top-0 xl:left-1/2 bg-no-repeat  bg-cover  xl:-translate-x-1/2 blur"/>

        <div className="relative flex flex-col justify-items-center items-center h-screen w-screen backround ">
          
          <div className="absolute w-full flex flex-col gap-5 bottom-40 xl:bottom-1/4  xl:w-3/4  2xl:bottom-1/3">
            <div className="">
              <Caption text={captionText} />
            </div>
            <div className="items-center justify-center flex flex-col gap-3   lg:flex-row xl:gap-10">
              <Button> Shop Now </Button>
              <Button type="primary"> Contact Us </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
