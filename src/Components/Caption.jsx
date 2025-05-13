export const Caption = (props) => {
  return (
    <>
      <p className="tracking-widest font-semibold absolute p-4 bottom-0 bg-gray-600/60 text-white">
        {props.text}
      </p>
    </>
  );
};
