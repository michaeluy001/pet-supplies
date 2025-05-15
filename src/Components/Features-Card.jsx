export const Card = (props) => {
  return (<>
    <div className="space-y-10 my-5 justify-items-center">
        <img src={props.card.imgSrc} alt={props.card.alt} className="w-full "/>
        <p className="px-8 text-center text-gray-800/60  text-lg md:text-3xl lg:text-5xl">{props.card.caption}</p>
    </div>
  </>)
};
