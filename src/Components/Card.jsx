export const Card = (props) => {
  return (<>
    <div className="border-amber-100 border-1 w-full">
        <img src={props.card.imgSrc} alt={props.card.alt} className="size-full"></img>
        <p className="p-4  text-center text-gray-800/60">{props.card.caption}</p>
    </div>
  </>)
};
