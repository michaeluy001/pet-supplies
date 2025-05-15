export const Caption = (props) => {
  return (
    <>
      <div className=" bg-gray-600/90 justify-items-center">
        <p className="tracking-widest font-semibold max-w-2/1 p-5  text-white text-center text-md sm:text-2xl md:text-4xl lg:text-5xl">
          {props.text}
        </p>
      </div>
    </>
  );
};
