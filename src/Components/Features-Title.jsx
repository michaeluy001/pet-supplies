export const FeatureTitle = () => {
  const baseStyle = `absolute size-full top-0 left-0 border-2`;
  return (
    
    <>
      <div className="relative  text-center size-80 m-auto text-5xl my-10 p-10 font-bold  bg-[(--mint-green)] tracking-wider">
        <div className={`${baseStyle} bg-[var(--vibrant-magenta)] rotate-6 z-5 hover:rotate-2 duration-700`} />
        <div className={`${baseStyle} bg-[var(--mint-green)] -rotate-6 z-6 hover:-rotate-2 duration-700`} />
        <div className={`${baseStyle} bg-[var(--soft-purple)] z-6 hover:rotate-2 duration-700`}>
          <p className="text-white size-full content-center border-2">
            What Makes Us Pawsome?
          </p>
        </div>
      </div>
      ;
    </>
  );
};
