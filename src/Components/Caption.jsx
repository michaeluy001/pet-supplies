export const Caption = (props) => {
  return (
    <>
      <div className="justify-items-center m-auto lg:w-3/4 xl:w-1/3">
        <p className="tracking-widest font-semibold max-w-2/1 p-5 bg-gray-600/90 text-white text-center text-md sm:text-2xl md:text-4xl xl:text-2xl">
          {props.text}
        </p>
      </div>
    </>
  );
};
