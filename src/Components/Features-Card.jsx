export const Card = ({ card, id }) => {
  return (
    <>
      <div
        className={`space-y-10 items-center my-5 lg:flex 2xl:flex-col 2xl:w-100  ${
          id % 2 === 0 ? " lg:flex-row-reverse" : " lg:flex-row"
        }`}
      >
        <div className="overflow-hidden">
          <img
            src={card.imgSrc}
            alt={card.alt}
            className="size-full sm:w-200 lg:w-200 2xl:size-100 hover:scale-110 active:scale:110 duration-[4s] "
          />
        </div>
        <p className="px-8 text-center text-gray-800/60  text-lg sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-xl">
          {card.caption}
        </p>
      </div>
    </>
  );
};
