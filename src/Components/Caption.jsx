export const Caption = (props) => {
  return (
    <>
      <p className="tracking-widest font-semibold p-5  bg-gray-600/90  text-white text-center text-md sm:text-2xl md:text-4xl lg:text-5xl">
        {props.text}
      </p>
    </>
  );
};
