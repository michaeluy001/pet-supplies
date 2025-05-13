export const Button = ({
  className = "",
  type = "default",
  children,
  onClick,
}) => {
  const variants = {
    default: "bg-amber-100 ring-2 ring-amber-50 text-black",
    primary: "bg-orange-400 ring-2 ring-orange-300 text-white",
  };

  const base = "w-50 h-10 rounded-2xl active:scale-90 transition-transform";

  return (
    <>
      <button
        onClick={onclick}
        className={`${className} ${variants[type]} ${base}`}
      >
        {" "}
        {children}{" "}
      </button>
    </>
  );
};
