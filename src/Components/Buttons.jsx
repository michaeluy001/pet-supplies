export const Button = ({
  className = "",
  type = "default",
  children,
  onClick,
}) => {
  const variants = {
    default: "bg-orange-200 ring-2 ring-amber-50 text-black",
    primary: "bg-orange-400 ring-2 ring-orange-300 text-white",
  };

  const base =
    "w-50 h-10 rounded-2xl active:scale-90 transition-transform md:w-60 md:h-15 lg:w-70 xl:w-40 xl:h-8 sm:text-2xl md:text-3xl lg:text-4xl xl:text-lg";

  return (
    <>
      <button
        onClick={onClick}
        className={`${className} ${variants[type]} ${base}`}
      >
        {children}
      </button>
    </>
  );
};
