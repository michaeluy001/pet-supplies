export const Card = (props) => {
  return (<>
    <div className=" space-y-10 my-10 justify-items-center h-screen ">
        <img src={props.card.imgSrc} alt={props.card.alt} className="w-full "/>
        <p className="px-10 h-30 text-center text-gray-800/60 text-2xl md:text-3xl lg:text-5xl">{props.card.caption}</p>
    </div>
  </>)
};
