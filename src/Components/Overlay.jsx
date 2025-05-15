export const Overlay = () => {
  return (
    <>
      <div className="z-1">
        <div className="absolute container bottom-50 right-1/2 size-30 rounded-full bg-[var(--mint-green)]/30 md:size-50 lg:size-60" />
        <div className="absolute container -bottom-15 -right-5 size-70 rounded-full bg-[var(--soft-purple)]/50 md:size-90 lg:size-140" />
      </div>
    </>
  );
};
