

export const LovePetsLogo = () => {
  return (
    <>
      {" "}
      <div className="relative">
        <div className="relative z-10 text-4xl font-bolder whitespace-nowrap">
          <span className="text-[var(--soft-purple)]">Love,</span>
          <span className="text-[var(--mint-green)]"> Pets</span>
    
        </div>
        <span className="text-[var(--vibrant-magenta)]/70 absolute -bottom-4 left-0 min-w-20 min-h-15 wrap-break-word text-2xl -rotate-10 bg-amber-200 z-1"></span>
        <span className="text-[var(--vibrant-magenta)]/70 absolute -bottom-4 left-1/2 min-w-20 min-h-15 wrap-break-word text-2xl -rotate-10 bg-amber-200 z-1"></span>
        {/* Overlay */}
        <div className="absolute z-0 top-0 size-full  rotate-12 justify-items-center justify-center ">

        
        </div>
      </div>
    </>
  );
};
