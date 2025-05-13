import { Button } from "./Buttons";

export const CallToAction = () => {
  return (
    <>
      <div className="absolute top-1/2 w-full  text-center grid grid-flow-row justify-items-center gap-4">
        <Button> Shop Now </Button>
         <Button type="primary"> Contact Us </Button>
  
      </div>
    </>
  );
};
