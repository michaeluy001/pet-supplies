export const Caption = (props) => {
  return (
    <>
      <p className="tracking-widest font-semibold p-5  bg-gray-600/90  text-white text-3xl">
        {props.text}
      </p>
    </>
  );
};
