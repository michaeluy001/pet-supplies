export const Card = (props) => {
  return (
    <>
      <div
        className={`space-y-10  2xl:flex-col my-5 justify-items-center items-center xl:flex 2xl:w-100 ${
          props.id % 2 === 0 ? " xl:flex-row-reverse" : " xl:flex-row"
        } 2xl:`}
      >
        <img
          src={props.card.imgSrc}
          alt={props.card.alt}
          className="size-full xl:size-1/2 2xl:size-100"
        />
        <p className="px-8 text-center text-gray-800/60  text-lg sm:text-2xl md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-xl">
          {props.card.caption}
        </p>
      </div>
    </>
  );
};
