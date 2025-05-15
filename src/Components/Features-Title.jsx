export const FeatureTitle = () => {
  return (
    <>
      <div className="relative  text-center size-80 m-auto text-5xl my-10 p-10 font-bold  bg-[(--mint-green)] tracking-wider">
        <div className="absolute size-full top-0 left-0 bg-[var(--vibrant-magenta)] rotate-6 z-5" />
        <div className="absolute size-full top-0 left-0 bg-[var(--mint-green)] -rotate-6 z-6 " />
        <div className="absolute size-full top-0 left-0 bg-[var(--soft-purple)]  z-6 ">
          <p className="text-white size-full content-center">
            What Makes Us Pawsome?
          </p>
        </div>
      </div>
      ;
    </>
  );
};
