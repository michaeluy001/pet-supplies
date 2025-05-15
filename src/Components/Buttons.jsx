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
    "w-50 h-10 rounded-2xl active:scale-90 transition-transform md:w-60 md:h-15 lg:w-80 lg:h-20";

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
