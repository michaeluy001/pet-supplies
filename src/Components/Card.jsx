export const Card = (props) => {
  return (<>
    <div className="border-amber-100 space-y-5">
        <img src={props.card.imgSrc} alt={props.card.alt} className="aspect-1/1 scale-95"></img>
        <p className="px-10 h-30 text-center text-gray-800/60">{props.card.caption}</p>
    </div>
  </>)
};
